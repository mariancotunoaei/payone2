import { combineReducers } from 'redux';

import loader from './loader';
import screenTransition from './screenTransition';

const ui = combineReducers({
    loader,
    screenTransition
});

export default ui;
