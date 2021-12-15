import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const ValidationWrapper = ({ showValidations }) => {
    return showValidations.map(v => <div key={v} className='validation-wrapper'> {v} </div>);
};

ValidationWrapper.propTypes = {
    showValidations: PropTypes.array
};

ValidationWrapper.defaultProps = {
    showValidations: []
};

export default ValidationWrapper;
