import React from 'react';

import Button from 'stories/Button';
import TextField from 'components/TextField';
import EmailField from 'components/EmailField';
import PhoneField from 'components/PhoneField';
import CreditCardField from 'components/CreditCardField';
import NumberField from 'components/NumberField';
import PercentageField from 'components/PercentageField';

import Checkbox from 'components/Checkbox';
import DropdownField from 'components/DropdownField';
// import MultiDropdownField from 'components/MultiDropdownField';
import DatePicker from 'components/DatePicker';
import RadioGroup from 'components/RadioGroup';
import PricePerMonthField from 'components/ProductPrices/PricePerMonthField';
import TotalPriceField from 'components/ProductPrices/TotalPriceField';
import FileUploadField from 'components/FileUploadField';

import { MdEuroSymbol } from 'react-icons/md';
import FreeText from 'components/FreeText';
import BulletFreeText from 'components/BulletFreeText';
import NewLine from 'components/NewLine';
import { triggerRefreshAllFields } from 'actions/chapterActions';

const FormContent = ({
    section = {},
    sectionIndex,
    maxNumberOfSectionsAllowed,
    minNumberOfSectionsAllowed,
    parentSectionIndex,
    translate = {},
    displayFieldValidations = false,
    refreshAllFields = 0,
    getField,
    clearField,
    setField,
    fieldsValidity = {},
    setFieldValidity,
    evalRenderConditions,
    renderConditionHasChanged,
    treatBehaviorFor,
    deleteChildSection
}) => {
    return (
        <>
            {
                section.fields.map((field, fieldIndex) => {
                    const commonFieldProps = {
                        name: field.code,
                        value: field.value,
                        label: translate(field.label),
                        defaultValue: field.defaultValue,
                        disabled: field.readOnly,
                        validations: {
                            required: field.required,
                            custom: (field.validations || []).map(v => ({
                                ...v,
                                errorMessage: translate(v.errorMessage),
                            })),
                        },
                        requiredErrorMessage: translate(field.requiredErrorMessage || 'requiredErrorMessage'),
                        displayFieldValidations,
                        refreshAllFields,
                        onCheckIfValid: validity => setFieldValidity(field.code, validity),
                        onGetRelatedField: (chapterCode, sectionCode, fieldCode) => getField(chapterCode, sectionCode, fieldCode),
                    };

                    const shouldRenderField = evalRenderConditions(field.renderConditions);
                    const shouldClearValue = renderConditionHasChanged(field.renderConditions);

                    if (!shouldRenderField) {
                        if (field.value || field.value == 0) {
                            clearField(sectionIndex, fieldIndex);
                        }
                        if (!fieldsValidity[field.code]) {
                            setFieldValidity(field.code, true);
                        }
                        return;
                    }

                    if(shouldClearValue) {
                        if (field.value || field.value == 0) {
                            clearField(sectionIndex, fieldIndex);
                            triggerRefreshAllFields();
                        }
                    }

                    return (
                        <React.Fragment key={field.code}>
                            {field.breakBefore && <div className='break-form'></div>}
                            {field.type === 'onb_standardText' && (
                                <TextField
                                    prefix={field.prefix}
                                    onBlur={value => setField(sectionIndex, fieldIndex, 'value', value)}
                                    {...commonFieldProps}
                                />
                            )}
                            {field.type === 'onb_horizontalRadioButtonsGroup' && (
                                <RadioGroup
                                    options={(field.options || []).map(opt => ({
                                        ...opt,
                                        label: translate(opt.label),
                                    }))}
                                    onChange={value => setField(sectionIndex, fieldIndex, 'value', value)}
                                    {...commonFieldProps}
                                />
                            )}
                            {field.type === 'onb_numberInput' && (
                                <NumberField
                                    icon={<MdEuroSymbol />}
                                    onBlur={value => setField(sectionIndex, fieldIndex, 'value', value)}
                                    {...commonFieldProps}
                                />
                            )}
                            {field.type === 'onb_percentageInput' && (
                                <PercentageField onBlur={value => setField(sectionIndex, fieldIndex, 'value', value)} {...commonFieldProps} />
                            )}
                            {field.type === 'onb_emailField' && (
                                <EmailField onBlur={value => setField(sectionIndex, fieldIndex, 'value', value)} {...commonFieldProps} />
                            )}
                            {field.type === 'onb_phoneInput' && (
                                <PhoneField onBlur={value => setField(sectionIndex, fieldIndex, 'value', value)} {...commonFieldProps} />
                            )}
                            {field.type === 'onb_creditCard' && (
                                <CreditCardField onBlur={value => setField(sectionIndex, fieldIndex, 'value', value)} {...commonFieldProps} />
                            )}
                            {field.type === 'onb_boxedCheckbox' && (
                                <Checkbox onChange={value => setField(sectionIndex, fieldIndex, 'value', value)} {...commonFieldProps} />
                            )}
                            {field.type === 'onb_standardPicklist' && (
                                <DropdownField
                                    options={(field.options || []).map(opt => ({
                                        ...opt,
                                        label: translate(opt.label),
                                    }))}
                                    onChange={value => {
                                        setField(sectionIndex, fieldIndex, 'value', value);
                                        treatBehaviorFor(field.code, value);
                                    }}
                                    {...commonFieldProps}
                                />
                            )}
                            {field.type === 'onb_dateInput' && (
                                <DatePicker
                                    onChange={selectedDate => setField(sectionIndex, fieldIndex, 'value', selectedDate)}
                                    {...commonFieldProps}
                                />
                            )}
                            {field.type === 'onb_fileUpload' && (
                                <FileUploadField
                                    dragHereTranslation={translate('drag-here')}
                                    noFilesUploadedTranslation={translate('no-files-uploaded')}
                                    uploadedTranslation={translate('uploaded-files')}
                                    {...commonFieldProps}
                                />
                            )}
                            {field.type === 'onb_pricePerMonth' && (
                                <PricePerMonthField
                                    label={translate(field.label)}
                                    currencySymbol={field.currencySymbol}
                                    availableOptions={field.availableOptions}
                                    onGetRelatedField={commonFieldProps.onGetRelatedField}
                                    storedValue={field.value}
                                    onChange={value => setField(sectionIndex, fieldIndex, 'value', value)}
                                />
                            )}
                            {field.type === 'onb_totalPrice' && (
                                <TotalPriceField
                                    label={translate(field.label)}
                                    currencySymbol={field.currencySymbol}
                                    onGetRelatedField={commonFieldProps.onGetRelatedField}
                                    storedValue={field.value}
                                    onChange={value => setField(sectionIndex, fieldIndex, 'value', value)}
                                />
                            )}
                            {field.type === 'onb_checkbox' && (
                                <Checkbox
                                    onChange={value => setField(sectionIndex, fieldIndex, 'value', value)}
                                    {...commonFieldProps}
                                    hideLabel={field.hideLabel}
                                />
                            )}
                            {field.type === 'onb_freeText' && (
                                <FreeText label={translate(field.label)} urls={field.urls} boldText={field.boldText}/>)}
                            {field.type === 'onb_blankSpace' && (
                                <NewLine numberOfSpaces={field.numberOfSpaces} />
                            )}
                            {field.type === 'onb_bulletFreeText' && (
                                <BulletFreeText
                                    label={translate(field.label)}
                                    urls={field.urls} />
                            )}

                        </React.Fragment>
                    );
                })
            }

            {
                (parentSectionIndex || parentSectionIndex === 0) &&
                (
                    (!minNumberOfSectionsAllowed && sectionIndex >= 0) ||
                    (minNumberOfSectionsAllowed && sectionIndex > (minNumberOfSectionsAllowed - 1))
                ) ? (
                    <Button
                        type="Secondary"
                        className='add-remove-section-btn'
                        onClick={() => deleteChildSection(parentSectionIndex, sectionIndex)}
                    >
                        -
                    </Button>
                ) : ''
            }
        </>
    )
};

export default FormContent;
