import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { AiOutlinePhone } from 'react-icons/ai';
import {
    VALIDATION_TYPE_MAX_LENGTH,
    VALIDATION_TYPE_MIN_LENGTH,
    VALIDATION_TYPE_REGEX
} from 'constants/field-logic-constants';

import Textbox from 'stories/Textbox';

import './index.scss';

const checkValidations = (value, neededValidations = {}, requiredErrorMessage, onCheckIfValid) => {
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
        }
    });

    onCheckIfValid && onCheckIfValid(notPassedValidations.length === 0);

    return notPassedValidations;
};

const removeNonNumericCharactersFromString = (str = '', charactersToKeep = []) => {
    let newStr = '';
    [...str].forEach(char => {
        if (char >= '0' && char <= '9') {
            newStr += char;
        } else if (charactersToKeep.indexOf(char) !== -1) {
            newStr += char;
        }
    });
    return newStr;
};

const PhoneField = ({
                        name,
                        value,
                        label,
                        disabled = false,
                        defaultValue,
                        className,
                        validations = {},
                        requiredErrorMessage,
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
        <div className='phonefield-wrapper'>
            <Textbox
                category='tel'
                name={name}
                value={localValue}
                label={label}
                required={required}
                showValidations={displayFieldValidations || displayFieldValidationsLocal}
                notPassedValidations={notPassedValidations}
                // {
                /* mask='+4\9 99 999 99'
                maskChar=" " */
                // }
                className={classNames(
                    className,
                    (displayFieldValidations || displayFieldValidationsLocal) && notPassedValidations.length > 0 && 'not-valid-field'
                )}
                disabled={disabled}
                icon={<AiOutlinePhone />}
                onChange={(e) => setLocalValue(e.target.value)}
                onBlur={(e) => {
                    setDisplayFieldValidationsLocal(true);

                    let valueToStore = removeNonNumericCharactersFromString(e.target.value, ['(', ')']);
                    if (!valueToStore && valueToStore !== 0) {
                        valueToStore = defaultValue;
                    }

                    // if we had some not-allowed characters and we removed them, update the input text too
                    if (e.target.value.localeCompare(valueToStore) !== 0) {
                        setLocalValue(valueToStore);
                    }

                    onBlur && onBlur(valueToStore);

                    const notPassedValidationsAux = checkValidations(valueToStore, validations, requiredErrorMessage, onCheckIfValid);
                    setNotPassedValidations(notPassedValidationsAux);
                }}
            />
        </div>
    );
};

export default PhoneField;
