import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/reducers/friends-reducer';
import Friends from './Friends';

const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;