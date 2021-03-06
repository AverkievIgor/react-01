import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import MessagesConteiner from "./components/Messages/MessagesConteiner";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import HeadersConteiner from "./components/Header/HeadersConteiner";
import Login from "./components/Login/Login";
import {initializeApp} from "./../src/redux/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        else return (
            <div className='app-wrapper'>
                <HeadersConteiner/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileConteiner/>}/>
                    <Route path='/messages' render={() => <MessagesConteiner/>}/>
                    <Route path='/users' render={() => <UsersConteiner/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/Login' component={Login}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect (mapStateToProps, {initializeApp}))(App);