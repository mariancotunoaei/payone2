import React, { useEffect, useState } from 'react';
import {AiOutlinePercentage} from 'react-icons/ai'
import classNames from 'classnames';
import { VALIDATION_TYPE_MAX_VALUE, VALIDATION_TYPE_MIN_VALUE, VALIDATION_TYPE_REGEX, VALIDATION_TYPE_RELATED } from 'constants/field-logic-constants';

import Textbox from 'stories/Textbox';

import './index.scss';

const checkValidations = (value, neededValidations = {}, requiredErrorMessage, onCheckIfValid, onGetRelatedField) => {
    const { required = false, custom = [] } = neededValidations;

    let notPassedValidations = [];
    if (required) {
        if (!value) {
            notPassedValidations.push(requiredErrorMessage);
        }
    }

    custom.forEach(validation => {
        const { type, errorMessage } = validation;
        if (type === VALIDATION_TYPE_REGEX) {
            const { pattern } = validation;
            if (value || value === 0) {
                if (!value.match(new RegExp(pattern))) {
                    notPassedValidations.push(errorMessage);
                }
            }
        } else if (type === VALIDATION_TYPE_MIN_VALUE) {
            const { minValue } = validation;
            if (value || value === 0) {
                if (Number(value) < Number(minValue)) {
                    notPassedValidations.push(errorMessage);
                }
            }
        } else if (type === VALIDATION_TYPE_MAX_VALUE) {
            const { maxValue } = validation;
            if (value || value === 0) {
                if (Number(value) > Number(maxValue)) {
                    notPassedValidations.push(errorMessage);
                }
            }
        } else if (type === VALIDATION_TYPE_RELATED) {
            const { relatedTo = {} } = validation;
            const { formula = {}, relation } = relatedTo;
            const { operator, fields = [] } = formula;
            if (value || value === 0) {
                if (operator === '=') {
                    if (fields.length) {
                        const { chapterCode, sectionCode, code } = fields[0];
                        const relatedField = onGetRelatedField(chapterCode, sectionCode, code);
                        let relatedFieldValue = relatedField.value;
                        if (!relatedFieldValue && relatedFieldValue !== 0) {
                            relatedFieldValue = relatedField.defaultValue;
                        }
                        if (relatedFieldValue || relatedFieldValue === 0) {
                            let condition = true;
                            if (relation === '<=') {
                                condition = Number(value) <= Number(relatedFieldValue);
                            } else if (relation === '<') {
                                condition = Number(value) < Number(relatedFieldValue);
                            } else if (relation === '>=') {
                                condition = Number(value) >= Number(relatedFieldValue);
                            } else if (relation === '>') {
                                condition = Number(value) > Number(relatedFieldValue);
                            } else if (relation === '=') {
                                condition = Number(value) == Number(relatedFieldValue);
                            }

                            if (!condition) {
                                notPassedValidations.push(errorMessage);
                            }
                        }
                    }
                }
            }
        }
    });

    onCheckIfValid && onCheckIfValid(notPassedValidations.length === 0);

    return notPassedValidations;
};

const PercentageField = ({
    name,
    value,
    label,
    disabled = false,
    defaultValue,
    className,
    validations = {},
    icon,
    requiredErrorMessage,
    displayFieldValidations,
    refreshAllFields,
    onCheckIfValid,
    onGetRelatedField,
    onBlur,
}) => {
    const { required = false } = validations;

    let storedValue = value;
    if (!storedValue && storedValue !== 0) {
        storedValue = defaultValue;
    }

    const [localValue, setLocalValue] = useState('');
    const [notPassedValidations, setNotPassedValidations] = useState([]);
    const [displayFieldValidationsLocal, setDisplayFieldValidationsLocal] = useState(false);

    useEffect(() => setLocalValue(storedValue), [value, defaultValue]);

    useEffect(() => {
        const notPassedValidationsAux = checkValidations(storedValue, validations, requiredErrorMessage, onCheckIfValid, onGetRelatedField);
        setNotPassedValidations(notPassedValidationsAux);
    }, [refreshAllFields, displayFieldValidations]);

    return (
        <div className='percentageField-wrapper'>
            <Textbox
                category='number'
                name={name}
                value={localValue}
                label={label}
                required={required}
                showValidations={displayFieldValidations || displayFieldValidationsLocal}
                notPassedValidations={notPassedValidations}
                className={classNames(
                    className,
                    (displayFieldValidations || displayFieldValidationsLocal) && notPassedValidations.length > 0 && 'not-valid-field'
                )}
                disabled={disabled}
                icon={<AiOutlinePercentage />}
                onChange={e => setLocalValue(e.target.value)}
                onBlur={e => {
                    setDisplayFieldValidationsLocal(true);

                    let valueToStore = e.target.value;
                    if (!valueToStore && valueToStore !== 0) {
                        valueToStore = defaultValue;
                    }
                    valueToStore = Number(valueToStore);
                    if(isNaN(valueToStore)){
                        valueToStore = '';
                    }

                    // if the numeric value is different than the value that was written
                    if (e.target.value.localeCompare(valueToStore.toString()) !== 0) {
                        e.target.value = valueToStore;
                        setLocalValue(valueToStore);
                    }

                    onBlur && onBlur(valueToStore);

                    const notPassedValidationsAux = checkValidations(valueToStore, validations, requiredErrorMessage, onCheckIfValid, onGetRelatedField);
                    setNotPassedValidations(notPassedValidationsAux);
                }}
            />
        </div>
    );
};

export default PercentageField;
