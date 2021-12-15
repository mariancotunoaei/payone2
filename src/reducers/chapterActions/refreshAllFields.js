import { REFRESH_ALL_FIELDS } from 'constants/redux-actions';

const refreshAllFields = (state = 0, action) => {
    if (typeof state === 'undefined') {
        return 0;
    }
    switch (action.type) {
        case REFRESH_ALL_FIELDS:
            return state + 1;
        default:
            return state;
    }
};

export default refreshAllFields;
