import { SET_LOADER_VISIBILITY } from 'constants/redux-actions';

const loader = (state = true, action) => {
    switch (action.type) {
        case SET_LOADER_VISIBILITY:
            return action.payload;
        default:
            return state;
    }
};

export default loader;
