import React from "react";
// import axios from "axios";
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFolowingProgress } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../API/api";

class UsersContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.toggleIsFetching(true);

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {
        //     withCredentials: true
        // })
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`, {
        //     withCredentials: true
        // })
        usersAPI.getUsers(this.props.pageSize, pageNumber)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    };

    render() {
        return <>
            {this.props.isFetching === true ? <Preloader /> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                folowingInProgress={this.props.folowingInProgress}
                toggleIsFolowingProgress={this.props.toggleIsFolowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        folowingInProgress: state.usersPage.folowingInProgress
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount: (usersCount) => {
//             dispatch(setTotalUsersCountAC(usersCount))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     };
// };

export default connect(
    mapStateToProps,
    { follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching, toggleIsFolowingProgress }
)(UsersContainer);