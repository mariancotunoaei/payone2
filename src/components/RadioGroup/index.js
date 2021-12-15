import React, { useEffect, useState } from 'react';

import './index.scss';

const checkValidations = (value, neededValidations = {}, requiredErrorMessage, onCheckIfValid) => {
    const { required = false } = neededValidations;

    let notPassedValidations = [];
    if (required) {
        if (value == null) {
            notPassedValidations.push(requiredErrorMessage);
        }
    }

    onCheckIfValid && onCheckIfValid(notPassedValidations.length === 0);

    return notPassedValidations;
};

const RadioGroup = props => {
    const {
        name,
        label,
        value,
        options = [],
        defaultValue,
        disabled = false,
        validations = {},
        requiredErrorMessage,
        displayFieldValidations,
        refreshAllFields,
        onChange,
        onCheckIfValid,
    } = props;

    const { required = false } = validations;

    let storedValue = value;
    if (!storedValue && storedValue !== 0) {
        storedValue = defaultValue;
    }

    const [notPassedValidations, setNotPassedValidations] = useState([]);

    useEffect(() => {
        const notPassedValidationsAux = checkValidations(storedValue, validations, requiredErrorMessage, onCheckIfValid);
        setNotPassedValidations(notPassedValidationsAux);
    }, [refreshAllFields, displayFieldValidations]);

    return (
        <div className='radio-group-wrapper'>
            <label className='radio-group-title'>
                {label} {!required && <span className='optional-sign-field-label'> Optional </span>}
            </label>
            <div className='options-container'>
                {options.map(option => (
                    <div key={option.value} className='radio-group-option'>
                        <input
                            id={`${name}-${option.value}`}
                            name={name}
                            type='radio'
                            checked={value || value === 0 ? option.value === value : defaultValue || defaultValue === 0 ? option.value === defaultValue : false}
                            disabled={disabled}
                            onChange={e => {
                                onChange && onChange(option.value);

                                const notPassedValidationsAux = checkValidations(option.value, validations, requiredErrorMessage, onCheckIfValid);
                                setNotPassedValidations(notPassedValidationsAux);
                            }}
                        />
                        <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
                    </div>
                ))}
            </div>
            {displayFieldValidations &&
                notPassedValidations.map(npv => (
                    <div key={npv} className='validation-wrapper'>
                        {' '}
                        {npv}{' '}
                    </div>
                ))}
        </div>
    );
};

export default RadioGroup;
