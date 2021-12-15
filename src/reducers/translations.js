import { SET_TRANSLATIONS } from 'constants/redux-actions';

const translations = (state = {}, action) => {
    if (typeof state === 'undefined') {
        return {};
    }
    switch (action.type) {
        case SET_TRANSLATIONS:
            return action.payload;
        default:
            return state;
    }
};

export default translations;
