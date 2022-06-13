import React from 'react';
import classes from './Friends.module.css';
import API from '../../api';
import userAvatar from '../../assets/images/user-avatar.png';

class Friends extends React.Component {
    componentDidMount() {
        API.get(`Users?PageNumber=${this.props.currentPage}&PageSize=${this.props.pageSize}`)
            .then(response => {
                if (this.props.users.length === 0)
                    this.props.setUsers(response.data.users)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        debugger
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && classes.selectedPage}>{p}</span>
                    })}
                </div>
                <div>
                    <h2>Пользователи</h2>
                    {
                        this.props.users.map(u => <div key={u.id}>
                            <span>
                                <div>
                                    <img className={classes.avatar}
                                        src={u.photos != null ? u.photos.small : userAvatar}
                                        alt='avatar of user' />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => this.props.unfollow(u.id)}>Удалить</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Подписаться</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{"u.location.city"}</div>
                                    <div>{"u.location.country"}</div>
                                </span>
                            </span>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default Friends;