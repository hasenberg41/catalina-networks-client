import React from 'react';
import DialogItem from './Dialog/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = props.state.messages.map(m => <Message text={m} />);

    let messageTextRef = React.createRef();

    const sendMessage = () => {
        let text = messageTextRef.current.value;
        alert(text);
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
                        <textarea ref={messageTextRef}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;