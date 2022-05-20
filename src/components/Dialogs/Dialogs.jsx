import React from 'react';
import DialogItem from './Dialog/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = props.messages.map(m => <Message text={m} />);

    return (
        <div className={classes.dialogs}>

            <div className={classes.persones}>
                {dialogs}
            </div>

            <div className={classes.messages}>
                {messages}
            </div>

        </div>
    );
}

export default Dialogs;