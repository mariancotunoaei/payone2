import { ADD_WARNING_MSGS, CLEAR_SPECIFIED_WARNING_MSGS, SET_WARNING_MSGS } from 'constants/redux-actions';
import md5 from 'md5';

const errors = (state = [], action) => {
    if (typeof state === 'undefined') {
        return [];
    }
    switch (action.type) {
        case ADD_WARNING_MSGS: {
            const newWarningMsgsStartTime = new Date().getTime();
            return [
                ...state,
                ...action.payload.map((warning, warningIndex) => ({
                    id: md5(`${warning}-${newWarningMsgsStartTime}-${warningIndex}`),
                    message: warning,
                    startTime: newWarningMsgsStartTime
                }))
            ];
        }
        case CLEAR_SPECIFIED_WARNING_MSGS: {
            return [
                ...state.filter(warning => !action.payload.find(warningMsgToDelete => warningMsgToDelete.id === warning.id))
            ];
        }
        case SET_WARNING_MSGS: {
            const newWarningMsgsStartTime = new Date().getTime();
            return [
                ...action.payload.map((warning, warningIndex) => {
                    // we don't want to override the old errors and show them all over again
                    const foundWarningMMsg = state.find(existingWarningMsg => existingWarningMsg.message === warning.message);
                    if (foundWarningMMsg) {
                        return {
                            ...foundWarningMMsg
                        };
                    }
                    return {
                        id: md5(`${warning}-${newWarningMsgsStartTime}-${warningIndex}`),
                        message: warning,
                        startTime: newWarningMsgsStartTime
                    };
                })
            ];
        }
        default:
            return state;
    }
};

export default errors;
