import React from 'react';
import classNames from 'classnames';
import Button from 'stories/Button';
import { goToPage } from 'actions/browser-location';
import { setLoaderVisibility } from 'actions/ui';
import { addErrors, addSuccessMsgs } from 'actions/notifications';
import { remote_saveApplicationStructure } from 'actions/remote';
import { setFieldValidationsVisibility } from 'actions/chapterActions';
import { local_saveApplicationStructure } from 'actions/application-structure';
import { getStructureWithEmptyHiddenFields } from 'actions/utils';

import { getState } from 'globals/scripts/store';

import './index.scss';

const getUpdatedApplicationStructure = (modifiedSections = [], currentChapterIndex) => {
    let oldApplicationStructure = getState().applicationStructure;
    let finalApplicationStructure = JSON.parse(JSON.stringify(oldApplicationStructure));
    finalApplicationStructure.chapters[currentChapterIndex - 1].sections = modifiedSections;
    return finalApplicationStructure;
};

// const prepareSpecialFields = (modifiedSections = []) => {
//     return modifiedSections.map(section => {
//         return {
//             ...section,
//             fields: section.fields.map(field => {
//                 if(field.type === 'onb_standardPicklist') {
//                     return {
//                         ...field,
//                         value: (field.value || {}).value
//                     }
//                 }
//                 return field;
//             })
//         }
//     })
// }

const ChapterActions = (props) => {
    const {
        currentChapterIndex,
        totalNumberOfChapters,
        modifiedSections,
        isCurrentScreenValid,
        nextBtnTranslation,
        previousBtnTranslation,
        saveBtnTranslation,
        evalRenderConditions
    } = props;

    return (
        <div className='chapter-actions'>
            {
                currentChapterIndex === totalNumberOfChapters &&
                <>
                    {
                        currentChapterIndex !== 1 &&
                        <Button
                            type="Secondary"
                            className='half-width-button'
                            onClick={() => {
                                const applicationStructure = getUpdatedApplicationStructure(modifiedSections, currentChapterIndex);
                                const finalApplicationStructure = getStructureWithEmptyHiddenFields(applicationStructure, evalRenderConditions);
                                local_saveApplicationStructure(finalApplicationStructure);

                                goToPage(`/screen/${currentChapterIndex - 1}`);
                            }}
                        >
                            {/*** BACK ***/}
                            {previousBtnTranslation}
                        </Button>
                    }
                    <Button
                        type="Primary"
                        className={classNames({
                            // 'half-width-button': currentChapterIndex !== 1,
                            // 'full-width-button': currentChapterIndex === 1
                            // 'disabled': !isCurrentScreenValid
                        })}
                        onClick={() => {
                            setFieldValidationsVisibility(true);

                            if (!isCurrentScreenValid) {
                                addErrors(['Please review the introduced information!']);
                                return;
                            }

                            setFieldValidationsVisibility(false);

                            setLoaderVisibility(true);

                            const applicationStructure = getUpdatedApplicationStructure(modifiedSections, currentChapterIndex);
                            const finalApplicationStructure = getStructureWithEmptyHiddenFields(applicationStructure, evalRenderConditions);
                            local_saveApplicationStructure(finalApplicationStructure);
                            remote_saveApplicationStructure(JSON.stringify(finalApplicationStructure))
                                .then((res) => {
                                    if (res) {
                                        addSuccessMsgs(['Your data has been saved!']);
                                    }
                                    setLoaderVisibility(false);
                                })
                                .catch((error) => {
                                    addErrors([error.toString()]);
                                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                                        addSuccessMsgs(['Workflow completed successfully!']);
                                    }
                                    setLoaderVisibility(false);
                                });
                        }}
                    >
                        {/*** SAVE ***/}
                        {saveBtnTranslation}
                    </Button>
                </>
            }
            {
                currentChapterIndex < totalNumberOfChapters &&
                <>
                    {
                        currentChapterIndex !== 1 &&
                        <Button
                            type="Secondary"
                            className='half-width-button'
                            onClick={() => {
                                const applicationStructure = getUpdatedApplicationStructure(modifiedSections, currentChapterIndex);
                                const finalApplicationStructure = getStructureWithEmptyHiddenFields(applicationStructure, evalRenderConditions);
                                local_saveApplicationStructure(finalApplicationStructure);

                                goToPage(`/screen/${currentChapterIndex - 1}`);
                            }}
                        >
                            {/*** BACK ***/}
                            {previousBtnTranslation}
                        </Button>
                    }
                    <Button
                        type="Primary"
                        className={classNames({
                            // 'half-width-button': currentChapterIndex !== 1,
                            // 'full-width-button': currentChapterIndex === 1
                        })}
                        onClick={() => {
                            setFieldValidationsVisibility(true);

                            if (!isCurrentScreenValid) {
                                addErrors(['Please review the introduced information!']);
                                return;
                            }

                            setFieldValidationsVisibility(false);

                            setLoaderVisibility(true);

                            const applicationStructure = getUpdatedApplicationStructure(modifiedSections, currentChapterIndex);
                            const finalApplicationStructure = getStructureWithEmptyHiddenFields(applicationStructure, evalRenderConditions);
                            local_saveApplicationStructure(finalApplicationStructure);
                            remote_saveApplicationStructure(JSON.stringify(finalApplicationStructure))
                                .then((res) => {
                                    if (res) {
                                        addSuccessMsgs(['Your data has been saved!']);
                                        goToPage(`/screen/${currentChapterIndex + 1}`);
                                    }
                                    setLoaderVisibility(false);
                                })
                                .catch((error) => {
                                    addErrors([error.toString()]);
                                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                                        goToPage(`/screen/${currentChapterIndex + 1}`);
                                    }
                                    setLoaderVisibility(false);
                                });
                        }}
                    >
                        {/*** NEXT ***/}
                        {nextBtnTranslation}
                    </Button>
                </>
            }
        </div>
    );
};

export default ChapterActions;
