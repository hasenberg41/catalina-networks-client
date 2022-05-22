import React from 'react';
import classes from './Friends.module.css';

const Friends = (props) => {
    return (
        <div>
            <h2>Пользователи</h2>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={classes.avatar} src={u.image} alt='avatar of user' />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Удалить</button>
                                : <button onClick={() => props.follow(u.id)}>Подписаться</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Friends;