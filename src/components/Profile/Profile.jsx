import React from 'react';
import PostsContainer from './Posts/PostsContainer';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <PostsContainer 
                posts={props.state.posts} 
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
        </div>
    );
}

export default Profile;