import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (

        <div className={s.header}>
            <header>
                <img src={"https://avatars.mds.yandex.net/get-pdb/1545998/02797706-c610-489c-a14a-1c88c5079bdd/s1200"}/>

                <div className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        </div>
    );
}

export default Header;