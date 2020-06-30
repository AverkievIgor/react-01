import React from "react";
import Header from "./Headers";
import {connect} from "react-redux";
import {logout} from "../../redux/Auth-Reducer";

class HeadersConteiner extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect (mapStateToProps, {logout}) (HeadersConteiner);