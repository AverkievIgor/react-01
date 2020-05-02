import React from "react";
import s from './../Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;
    /*<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink> - альтернативная запись*/
    return (
        <div className={s.dialogItem + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem

