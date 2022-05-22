import { connect } from 'react-redux';
import { addNewPostCreator, updateNewPostTextAreaCreator } from '../../../redux/reducers/profile-reducer';
import Posts from './Posts';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPostCreator())
        },
        updateTextArea: (text) => {
            dispatch(updateNewPostTextAreaCreator(text))
        }
    }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;