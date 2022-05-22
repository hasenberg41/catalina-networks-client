import initialState from "../initialState";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
}

const dialogsReducer = (state = initialState.dialogsPage, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageBody = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 6, text: newMessageBody}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        default:
            return state;
    }
}

export default dialogsReducer;