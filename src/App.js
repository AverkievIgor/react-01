import React from 'react';
import './App.css';


import Header from "./components/Header/Headers";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import MessagesConteiner from "./components/Messages/MessagesConteiner";
import Users from "./components/Users/Users";
import UsersConteiner from "./components/Users/UsersConteiner";

let SomeComponent = () => <Messages/>

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/profile' component={Profile}/>
                    <Route  path='/messages' component={Messages}/>*/}

                    <Route path='/profile'
                           render={() => <Profile
                               //store={props.store}
                           />}/> {/*равнозначные записи*/}
                    <Route /*exact*/ path='/messages'
                                     render={() => <MessagesConteiner
                                         //store={props.store}
                                         />}/>
                    {/*<Route  path='/messages' render={SomeComponent} равнозначные записи (поясление сверху SomeComponent), тут можно и render использовать и component*/}
                    <Route path='/users'
                           render={() => <UsersConteiner />}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}
export default App;