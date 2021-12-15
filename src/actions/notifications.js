import {
    ADD_ERROR_MSGS,
    ADD_INFO_MSGS,
    ADD_SUCCESS_MSGS,
    ADD_WARNING_MSGS,
    CLEAR_SPECIFIED_ERROR_MSGS,
    CLEAR_SPECIFIED_INFO_MSGS,
    CLEAR_SPECIFIED_SUCCESS_MSGS,
    CLEAR_SPECIFIED_WARNING_MSGS,
    SET_ERROR_MSGS,
    SET_INFO_MSGS,
    SET_SUCCESS_MSGS,
    SET_WARNING_MSGS
} from 'constants/redux-actions';
import { dispatch } from 'globals/scripts/store';

// for ERRORS
export const addErrors = (errors = []) => dispatch(ADD_ERROR_MSGS, errors);
export const setErrors = (errors = []) => dispatch(SET_ERROR_MSGS, errors);
export const clearSpecifiedErrorMsgs = (errors = []) => dispatch(CLEAR_SPECIFIED_ERROR_MSGS, errors);

// for SUCCESS
export const addSuccessMsgs = (errors = []) => dispatch(ADD_SUCCESS_MSGS, errors);
export const setSuccessMsgs = (errors = []) => dispatch(SET_SUCCESS_MSGS, errors);
export const clearSpecifiedSuccessMsgs = (errors = []) => dispatch(CLEAR_SPECIFIED_SUCCESS_MSGS, errors);

// for INFO
export const addInfoMsgs = (errors = []) => dispatch(ADD_INFO_MSGS, errors);
export const setInfoMsgs = (errors = []) => dispatch(SET_INFO_MSGS, errors);
export const clearSpecifiedInfoMsgs = (errors = []) => dispatch(CLEAR_SPECIFIED_INFO_MSGS, errors);

// for WARNING
export const addWarningMsgs = (errors = []) => dispatch(ADD_WARNING_MSGS, errors);
export const setWarningMsgs = (errors = []) => dispatch(SET_WARNING_MSGS, errors);
export const clearSpecifiedWarningMsgs = (errors = []) => dispatch(CLEAR_SPECIFIED_WARNING_MSGS, errors);
