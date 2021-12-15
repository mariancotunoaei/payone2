import React, { useEffect, useState, useRef, Fragment } from 'react';
import ChapterActions from 'containers/ChapterActions';
import FormContent from './FormContent';
import Button from 'stories/Button';
import SectionWrapper from 'components/SectionWrapper';

import { local_getApplicationStructure } from 'selectors/applicationStructure';
import { local_saveApplicationStructure } from 'actions/application-structure';
import { triggerRefreshAllFields } from 'actions/chapterActions';
import { changeAppLanguage } from 'actions/application-field-logic';
import { prepareFormulaToBeInGoodShape } from 'actions/utils';

import './index.scss';
import { addErrors } from 'actions/notifications';
import { goToPage } from 'actions/browser-location';

const FormGenerator = props => {
    const {
        currentChapterIndex,
        currentChapterCode,
        currentChapterRenderConditions,
        totalNumberOfChapters,
        translate,
        displayFieldValidations = false,
        refreshAllFields = 0
    } = props;

    const [tempSections, setTempSections] = useState([]);
    const [fieldsValidity, setFieldsValidity] = useState({});
    const [lastModifiedFieldCode, setLastModifiedFieldCode] = useState({});

    const getField = (chapterCode, sectionCode, fieldCode, isChildSection = false, parentSectionCode) => {
        let sections = [];
        // check if we need to take the field from current state or from Redux structure
        if (chapterCode === currentChapterCode) {
            // then we should take the field from state
            sections = tempSections;
        } else {
            // we should take the field from Redux state
            const chapters = local_getApplicationStructure().chapters || [];
            const foundChapter = chapters.find(chapter => chapter.code === chapterCode);
            sections = foundChapter.sections;
        }

        let foundSection;
        if(isChildSection) {
            const foundParentSection = sections.find(section => section.code === parentSectionCode);
            if(!foundParentSection) {
                return {};
            }
            const childSections = foundParentSection.childSections || [];
            foundSection = childSections.find(chSection => chSection.code === sectionCode);
        } else {
            foundSection = sections.find(section => section.code === sectionCode);
        }

        if (!foundSection) {
            return {};
        }
        const foundField = (foundSection.fields || []).find(field => field.code === fieldCode);
        return foundField;
    };

    const setField = (modifiedSectionIndex, modifiedFieldIndex, attrName, newAttrValue, isChildSection = false, parentSectionIndex) => {
        if(isChildSection) {
            let nextTempSections = JSON.parse(JSON.stringify(tempSections));
            nextTempSections[parentSectionIndex].childSections[modifiedSectionIndex].fields[modifiedFieldIndex][attrName] = newAttrValue;
            setTempSections(nextTempSections);
            setLastModifiedFieldCode(nextTempSections[parentSectionIndex].childSections[modifiedSectionIndex].fields[modifiedFieldIndex].code);
        } else {
            let nextTempSections = JSON.parse(JSON.stringify(tempSections));
            nextTempSections[modifiedSectionIndex].fields[modifiedFieldIndex][attrName] = newAttrValue;
            setTempSections(nextTempSections);
            setLastModifiedFieldCode(nextTempSections[modifiedSectionIndex].fields[modifiedFieldIndex].code);
        }

        triggerRefreshAllFields();
    };

    const clearField = (sectionIndex, fieldIndex, isChildSection = false, parentSectionIndex) => {
        setField(sectionIndex, fieldIndex, 'value', null, isChildSection, parentSectionIndex);
    };

    const clearSectionFields = (sectionIndex, isChildSection = false, parentSectionIndex) => {
        if(isChildSection) {
            tempSections[parentSectionIndex].childSections[sectionIndex].fields.forEach((field, fieldIndex) => {
                if (field.value || field.value == 0) {
                    clearField(sectionIndex, fieldIndex, true, parentSectionIndex);
                }
                if (!fieldsValidity[field.code]) {
                    setFieldValidity(field.code, true);
                }
            });
        } else {
            tempSections[sectionIndex].fields.forEach((field, fieldIndex) => {
                if (field.value || field.value == 0) {
                    clearField(sectionIndex, fieldIndex);
                }
                if (!fieldsValidity[field.code]) {
                    setFieldValidity(field.code, true);
                }
            });
        }
    };

    const clearChapterFields = chapterIndex => {
        const appStructure = local_getApplicationStructure();
        const { chapters = [] } = appStructure;
        let clearedChapter = JSON.parse(JSON.stringify(chapters[chapterIndex]));
        const { sections = [] } = clearedChapter;
        sections.forEach((section, sectionIndex) => {
            const { fields = [] } = section;
            fields.forEach((field, fieldIndex) => {
                if (field.value || field.value == 0) {
                    delete clearedChapter.sections[sectionIndex].fields[fieldIndex].value;
                }
            });
            clearedChapter.sections[sectionIndex].childSections = [];
        });

        local_saveApplicationStructure({
            ...appStructure,
            chapters: [
                ...appStructure.chapters.map((ch, chIndex) => {
                    if (chIndex === chapterIndex) {
                        return clearedChapter;
                    }
                    return ch;
                }),
            ],
        });
    };

    const getMaxChildSectionIndex = (childSections = []) => {
        let maxIndex = 0;
        childSections.forEach(chS => {
            const chSuffix = Number(chS.code.split('_').pop());
            if(maxIndex < chSuffix) {
                maxIndex = chSuffix;
            }
        })
        return maxIndex;
    }

    const createChildSection = (parentSectionIndex) => {
        let nextTempSections = JSON.parse(JSON.stringify(tempSections));
        let nextChildSections = nextTempSections[parentSectionIndex].childSections || [];
        const suffix = getMaxChildSectionIndex(nextChildSections) + 1;
        const nextChildSection = {
            ...nextTempSections[parentSectionIndex],
            allowedMultiple: false,
            maxNumberOfSections: null,
            minNumberOfSections: null,
            childSections: null,
            code: `${nextTempSections[parentSectionIndex].code}_${suffix}`,
            fields: (nextTempSections[parentSectionIndex].fields || []).map(field => {
                let newField = {
                    ...field,
                    code: `${field.code}_${suffix}`,
                    sectionCode: `${field.sectionCode}_${suffix}`,
                }

                if(field.renderConditions && field.renderConditions.args) {
                    newField.renderConditions = {
                        ...field.renderConditions,
                        args: [
                            ...field.renderConditions.args.map(arg => ({
                                ...arg,
                                childSectionIndex: suffix
                            }))
                        ]
                    }
                }

                return newField;
            }),
            sequence: nextChildSections.length + 1
        }
        nextChildSections.push(nextChildSection);
        nextTempSections[parentSectionIndex].childSections = nextChildSections;
        setTempSections(nextTempSections);
    };

    const deleteChildSection = (parentSectionIndex, childSectionIndex) => {
        let nextTempSections = JSON.parse(JSON.stringify(tempSections));
        let nextChildSections = nextTempSections[parentSectionIndex].childSections || [];
        nextChildSections.splice(childSectionIndex, 1);
        nextTempSections[parentSectionIndex].childSections = nextChildSections;
        setTempSections(nextTempSections);
        // reset all the fields validity (mark them all as valid)
        setFieldsValidity({})
        // trigger the refresh for all the fields (which will determine the fields to recheck the validity of the fields)
        triggerRefreshAllFields();
    };

    const setFieldValidity = (fieldCode, validity) => {
        setFieldsValidity(prev => ({
            ...prev,
            [fieldCode]: validity,
        }));
    };

    const isCurrentScreenValid = () => {
        return !Object.keys(fieldsValidity).find(fieldCode => fieldsValidity[fieldCode] === false);
    };

    const renderConditionHasChanged = renderConditions => {
        if (!renderConditions) {
            return false;
        }
        const { args = [] } = renderConditions;
        let found = false;
        args.forEach(arg => {
            const { code, childSectionIndex = -1 } = arg;
            let relatedFieldCode = code.split('.').pop();
            if(childSectionIndex !== -1) {
                relatedFieldCode += `_${childSectionIndex}`;
            }
            if(relatedFieldCode === lastModifiedFieldCode) {
                found = true;
            }
        });
        return found;
    };

    const evalRenderConditions = renderConditions => {
        if (!renderConditions) {
            return true;
        }
        const { args = [], formula } = renderConditions;
        let validConditions = args.map(arg => {
            const { code, operator, value, childSectionIndex = -1 } = arg;
            let [relatedChapterCode, relatedSectionCode, relatedFieldCode] = code.split('.');
            let parentSectionCode;
            if(childSectionIndex !== -1) {
                parentSectionCode = relatedSectionCode;
                relatedSectionCode += `_${childSectionIndex}`;
                relatedFieldCode += `_${childSectionIndex}`;
            }

            let relatedField = {};
            if(childSectionIndex !== -1) {
                relatedField = getField(relatedChapterCode, relatedSectionCode, relatedFieldCode, true, parentSectionCode);
            } else {
                relatedField = getField(relatedChapterCode, relatedSectionCode, relatedFieldCode);
            }

            if (!relatedField) {
                addErrors([
                    `The following combination is not ok for the render conditions structure: (${relatedChapterCode}, ${relatedSectionCode}, ${relatedFieldCode})!`,
                ]);
                return;
            } else if (!formula) {
                addErrors([
                    `There is no formula on the following render conditions structure: (${relatedChapterCode}, ${relatedSectionCode}, ${relatedFieldCode})!`,
                ]);
                return;
            }

            let relatedStoredValue = '';
            if (relatedField.value || relatedField.value == 0) {
                relatedStoredValue = relatedField.value;
            } else if (relatedField.defaultValue || relatedField.defaultValue == 0) {
                relatedStoredValue = relatedField.defaultValue;
            }
            if (operator === 'eq') {
                return relatedStoredValue.toString() === value.toString();
            } else if (operator === 'neq') {
                return relatedStoredValue.toString() !== value.toString();
            } else if (operator === 'gt') {
                return Number(relatedStoredValue || 0) > Number(value);
            } else if (operator === 'gte') {
                return Number(relatedStoredValue || 0) >= Number(value);
            } else if (operator === 'lt') {
                return Number(relatedStoredValue || 0) < Number(value);
            } else if (operator === 'lte') {
                return Number(relatedStoredValue || 0) <= Number(value);
            } else if (operator === 'in') {
                let conditionValueArr = value.toString().split('|');
                return conditionValueArr.indexOf(relatedStoredValue.toString()) !== -1;
            } else if (operator === 'nin') {
                let conditionValueArr = value.toString().split('|');
                return conditionValueArr.indexOf(relatedStoredValue.toString()) === -1;
            }
        });

        let goodLookingFormula = prepareFormulaToBeInGoodShape(formula);

        // aici trebuie adaptata formula ---- in functie de ce am obtinut aplicand conditiile in vector
        let formulaTranslation = '';
        let formulaOpperatorsMapping = {
            AND: '&&',
            OR: '||',
        };

        goodLookingFormula.split(' ').forEach(elem => {
            // if the elem is some of the following -> AND, OR, (, )
            if (isNaN(elem)) {
                formulaTranslation += formulaOpperatorsMapping[elem] || elem;
            } else {
                formulaTranslation += validConditions[elem - 1] || false;
            }
        });

        // apoi ar trebui urcata mai sus aceasta metoda probabil pentru a putea fi apelata si pentru chapters --- poate si sections
        return eval(formulaTranslation);
    };

    const treatBehaviorFor = (fieldCode, fieldValue) => {
        if (fieldCode === 'language_dropdown') {
            changeAppLanguage(fieldValue);
        }
    };

    useEffect(() => {
        setFieldsValidity({});
        setTempSections(props.sections);
    }, [props.sections]);

    // keep track of the last chapter index to know what screen we should go next, if the current screen is hidden
    const prevChapterIndexRef = useRef();
    useEffect(() => {
        prevChapterIndexRef.current = props.currentChapterIndex;
    });
    const prevChapterIndex = prevChapterIndexRef.current;

    useEffect(() => {
        const shouldRenderChapter = evalRenderConditions(currentChapterRenderConditions);
        if (!shouldRenderChapter) {
            clearChapterFields(currentChapterIndex - 1);
            let transitionDirection = props.currentChapterIndex - prevChapterIndex;
            // if the user introduces the number of the chapter into the URL
            // and the chapter should be hidden, then transitionDirection will be NaN
            if (transitionDirection > 0 || isNaN(transitionDirection)) {
                goToPage(`/screen/${currentChapterIndex + 1}`, false);
            } else if (transitionDirection < 0) {
                goToPage(`/screen/${currentChapterIndex - 1}`, false);
            }
        }
    }, [props.currentChapterIndex]);

    return (
        <>
            <div className='sections-wrapper'>
                {tempSections.map((section, sectionIndex) => {
                    const shouldRenderSection = evalRenderConditions(section.renderConditions);
                    const shouldClearSection = renderConditionHasChanged(section.renderConditions);

                    if (!shouldRenderSection) {
                        clearSectionFields(sectionIndex);
                        return;
                    }

                    if(shouldClearSection) {
                        clearSectionFields(sectionIndex);
                    }

                    if(section.allowedMultiple) {
                        const parentSectionIndex = sectionIndex;
                        const numberOfChildSections = section.childSections.length;
                        return (
                            <SectionWrapper
                                key={section.code}
                                title={translate(section.title)}
                                description={translate(section.description)}
                                displayCheckbox={section.displayCheckbox}
                                hideLabel={section.hideLabel}
                            >
                                {section.childSections.map((chSection, chSectionIndex) => (
                                    <React.Fragment key={chSection.code}>
                                        <FormContent
                                            section={chSection}
                                            sectionIndex={chSectionIndex}
                                            maxNumberOfSectionsAllowed={section.maxNumberOfSections}
                                            minNumberOfSectionsAllowed={section.minNumberOfSections}
                                            parentSectionIndex={parentSectionIndex}
                                            translate={translate}
                                            displayFieldValidations={displayFieldValidations}
                                            refreshAllFields={refreshAllFields}
                                            getField={(chapterCode, sectionCode, fieldCode) => getField(chapterCode, chSection.code, fieldCode, true, sectionCode)}
                                            clearField={(sectionIndex, fieldIndex) => clearField(sectionIndex, fieldIndex, true, parentSectionIndex)}
                                            setField={(sectionIndex, fieldIndex, attrName, value) => setField(sectionIndex, fieldIndex, attrName, value, true, parentSectionIndex)}
                                            fieldsValidity={fieldsValidity}
                                            setFieldValidity={setFieldValidity}
                                            evalRenderConditions={evalRenderConditions}
                                            renderConditionHasChanged={renderConditionHasChanged}
                                            treatBehaviorFor={treatBehaviorFor}
                                            deleteChildSection={deleteChildSection}
                                        />
                                        {
                                            chSectionIndex !== (numberOfChildSections - 1) && <div className='break-form'></div>
                                        }
                                    </React.Fragment>
                                ))}
                                {
                                    section.allowedMultiple &&
                                    (
                                        (!section.maxNumberOfSections && section.maxNumberOfSections !== 0) ||
                                        (section.maxNumberOfSections && numberOfChildSections < section.maxNumberOfSections)
                                    ) ? (
                                        <>
                                            <Button
                                                type="Primary"
                                                className='add-remove-section-btn'
                                                onClick={() => createChildSection(parentSectionIndex)}
                                            >
                                                +
                                            </Button>
                                        </>
                                    ) : ''
                                }
                            </SectionWrapper>
                        )
                    }

                    return (
                        <SectionWrapper
                            key={section.code}
                            title={translate(section.title)}
                            description={translate(section.description)}
                            displayCheckbox={section.displayCheckbox}
                            hideLabel={section.hideLabel}
                        >
                            <FormContent
                                key={section.code}
                                section={section}
                                sectionIndex={sectionIndex}
                                translate={translate}
                                displayFieldValidations={displayFieldValidations}
                                refreshAllFields={refreshAllFields}
                                getField={(chapterCode, sectionCode, fieldCode) => getField(chapterCode, sectionCode, fieldCode)}
                                clearField={(sectionIndex, fieldIndex) => clearField(sectionIndex, fieldIndex)}
                                setField={(sectionIndex, fieldIndex, attrName, value) => setField(sectionIndex, fieldIndex, attrName, value)}
                                fieldsValidity={fieldsValidity}
                                setFieldValidity={setFieldValidity}
                                evalRenderConditions={evalRenderConditions}
                                renderConditionHasChanged={renderConditionHasChanged}
                                treatBehaviorFor={treatBehaviorFor}
                            />
                        </SectionWrapper>
                    )
                })}
            </div>

            <div className='chapter-footer'>
                <ChapterActions
                    currentChapterIndex={currentChapterIndex}
                    totalNumberOfChapters={totalNumberOfChapters}
                    modifiedSections={tempSections}
                    isCurrentScreenValid={isCurrentScreenValid()}
                    nextBtnTranslation={translate('next')}
                    previousBtnTranslation={translate('previous')}
                    saveBtnTranslation={translate('save')}
                    evalRenderConditions={renderCondition => evalRenderConditions(renderCondition)}
                />
            </div>
        </>
    );
};

export default FormGenerator;
