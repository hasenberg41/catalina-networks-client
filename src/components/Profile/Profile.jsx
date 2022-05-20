import React from 'react';
import Posts from './Posts/Posts';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;