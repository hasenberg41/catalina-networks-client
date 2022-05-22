import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';

let stateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let dispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateTextArea: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        }
    }
};

let DialogsContainer = connect(stateToProps, dispatchToProps)(Dialogs)

export default DialogsContainer;