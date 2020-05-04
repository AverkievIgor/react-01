import React from "react";
import s from './Navbar.module.css'
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
import Music from "../Music/Music";
import News from "../News/News";
import {BrowserRouter, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/messages' activeClassName={s.activeLink}>Messages</NavLink>
                </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Пользователи</NavLink>
            </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.activeLink}>Setings</NavLink>
                </div>
        </nav>
    );
}
export default Navbar;

