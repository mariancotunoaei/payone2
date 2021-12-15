import { ADD_ERROR_MSGS, CLEAR_SPECIFIED_ERROR_MSGS, SET_ERROR_MSGS } from 'constants/redux-actions';
import md5 from 'md5';

const errors = (state = [], action) => {
    if (typeof state === 'undefined') {
        return [];
    }
    switch (action.type) {
        case ADD_ERROR_MSGS: {
            const newErrorsMsgStartTime = new Date().getTime();
            return [
                ...state,
                ...action.payload.map((err, errIndex) => ({
                    id: md5(`${err}-${newErrorsMsgStartTime}-${errIndex}`),
                    message: err,
                    startTime: newErrorsMsgStartTime
                }))
            ];
        }
        case CLEAR_SPECIFIED_ERROR_MSGS: {
            return [
                ...state.filter(err => !action.payload.find(errToDelete => errToDelete.id === err.id))
            ];
        }
        case SET_ERROR_MSGS: {
            const newErrorsMsgStartTime = new Date().getTime();
            return [
                ...action.payload.map((err, errIndex) => {
                    // we don't want to override the old errors and show them all over again
                    const foundErr = state.find(existingErr => existingErr.message === err.message);
                    if (foundErr) {
                        return {
                            ...foundErr
                        };
                    }
                    return {
                        id: md5(`${err}-${newErrorsMsgStartTime}-${errIndex}`),
                        message: err,
                        startTime: newErrorsMsgStartTime
                    };
                })
            ];
        }
        default:
            return state;
    }
};

export default errors;
