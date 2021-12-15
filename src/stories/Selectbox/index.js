import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import ValidationWrapper from '../ValidationWrapper';

import './single-selection.scss';
import './multi-selection.scss';

const Selectbox = ({
    name,
    value,
    label,
    isMulti,
    options,
    placeholder,
    required,
    showValidations,
    notPassedValidations,
    className,
    classNamePrefix,
    disabled,
    autoFocus,
    isSearchable,
    isClearable,
    onChange,
}) => {
    const [menuState, setMenuState] = useState(false);
    return (
        <>
            {label && (
                <label htmlFor={name} className='label-for-field'>
                    <div> {label} </div>
                    <div className='optional-sign-field-label'> {!required && 'Optional'} </div>
                </label>
            )}
            <Select
                name={name}
                value={value}
                options={options}
                isMulti={isMulti}
                placeholder={placeholder}
                className={[isMulti ? 'multi-selectbox' : 'selectbox', menuState ? 'focused-selectbox' : '', className].join(' ')}
                classNamePrefix={classNamePrefix}
                isDisabled={disabled}
                autoFocus={autoFocus}
                isSearchable={isSearchable}
                isClearable={isClearable}
                onChange={onChange}
                onMenuOpen={() => setMenuState(true)}
                onMenuClose={() => setMenuState(false)}
            />
            {showValidations && <ValidationWrapper showValidations={notPassedValidations} />}
        </>
    );
};

Selectbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    isMulti: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        }),
        PropTypes.array,
    ]),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    showValidations: PropTypes.bool,
    notPassedValidations: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    isSearchable: PropTypes.bool,
    isClearable: PropTypes.bool,
    onChange: PropTypes.func,
};

Selectbox.defaultProps = {
    options: [],
    isMulti: false,
    isSearchable: false,
    isClearable: true,
    autoFocus: false,
    disabled: false,
};

export default Selectbox;
