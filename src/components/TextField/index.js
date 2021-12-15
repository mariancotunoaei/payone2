import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import {
    VALIDATION_TYPE_FIX_LENGTH,
    VALIDATION_TYPE_MAX_LENGTH,
    VALIDATION_TYPE_MIN_LENGTH,
    VALIDATION_TYPE_REGEX
} from 'constants/field-logic-constants';

import Textbox from 'stories/Textbox';

import './index.scss';

const checkValidations = (value, neededValidations = {}, requiredErrorMessage = '', onCheckIfValid) => {
    const {
        required = false,
        custom = []
    } = neededValidations;

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
            if (value) {
                if (!value.match(new RegExp(pattern))) {
                    notPassedValidations.push(errorMessage);
                }
            }
        } else if (type === VALIDATION_TYPE_MIN_LENGTH) {
            const { minLength } = validation;
            if ((value || '').length < minLength) {
                notPassedValidations.push(errorMessage);
            }
        } else if (type === VALIDATION_TYPE_MAX_LENGTH) {
            const { maxLength } = validation;
            if ((value || '').length > maxLength) {
                notPassedValidations.push(errorMessage);
            }
        } else if (type === VALIDATION_TYPE_FIX_LENGTH) {
            const { pattern = '' } = validation;
            const possibleLengths = pattern.split('|');
            const valueLength = (value || '').length;
            if (possibleLengths.indexOf(valueLength.toString()) === -1) {
                notPassedValidations.push(errorMessage);
            }
        }
    });

    onCheckIfValid && onCheckIfValid(notPassedValidations.length === 0);

    return notPassedValidations;
};

const TextField = ({
                       name,
                       value,
                       prefix,
                       label,
                       disabled = false,
                       defaultValue,
                       className,
                       validations = {},
                       requiredErrorMessage,
                       icon,
                       displayFieldValidations,
                       refreshAllFields,
                       onCheckIfValid,
                       onBlur
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
        const notPassedValidationsAux = checkValidations(storedValue, validations, requiredErrorMessage, onCheckIfValid);
        setNotPassedValidations(notPassedValidationsAux);
    }, [refreshAllFields, displayFieldValidations]);

    return (
        <div className='textfield-wrapper'>
            <Textbox
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
                icon={icon}
                onChange={(e) => {
                    if (prefix) {
                        if (e.target.value.startsWith(prefix)) {
                            setLocalValue(e.target.value);
                        } else {
                            setLocalValue(prefix);
                        }
                    } else {
                        setLocalValue(e.target.value);
                    }
                }}
                onBlur={(e) => {
                    setDisplayFieldValidationsLocal(true);

                    let valueToStore = e.target.value;
                    if (!valueToStore && valueToStore !== 0) {
                        valueToStore = defaultValue || '';
                    }

                    if (valueToStore.localeCompare(prefix) === 0) {
                        setLocalValue(defaultValue || '');
                        onBlur && onBlur(defaultValue || '');
                    } else {
                        onBlur && onBlur(valueToStore);
                    }

                    const notPassedValidationsAux = checkValidations(valueToStore, validations, requiredErrorMessage, onCheckIfValid);
                    setNotPassedValidations(notPassedValidationsAux);
                }}
                onFocus={(e) => {
                    if (prefix) {
                        if (!e.target.value) {
                            setLocalValue(prefix);
                        }
                    }
                }}
            />
        </div>
    );
};

export default TextField;
