import { connect } from 'react-redux';
import { addNewPostCreator, updateNewPostTextAreaCreator } from '../../../redux/reducers/profile-reducer';
import Posts from './Posts';

let stateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let dispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPostCreator())
        },
        updateTextArea: (text) => {
            dispatch(updateNewPostTextAreaCreator(text))
        }
    }
}

let PostsContainer = connect(stateToProps, dispatchToProps)(Posts);

export default PostsContainer;