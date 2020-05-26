import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingInProgress,
    getUsers
} from "../../redux/Users-Reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class UsersConteiner extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        /*this.props.toggleIsFetching(true);
        useraAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });*/
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

        /*this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
            useraAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });*/
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}
let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUserCount: state.UsersPage.totalUserCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
};
/*let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
};*/
export default compose  (
    connect(mapStateToProps, {follow, unfollow,
        setCurrentPage, toggleFollowingInProgress, getUsers})/*,
    withAuthRedirect*/
) (UsersConteiner)
/*
let withRedirect = withAuthRedirect(UsersConteiner)

export default connect(mapStateToProps, {follow, unfollow,
    setCurrentPage, toggleFollowingInProgress, getUsers})(withRedirect);*/
