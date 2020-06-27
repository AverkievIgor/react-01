import React from "react";

import Header from "./Headers";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/Auth-Reducer";
import {authAPI, authApi} from "../api/api";

class HeadersConteiner extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect (mapStateToProps, {getAuthUserData, logout}) (HeadersConteiner);