import React from "react";
import s from './ProfileInfo.module.css'
import ava from '../../../img/death.png'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
debugger;
    return (
        <div>
            <div className={s.ava}>
                <img src='https://avatars.mds.yandex.net/get-pdb/1533739/0a2c3a05-39d9-4bd8-96d0-1fd1163eef7a/s1200'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.ava}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : ava}/>
                    <div>Full name = {props.profile.fullName}</div>
                    <div>Status: {props.profile.aboutMe}</div>
                    <div>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                    <div>Looking for a job description = {props.profile.lookingForAJobDescription}</div>
                </div>
                <div>Social:
                    <div>Facebook: {props.profile.contacts.facebook}</div>
                    {/*{props.profile.contacts.website != null ? <div>Website: {props.profile.contacts.website}</div>}*/}
                    <div>Website: {props.profile.contacts.website}</div>
                    <div>VKontakte: {props.profile.contacts.vk}</div>
                    <div>Twitter: {props.profile.contacts.twitter}</div>
                    <div>Instagram: {props.profile.contacts.instagram}</div>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;