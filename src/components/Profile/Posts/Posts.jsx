import React from 'react';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = (props) => {
    let posts = props.posts.map(p => <Post text={p.text} likes={p.likes} />);

    const onAddPost = () => {
        props.addNewPost();
    }

    const onUpdateTextArea = (e) => {
        let text = e.target.value;
        props.updateTextArea(text);
    }

    return (
        <div className={classes.postBlock}>

            <h3>Posts</h3>

            <div>
                <div>
                    <textarea
                        onChange={onUpdateTextArea}
                        placeholder='Введите текст'
                        value={props.newPostText}
                    />
                </div>

                <div>
                    <button onClick={onAddPost}>Add</button>
                </div>
            </div>

            <div className={classes.posts}>
                {posts}
            </div>

        </div>
    );
}

export default Posts;