import React, { useEffect, useState } from 'react';

import './index.scss';

const checkValidations = (value, neededValidations = {}, requiredErrorMessage, onCheckIfValid) => {
    const { required = false } = neededValidations;

    let notPassedValidations = [];
    if (required) {
        if (!value || value == false) {
            notPassedValidations.push(requiredErrorMessage);
        }
    }

    onCheckIfValid && onCheckIfValid(notPassedValidations.length === 0);

    return notPassedValidations;
};

const Checkbox = props => {
    const {
        name,
        label,
        value,
        defaultValue,
        disabled = false,
        displayFieldValidations,
        refreshAllFields,
        validations = {},
        requiredErrorMessage,
        onChange,
        onCheckIfValid,
        hideLabel
    } = props;

    const { required = false } = validations;

    let storedValue = value;
    if (!storedValue && storedValue != false) {
        storedValue = defaultValue;
    }

    const [notPassedValidations, setNotPassedValidations] = useState([]);
    const [displayFieldValidationsLocal, setDisplayFieldValidationsLocal] = useState(false);

    useEffect(() => {
        const notPassedValidationsAux = checkValidations(storedValue, validations, requiredErrorMessage, onCheckIfValid);
        setNotPassedValidations(notPassedValidationsAux);
    }, [refreshAllFields, displayFieldValidations]);

    return (
        <div className='checkbox-wrapper'>
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                <label htmlFor={name}>
                    {!hideLabel && label}
                    {(!required && !hideLabel) && <span className='optional-sign-field-label'> Optional </span>}
                </label>
                <input
                    id={name}
                    type='checkbox'
                    checked={storedValue}
                    disabled={disabled}
                    className='agree-to-condition'
                    onChange={e => {
                        setDisplayFieldValidationsLocal(true);

                        onChange && onChange(e.target.checked);

                        const notPassedValidationsAux = checkValidations(e.target.checked, validations, requiredErrorMessage, onCheckIfValid);
                        setNotPassedValidations(notPassedValidationsAux);
                    }}
                />
            </div>
            {(displayFieldValidations || displayFieldValidationsLocal) &&
            notPassedValidations.map(npv => (
                <div key={npv}
                     style={hideLabel ? {marginTop: '20px'}: ''}
                     className='validation-wrapper'>
                    {npv}
                </div>
            ))}
        </div>
    );
};

export default Checkbox;
