import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import MessagesConteiner from "./components/Messages/MessagesConteiner";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import HeadersConteiner from "./components/Header/HeadersConteiner";

const App = (props) => {

    return (
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
                </div>
            </div>
    );
}
export default App;