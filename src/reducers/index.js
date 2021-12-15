import { combineReducers } from 'redux';
import { RESET_STATE } from 'constants/redux-actions';

import ui from './ui';
import browserLocation from './browserLocation';
import notifications from './notifications';
import applicationStructure from './applicationStructure';
import translations from './translations';
import chapterActions from './chapterActions';

const appReducer = combineReducers({
    ui,
    browserLocation,
    notifications,
    applicationStructure,
    translations,
    chapterActions
});

const globalReducer = (state, action) => {

    if (action.type === RESET_STATE) {
        state = action.payload;
    }

    return appReducer(state, action);
};

export default globalReducer;
