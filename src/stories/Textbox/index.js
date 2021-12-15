import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import ValidationWrapper from '../ValidationWrapper';

import './index.scss';

const Textbox = ({
    category,
    name,
    value,
    label,
    placeholder,
    required,
    showValidations,
    notPassedValidations,
    mask,
    maskChar,
    formatChars,
    className,
    icon,
    disabled,
    onChange,
    onBlur,
    onFocus,
}) => {
    const commonProps = {
        type: category,
        name: name,
        id: name,
        value: value,
        className: ['textbox', className].join(' '),
        placeholder: placeholder,
        disabled: disabled,
        onChange: e => {
            // sometimes the field is being autocompleted by the browser (e.g. email address, telephone, user name)
            // the logic of our app was to save data only when the user exits the input
            // but for the mentioned case scenario, the input was never active --- so it will not save the data
            // but it still triggers the onChange event
            // so, we will need to check if the changed field is not active, and then trigger the onBlur event ourselves
            // to trigger the save of the autocompleted data information
            if (document.activeElement !== e.target) {
                onBlur && onBlur(e);
            }
            // the rest of the onChange functionality remains the same
            onChange && onChange(e);
        },
        onBlur: onBlur,
        onFocus: onFocus,
    };
    return (
        <>
            {label && (
                <label htmlFor={name} className='label-for-field'>
                    <div> {label} </div>
                    <div className='optional-sign-field-label'> {!required && 'Optional'} </div>
                </label>
            )}
            <div style={{ position: 'relative' }}>
                {mask ? <InputMask {...commonProps} mask={mask} maskChar={maskChar} formatChars={formatChars}></InputMask> : <input {...commonProps} />}
                {icon && <span className='field-icon-placed-inside'> {icon} </span>}
                {showValidations && <ValidationWrapper showValidations={notPassedValidations} />}
            </div>
        </>
    );
};

Textbox.propTypes = {
    category: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    showValidations: PropTypes.bool,
    notPassedValidations: PropTypes.arrayOf(PropTypes.string),
    mask: PropTypes.string,
    maskChar: PropTypes.string,
    formatChars: PropTypes.object,
    className: PropTypes.string,
    icon: PropTypes.element,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
};

Textbox.defaultProps = {
    category: 'text',
};

export default Textbox;
