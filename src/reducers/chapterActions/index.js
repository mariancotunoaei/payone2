import { combineReducers } from 'redux';

import refreshAllFields from './refreshAllFields';
import displayFieldValidations from './displayFieldValidations';

const chapterActions = combineReducers({
    displayFieldValidations,
    refreshAllFields
});

export default chapterActions;
