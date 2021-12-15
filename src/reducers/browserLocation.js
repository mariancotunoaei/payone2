import { SET_BROWSER_LOCATION } from 'constants/redux-actions';

const browserLocation = (state = {}, action) => {
    if (typeof state === 'undefined') {
        return {};
    }
    switch (action.type) {
        case SET_BROWSER_LOCATION:
            return action.payload;
        default:
            return state;
    }
};

export default browserLocation;
