import { REFRESH_ALL_FIELDS, SET_FIELD_VALIDATIONS_VISIBILITY } from 'constants/redux-actions';
import { dispatch } from 'globals/scripts/store';

export const setFieldValidationsVisibility = (visibility) => dispatch(SET_FIELD_VALIDATIONS_VISIBILITY, visibility);
export const triggerRefreshAllFields = () => dispatch(REFRESH_ALL_FIELDS);
