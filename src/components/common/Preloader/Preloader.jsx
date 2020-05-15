import React from "react";
import preloader from "../../../img/loader.gif";
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={s.preloader}>
        <div className={s.preloader__image}></div>
    </div>
    /*<img src={preloader} width={'300 px'} height={'auto'}/>*/
}
export default Preloader