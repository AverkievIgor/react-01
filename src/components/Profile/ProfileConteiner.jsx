import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/Profile-Reducer";
import {Redirect, withRouter} from "react-router-dom";
import {useraAPI} from "../api/api";
import Messages from "../Messages/Messages";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileConteiner extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId=2;
        }
        this.props.getUserProfile(userId);}

    render(){
        /*if (!this.props.isAuth)
            return <Redirect to={'/login/'}/>;*/
    return(
        <Profile {...this.props} profile={this.props.profile}/>
    );
}}



let mapStateToProps =(state) => ({
    profile: state.ProfilePage.profile
});

export default compose (
    connect (mapStateToProps, {getUserProfile}),
    withRouter/*,
    withAuthRedirect*/)
(ProfileConteiner)
/*
let AuthRedirectCoponent = withAuthRedirect(ProfileConteiner);
let WithUrlDataContainerComponent =  withRouter(AuthRedirectCoponent);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);*/
