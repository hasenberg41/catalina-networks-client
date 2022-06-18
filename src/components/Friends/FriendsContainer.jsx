import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/reducers/friends-reducer';
import Friends from './Friends';

const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalCount: state.friendsPage.totalCount,
        currentPage: state.friendsPage.currentPage
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
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setUsersTotalCount: (count) => {
            dispatch(setUsersTotalCountAC(count))
        }
    }
}

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;