import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img className={classes.avatar} src='https://www.meme-arsenal.com/memes/5dbfdf75256c6e60033e263934079f12.jpg' alt='post_avatar' />
            <span></span>

            <div>
                {props.text}
            </div>

            <div>
                {`${props.likes} Likes`}
            </div>
        </div>
    );
}

export default Post;