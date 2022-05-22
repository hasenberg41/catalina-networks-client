import React from 'react';
import DialogItem from './Dialog/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

    let messageElements = props.dialogsPage.messages.map(m => <Message text={m.text} id={m.id} key={m.id}/>);

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onUpdateTextArea = (e) => {
        let text = e.target.value;
        props.updateTextArea(text);
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.persones}>
                {dialogElements}
            </div>

            <div className={classes.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <div>
                        <textarea
                            onChange={onUpdateTextArea}
                            placeholder='Введите сообщение'
                            value={props.dialogsPage.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;