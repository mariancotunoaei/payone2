import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({ type = 'Primary', className, disabled, children, onClick }) => {
    return (
        <button
            className={[
                'payone-button',
                type === 'Primary' ? 'primary-button' : '',
                type === 'Secondary' ? 'secondary-button' : '',
                type === 'Tertiary' ? 'tertiary-button' : '',
                className
            ].join(' ')}   
            disabled={disabled} 
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['Primary', 'Secondary', 'Tertiary']),
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;
