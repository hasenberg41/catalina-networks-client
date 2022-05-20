import React from 'react';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = (props) => {
    let posts = props.posts.map(p => <Post text={p.text} likes={p.likes} />)
    return (
        <div className={classes.postBlock}>

            <h3>Posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button>Add</button>
                </div>
            </div>

            <div className={classes.posts}>
                {posts}
            </div>

        </div>
    );
}

export default Posts;