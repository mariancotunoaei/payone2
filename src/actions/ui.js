import { SET_LOADER_VISIBILITY, SET_SCREEN_TRANSITION_ACTIVITY } from 'constants/redux-actions';
import { dispatch } from 'globals/scripts/store';

export const setLoaderVisibility = (visible) => dispatch(SET_LOADER_VISIBILITY, visible);
export const setScreenTransitionActivity = (activity = 'entrance') => dispatch(SET_SCREEN_TRANSITION_ACTIVITY, activity);
