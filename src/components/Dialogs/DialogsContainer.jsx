import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    
    const sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    const updateTextArea = (text) => {
        props.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <Dialogs 
            sendMessage={sendMessage} 
            updateTextArea={updateTextArea}
            state={props.state}
        />
    );
}

export default DialogsContainer;