import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/Profile-Reducer";
import {withRouter} from "react-router-dom";


class ProfileConteiner extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId )
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render(){
    return(
        <Profile {...this.props} profile={this.props.profile}/>
    );
}}

let mapStateToProps =(state) => ({
    profile: state.ProfilePage.profile
});

let WithUrlDataContainerComponent =  withRouter(ProfileConteiner);

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);