import React from 'react';
import { addNewPostCreator, updateNewPostTextAreaCreator } from '../../../redux/reducers/profile-reducer';
import Posts from './Posts';

const PostsContainer = (props) => {

    const addPost = () => {
        props.dispatch(addNewPostCreator())
    }

    const updateTextArea = (text) => {
        props.dispatch(updateNewPostTextAreaCreator(text))
    }

    return (
        <Posts 
            posts={props.posts}
            newPostText={props.newPostText}
            addNewPost={addPost} 
            updateTextArea={updateTextArea}
        />
    );
}

export default PostsContainer;