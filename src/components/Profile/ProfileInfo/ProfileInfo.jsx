import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={classes.topImage} src='https://c.tenor.com/6V1ooQVn3CQAAAAd/gachi-fist.gif' alt='gachi-slaves' />
            <div className={classes.desctiptionBlock}>ava + description</div>
        </div>
    );
}

export default ProfileInfo;