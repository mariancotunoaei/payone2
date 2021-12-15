import { SET_TRANSLATIONS } from 'constants/redux-actions';
import { dispatch } from 'globals/scripts/store';

export const storeTranslations = (translations = {}) => dispatch(SET_TRANSLATIONS, translations);
