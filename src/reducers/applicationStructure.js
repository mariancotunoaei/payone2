import { SET_ACTIVE_SCREEN, SET_APPLICATION_STRUCTURE } from 'constants/redux-actions';

const applicationStructure = (state = {}, action) => {
    if (typeof state === 'undefined') {
        return {};
    }
    switch (action.type) {
        case SET_APPLICATION_STRUCTURE:
            return action.payload;
        case SET_ACTIVE_SCREEN:
            return {
                ...state,
                activeScreen: action.payload
            };
        default:
            return state;
    }
};

export default applicationStructure;
