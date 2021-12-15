import React, { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';
import { GoCalendar } from 'react-icons/go';

import './index.scss';
import { INTERVAL_CHECK_TYPE, MAX_DATE_VALUE } from 'constants/field-logic-constants';

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
        if (type === INTERVAL_CHECK_TYPE) {
            const startDate = new Date(validation.startDate);
            const endDate = new Date(validation.endDate);
            if (value < startDate || value > endDate) {
                notPassedValidations.push(errorMessage);
            }
        }
    });

    onCheckIfValid && onCheckIfValid(notPassedValidations.length === 0);

    return notPassedValidations;
};

const DatePickerCustom = props => {
    const {
        name,
        value,
        label = '',
        disabled = false,
        placeholder = '',
        excludeDates = [],
        validations = {},
        requiredErrorMessage,
        displayFieldValidations,
        refreshAllFields,
        defaultValue,
        onChange,
        onCheckIfValid,
    } = props;

    const dateValidation = validations.custom.find(el => el.type === INTERVAL_CHECK_TYPE);
    let startDate = new Date(dateValidation?.startDate);
    let endDate = new Date(dateValidation?.endDate);

    if (!endDate) {
        endDate = new Date(MAX_DATE_VALUE);
    }

    const { required = false } = validations;

    let storedValue = null;
    if (value) {
        storedValue = new Date(value);
    } else if (defaultValue) {
        storedValue = new Date(defaultValue);
    }

    const [notPassedValidations, setNotPassedValidations] = useState([]);
    const [displayFieldValidationsLocal, setDisplayFieldValidationsLocal] = useState(false);

    useEffect(() => {
        const notPassedValidationsAux = checkValidations(storedValue, validations, requiredErrorMessage, onCheckIfValid);
        setNotPassedValidations(notPassedValidationsAux);
    }, [refreshAllFields, displayFieldValidations]);

    const CustomInput = forwardRef(({ value, onClick, placeholder, className }, ref) => (
        <div className={['datepicker-custom-input', className].join(' ')} onClick={onClick} ref={ref}>
            <input
                type='text'
                placeholder={placeholder}
                defaultValue={value}
                disabled={disabled}
                onBlur={e => {
                    setDisplayFieldValidationsLocal(true);

                    const isDate = date => {
                        return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
                    };
                    if (isDate(e.target.value)) {
                        const date = new Date(e.target.value);
                        date.setHours(0);
                        date.setMinutes(0);
                        date.setSeconds(0);

                        onChange && onChange(date);

                        const notPassedValidationsAux = checkValidations(date, validations, requiredErrorMessage, onCheckIfValid);
                        setNotPassedValidations(notPassedValidationsAux);
                    } else {
                        let nextValue = null;
                        if (defaultValue) {
                            nextValue = new Date(defaultValue);
                        }

                        onChange && onChange(nextValue);

                        const notPassedValidationsAux = checkValidations(nextValue, validations, requiredErrorMessage, onCheckIfValid);
                        setNotPassedValidations(notPassedValidationsAux);
                    }
                }}
            />
            {!value && (
                <i>
                    {' '}
                    <GoCalendar />{' '}
                </i>
            )}
        </div>
    ));

    const [calendarIsOpen, setCalendarIsOpen] = useState(false);

    return (
        <div className={classNames('datepicker-wrapper')}>
            {label && (
                <label htmlFor={name} className='label-for-field'>
                    <div> {label} </div>
                    <div className='optional-sign-field-label'> {!required && 'Optional'} </div>
                </label>
            )}
            <DatePicker
                name={name}
                selected={storedValue}
                placeholderText={placeholder}
                isClearable={true}
                closeOnScroll={true}
                disabled={disabled}
                minDate={startDate}
                maxDate={endDate}
                excludeDates={excludeDates}
                dateFormat={'yyyy-MM-dd'}
                customInput={<CustomInput />}
                className={[
                    disabled ? 'disabled' : '',
                    (displayFieldValidations || displayFieldValidationsLocal) && notPassedValidations.length > 0 ? 'not-valid-field' : '',
                    calendarIsOpen ? 'focused-calendar' : '',
                ].join(' ')}
                onCalendarClose={() => setCalendarIsOpen(false)}
                onCalendarOpen={() => setCalendarIsOpen(true)}
                onChange={selectedDate => {
                    if (disabled) {
                        return;
                    }

                    setDisplayFieldValidationsLocal(true);

                    let nextValue = null;
                    if (selectedDate) {
                        const date = new Date(selectedDate);
                        date.setHours(0);
                        date.setMinutes(0);
                        date.setSeconds(0);
                        nextValue = date;
                    } else if (defaultValue) {
                        nextValue = new Date(defaultValue);
                    }

                    onChange && onChange(nextValue);

                    const notPassedValidationsAux = checkValidations(nextValue, validations, requiredErrorMessage, onCheckIfValid);
                    setNotPassedValidations(notPassedValidationsAux);
                }}
            />
            {(displayFieldValidations || displayFieldValidationsLocal) &&
                notPassedValidations.map(npv => (
                    <div key={npv} className='validation-wrapper'>
                        {npv}
                    </div>
                ))}
        </div>
    );
};

export default DatePickerCustom;
