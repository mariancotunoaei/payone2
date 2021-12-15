import { SET_ACTIVE_SCREEN, SET_APPLICATION_STRUCTURE } from 'constants/redux-actions';
import { dispatch } from 'globals/scripts/store';

export const local_saveApplicationStructure = (appStructure = {}) => dispatch(SET_APPLICATION_STRUCTURE, appStructure);
export const setActiveScreen = (activeScreen = 1) => dispatch(SET_ACTIVE_SCREEN, activeScreen);
