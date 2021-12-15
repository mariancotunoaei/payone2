import { combineReducers } from 'redux';

import errorMsgs from './errorMsgs';
import successMsgs from './successMsgs';
import infoMsgs from './infoMsgs';
import warningMsgs from './warningMsgs';

const ui = combineReducers({
    successMsgs,
    errorMsgs,
    infoMsgs,
    warningMsgs
});

export default ui;
