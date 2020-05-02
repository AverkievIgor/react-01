import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <header>
                <img src={"https://avatars.mds.yandex.net/get-pdb/1545998/02797706-c610-489c-a14a-1c88c5079bdd/s1200"}/>
            </header>
        </div>
    );

}

export default Header;