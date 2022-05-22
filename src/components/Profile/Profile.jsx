import React from 'react';
import PostsContainer from './Posts/PostsContainer';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <PostsContainer />
        </div>
    );
}

export default Profile;