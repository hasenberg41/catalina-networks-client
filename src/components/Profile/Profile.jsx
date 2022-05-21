import React from 'react';
import Posts from './Posts/Posts';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts 
                posts={props.state.posts} 
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
        </div>
    );
}

export default Profile;