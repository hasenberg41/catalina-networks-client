import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/reducers/dialogs-reducer';
import DialogItem from './Dialog/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = props.state.messages.map(m => <Message text={m} />);

    const sendMes = () => {
        props.dispatch(sendMessageCreator());
    }

    const updateTextArea = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.persones}>
                {dialogElements}
            </div>

            <div className={classes.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea
                            onChange={updateTextArea}
                            placeholder='Введите сообщение'
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