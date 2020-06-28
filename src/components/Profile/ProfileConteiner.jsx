import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/Profile-Reducer";
import {Redirect, withRouter} from "react-router-dom";
import {useraAPI} from "../api/api";
import Messages from "../Messages/Messages";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileConteiner extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render(){
        /*if (!this.props.isAuth)
            return <Redirect to={'/login/'}/>;*/
    return(
        <Profile {...this.props}
                 profile={this.props.profile}
                 status={this.props.status}
                 updateStatus={this.props.updateStatus}
        />
    );
}}



let mapStateToProps =(state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose (
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter/*,
    withAuthRedirect*/)
(ProfileConteiner)
/*
let AuthRedirectComponent = withAuthRedirect(ProfileConteiner);
let WithUrlDataContainerComponent =  withRouter(AuthRedirectCoponent);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);*/
