import React, { useEffect, useState } from 'react';
import Selectbox from 'stories/Selectbox';
import classNames from 'classnames';

import './index.scss';

const checkValidations = (value, neededValidations = {}, requiredErrorMessage = '', onCheckIfValid) => {
    const {
        required = false
    } = neededValidations;

    let notPassedValidations = [];
    if (required) {
        if (!value) {
            notPassedValidations.push(requiredErrorMessage);
        }
    }

    onCheckIfValid && onCheckIfValid(notPassedValidations.length === 0);

    return notPassedValidations;
};

const DropdownField = (props) => {
    const {
        name,
        label = '',
        value = null,
        options = [],
        autoFocus = false,
        placeholder,
        isSearchable = false,
        disabled = false,
        className = '',
        displayFieldValidations,
        refreshAllFields,
        classNamePrefix,
        validations = {},
        requiredErrorMessage,
        defaultValue,
        onChange,
        onCheckIfValid
    } = props;

    const {
        required = false
    } = validations;

    let storedValue = value;
    if (!storedValue && storedValue !== 0) {
        storedValue = defaultValue;
    }
    let selectedItem = null;
    if (storedValue) {
        selectedItem = options.find(option => option.value === storedValue);
    }

    const isClearable = !required && (!defaultValue && defaultValue !== 0);
    
    const [notPassedValidations, setNotPassedValidations] = useState([]);
    const [displayFieldValidationsLocal, setDisplayFieldValidationsLocal] = useState(false);

    useEffect(() => {
        let valueToTest = value;
        if (!valueToTest && valueToTest !== 0) {
            valueToTest = defaultValue;
        }
        const notPassedValidationsAux = checkValidations(valueToTest, validations, requiredErrorMessage, onCheckIfValid);
        setNotPassedValidations(notPassedValidationsAux);
    }, [refreshAllFields, displayFieldValidations]);

    return (
        <div className='dropdownfield-wrapper'>
            <Selectbox
                isMulti={false}
                name={name}
                label={label}
                options={options}
                value={selectedItem}
                required={required}
                showValidations={displayFieldValidations || displayFieldValidationsLocal}
                notPassedValidations={notPassedValidations}
                onChange={(selectedOption) => {
                    setDisplayFieldValidationsLocal(true);

                    let nextValue = null;
                    if (selectedOption && selectedOption.value) {
                        nextValue = selectedOption.value;
                    } else if (defaultValue || defaultValue === 0) {
                        nextValue = defaultValue;
                    }

                    onChange && onChange(nextValue);

                    const notPassedValidationsAux = checkValidations(nextValue, validations, requiredErrorMessage, onCheckIfValid);
                    setNotPassedValidations(notPassedValidationsAux);
                }}
                className={classNames(
                    className,
                    (displayFieldValidations || displayFieldValidationsLocal) && notPassedValidations.length > 0 && 'not-valid-field'
                )}
                classNamePrefix={classNamePrefix}
                autoFocus={autoFocus}
                isSearchable={isSearchable}
                isClearable={isClearable}
                placeholder={placeholder}
                isDisabled={disabled}
            />
        </div>
    );
};

export default DropdownField;
