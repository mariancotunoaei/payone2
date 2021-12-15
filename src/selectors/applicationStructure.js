import { getState } from 'globals/scripts/store';

export const local_getApplicationStructure = () => getState().applicationStructure || {};
