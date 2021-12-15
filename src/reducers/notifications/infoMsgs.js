import { ADD_INFO_MSGS, CLEAR_SPECIFIED_INFO_MSGS, SET_INFO_MSGS } from 'constants/redux-actions';
import md5 from 'md5';

const errors = (state = [], action) => {
    if (typeof state === 'undefined') {
        return [];
    }
    switch (action.type) {
        case ADD_INFO_MSGS: {
            const newInfoMsgsStartTime = new Date().getTime();
            return [
                ...state,
                ...action.payload.map((info, infoIndex) => ({
                    id: md5(`${info}-${newInfoMsgsStartTime}-${infoIndex}`),
                    message: info,
                    startTime: newInfoMsgsStartTime
                }))
            ];
        }
        case CLEAR_SPECIFIED_INFO_MSGS: {
            return [
                ...state.filter(info => !action.payload.find(infoMsgToDelete => infoMsgToDelete.id === info.id))
            ];
        }
        case SET_INFO_MSGS: {
            const newInfoMsgsStartTime = new Date().getTime();
            return [
                ...action.payload.map((info, infoIndex) => {
                    // we don't want to override the old errors and show them all over again
                    const foundInfoMMsg = state.find(existingInfoMsg => existingInfoMsg.message === info.message);
                    if (foundInfoMMsg) {
                        return {
                            ...foundInfoMMsg
                        };
                    }
                    return {
                        id: md5(`${info}-${newInfoMsgsStartTime}-${infoIndex}`),
                        message: info,
                        startTime: newInfoMsgsStartTime
                    };
                })
            ];
        }
        default:
            return state;
    }
};

export default errors;
