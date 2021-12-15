import { SET_SCREEN_TRANSITION_ACTIVITY } from 'constants/redux-actions';

const screenTransition = (state = '', action) => {
    switch (action.type) {
        case SET_SCREEN_TRANSITION_ACTIVITY:
            return action.payload;
        default:
            return state;
    }
};

export default screenTransition;
