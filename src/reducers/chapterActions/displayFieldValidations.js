import { SET_FIELD_VALIDATIONS_VISIBILITY } from 'constants/redux-actions';

const displayFieldValidations = (state = false, action) => {
    if (typeof state === 'undefined') {
        return false;
    }
    switch (action.type) {
        case SET_FIELD_VALIDATIONS_VISIBILITY:
            return action.payload;
        default:
            return state;
    }
};

export default displayFieldValidations;
