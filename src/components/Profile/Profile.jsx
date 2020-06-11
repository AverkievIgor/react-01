import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostConteiner from "./Mypost/MyPostConteiner";

const Profile = (props) => {
    /*let postData = [
        {id: 1, post: 'Мой первый пост!', likesCount: '20' },
        {id: 2, post: 'Hi, how are you?', likesCount: '40'},
        {id: 3, post: 'It`s my first post!', likesCount: '-111'}
    ]*/

     /*[
        <Post id={el.id} post={el.post} like={el.likesCount}/>,
        <Post id={el.id} post={el.post} like={el.likesCount}/>,
        <Post id={el.id} post={el.post} like={el.likesCount}/>,
        ]*/

    /*let postElements = postData.map((el) => <Post id={el.id} post={el.post} like={el.likesCount}/>)*/
   /* debugger;*/

    return(
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostConteiner store={props.store}/>
        </div>
    );
}
export default Profile;