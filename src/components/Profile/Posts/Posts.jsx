import React from 'react';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = (props) => {
    let posts = props.posts.map(p => <Post text={p.text} likes={p.likes} />);

    let textPostRef = React.createRef();

    const addNewPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    const updateTextArea = () => {
        let text = textPostRef.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', text: text})
    }

    return (
        <div className={classes.postBlock}>

            <h3>Posts</h3>

            <div>
                <div>
                    <textarea onChange={updateTextArea} ref={textPostRef} value={props.newPostText} />
                </div>

                <div>
                    <button onClick={addNewPost}>Add</button>
                </div>
            </div>

            <div className={classes.posts}>
                {posts}
            </div>

        </div>
    );
}

export default Posts;