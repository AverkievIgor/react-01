import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/Profile-Reducer";
import {Redirect, withRouter} from "react-router-dom";
import {useraAPI} from "../api/api";


class ProfileConteiner extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId=2;
        }
        this.props.getUserProfile(userId);}

    render(){
        if (!this.props.isAuth)
            return <Redirect to={'/login/'}/>;
    return(
        <Profile {...this.props} profile={this.props.profile}/>
    );
}}

let mapStateToProps =(state) => ({
    profile: state.ProfilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent =  withRouter(ProfileConteiner);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);