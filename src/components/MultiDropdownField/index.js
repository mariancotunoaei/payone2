import React, { useEffect, useState } from 'react';
import Selectbox from 'stories/Selectbox';
import classNames from 'classnames';

import './index.scss';

const checkValidations = (value, neededValidations = {}, requiredErrorMessage, onCheckIfValid) => {
    const {
        required = false
    } = neededValidations;

    let notPassedValidations = [];
    if (required) {
        if (!value || !value.length || typeof value !== 'object') {
            notPassedValidations.push(requiredErrorMessage);
        }
    }

    onCheckIfValid && onCheckIfValid(notPassedValidations.length === 0);

    return notPassedValidations;
};

const MultiDropdownField = (props) => {
    const {
        name,
        label = '',
        value = null,
        options = [],
        autoFocus = false,
        placeholder,
        isSearchable = false,
        disabled = false,
        isClearable = true,
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

    let storedValues = value;
    if (!storedValues || !storedValues.length) {
        storedValues = defaultValue;
    }
    let selectedItems = [];
    if (storedValues && typeof storedValues === 'object' && storedValues.length) {
        storedValues.forEach(value => {
            const item = options.find(option => option.value === value);
            selectedItems.push(item);
        });
    }

    const [notPassedValidations, setNotPassedValidations] = useState([]);
    const [displayFieldValidationsLocal, setDisplayFieldValidationsLocal] = useState(false);

    useEffect(() => {
        let valuesToTest = value;
        if (!valuesToTest || !valuesToTest.length) {
            valuesToTest = defaultValue;
        }
        const notPassedValidationsAux = checkValidations(valuesToTest, validations, requiredErrorMessage, onCheckIfValid);
        setNotPassedValidations(notPassedValidationsAux);
    }, [refreshAllFields, displayFieldValidations]);

    return (
        <div className='multi-dropdownField-wrapper'>
            <Selectbox
                isMulti={true}
                name={name}
                label={label}
                options={options}
                value={selectedItems}
                required={required}
                showValidations={displayFieldValidations || displayFieldValidationsLocal}
                notPassedValidations={notPassedValidations}
                onChange={(selectedOptions) => {
                    setDisplayFieldValidationsLocal(true);

                    let nextValue = null;
                    if (selectedOptions && selectedOptions.length) {
                        nextValue = selectedOptions.map(option => option.value);
                    } else if (defaultValue && defaultValue.length) {
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

export default MultiDropdownField;
