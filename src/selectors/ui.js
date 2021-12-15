import { getState } from 'globals/scripts/store';

export const getLoaderVisibility = () => getState().ui.loader;
