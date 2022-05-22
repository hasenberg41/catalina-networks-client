import React from 'react';
import { addNewPostCreator, updateNewPostTextAreaCreator } from '../../../redux/reducers/profile-reducer';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = (props) => {
    let posts = props.posts.map(p => <Post text={p.text} likes={p.likes} />);

    const addPost = () => {
        props.dispatch(addNewPostCreator())
    }

    const updateTextArea = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextAreaCreator(text))
    }

    return (
        <div className={classes.postBlock}>

            <h3>Posts</h3>

            <div>
                <div>
                    <textarea
                        onChange={updateTextArea}
                        placeholder='Введите текст'
                        value={props.newPostText}
                    />
                </div>

                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>

            <div className={classes.posts}>
                {posts}
            </div>

        </div>
    );
}

export default Posts;