import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UMv_pmFva1Ke5aGOLN_wl1zXRjK9hwzBkA&usqp=CAU' alt='gachi' />
        </div>
    );
}

export default Header;