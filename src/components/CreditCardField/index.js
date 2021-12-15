import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { AiOutlineCreditCard } from 'react-icons/ai';
import {
    MASK_CREDIT_CARD_GENERAL,
    VALIDATION_TYPE_MAX_LENGTH,
    VALIDATION_TYPE_MIN_LENGTH,
    VALIDATION_TYPE_REGEX,
    VALIDATION_TYPE_FIX_LENGTH,
} from 'constants/field-logic-constants';

import Textbox from 'stories/Textbox';

import './index.scss';

const checkValidations = (value, neededValidations = {}, requiredErrorMessage, onCheckIfValid) => {
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

const removeNotAllowedCharactersFromString = (str = '', charactersToKeep = []) => {
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

const CreditCardField = ({
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
    onBlur,
}) => {
    const { required = false } = validations;

    let storedValue = value;
    if (!storedValue && storedValue !== 0) {
        storedValue = defaultValue;
    }

    const [localValue, setLocalValue] = useState('');
    const [localMask, setLocalMask] = useState(MASK_CREDIT_CARD_GENERAL);
    const [notPassedValidations, setNotPassedValidations] = useState([]);
    const [displayFieldValidationsLocal, setDisplayFieldValidationsLocal] = useState(false);

    useEffect(() => setLocalValue(storedValue), [value, defaultValue]);

    useEffect(() => {
        const notPassedValidationsAux = checkValidations(storedValue, validations, requiredErrorMessage, onCheckIfValid);
        setNotPassedValidations(notPassedValidationsAux);
    }, [refreshAllFields, displayFieldValidations]);

    return (
        <div className='creditcardfield-wrapper'>
            <Textbox
                name={name}
                value={localValue}
                label={label}
                required={required}
                placeholder='DE00 0000 0000 0000 0000 00'
                showValidations={displayFieldValidations || displayFieldValidationsLocal}
                notPassedValidations={notPassedValidations}
                mask={localMask}
                maskChar=' '
                formatChars={{
                    D: '[D]',
                    E: '[E]',
                    9: '[0-9]',
                }}
                className={classNames(
                    className,
                    (displayFieldValidations || displayFieldValidationsLocal) && notPassedValidations.length > 0 && 'not-valid-field'
                )}
                disabled={disabled}
                icon={<AiOutlineCreditCard />}
                onChange={e => {
                    // change mask for AMEX cards (starting with 34 or 37)
                    // if (/^3[47]/.test(e.target.value)) {
                    //     setLocalMask(MASK_CREDIT_CARD_GENERAL);
                    // } else {
                    //     setLocalMask(MASK_CREDIT_CARD_AMEX);
                    // }
                    setLocalValue(e.target.value);
                }}
                onBlur={e => {
                    setDisplayFieldValidationsLocal(true);

                    let valueToStore = removeNotAllowedCharactersFromString(e.target.value, ['D', 'E']);
                    if (!valueToStore && valueToStore !== 0) {
                        valueToStore = defaultValue;
                    }

                    // if the numeric value is different than the value that was written
                    if (e.target.value.localeCompare(valueToStore.toString()) !== 0) {
                        e.target.value = valueToStore;
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

export default CreditCardField;
