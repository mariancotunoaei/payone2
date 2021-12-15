import { ADD_SUCCESS_MSGS, CLEAR_SPECIFIED_SUCCESS_MSGS, SET_SUCCESS_MSGS } from 'constants/redux-actions';
import md5 from 'md5';

const errors = (state = [], action) => {
    if (typeof state === 'undefined') {
        return [];
    }
    switch (action.type) {
        case ADD_SUCCESS_MSGS: {
            const newSuccessMsgsStartTime = new Date().getTime();
            return [
                ...state,
                ...action.payload.map((succ, succIndex) => ({
                    id: md5(`${succ}-${newSuccessMsgsStartTime}-${succIndex}`),
                    message: succ,
                    startTime: newSuccessMsgsStartTime
                }))
            ];
        }
        case CLEAR_SPECIFIED_SUCCESS_MSGS: {
            return [
                ...state.filter(succ => !action.payload.find(succMsgToDelete => succMsgToDelete.id === succ.id))
            ];
        }
        case SET_SUCCESS_MSGS: {
            const newSuccessMsgsStartTime = new Date().getTime();
            return [
                ...action.payload.map((succ, succIndex) => {
                    // we don't want to override the old errors and show them all over again
                    const foundSuccMMsg = state.find(existingSuccMsg => existingSuccMsg.message === succ.message);
                    if (foundSuccMMsg) {
                        return {
                            ...foundSuccMMsg
                        };
                    }
                    return {
                        id: md5(`${succ}-${newSuccessMsgsStartTime}-${succIndex}`),
                        message: succ,
                        startTime: newSuccessMsgsStartTime
                    };
                })
            ];
        }
        default:
            return state;
    }
};

export default errors;
