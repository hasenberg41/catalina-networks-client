import React from 'react';
import { sendMessage, updateNewMessageText } from '../../redux/store';
import DialogItem from './Dialog/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = props.state.messages.map(m => <Message text={m} />);

    let messageTextRef = React.createRef();

    const sendMes = () => {
        props.dispatch(sendMessage());
    }

    const updateTextArea = () => {
        let text = messageTextRef.current.value;
        props.dispatch(updateNewMessageText(text));
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.persones}>
                {dialogs}
            </div>

            <div className={classes.messages}>
                {messages}
                <div>
                    <div>
                        <textarea
                            onChange={updateTextArea}
                            ref={messageTextRef}
                            value={props.state.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={sendMes}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;