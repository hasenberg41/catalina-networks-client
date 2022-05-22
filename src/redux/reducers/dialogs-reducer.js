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
            let message = state.newMessageText;
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;