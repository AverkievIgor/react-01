import React from "react";
import s from './ProfileInfo.module.css'
import ava from '../../../img/death.png'
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
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
                    <ul>
                        <li>{props.profile.contacts.facebook != null ?

                            <div>Facebook: <a href={+props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div> :
                            <div>Facebook: none</div>}</li>
                        <li>{props.profile.contacts.website != null ?
                            <div>Website: <NavLink to={props.profile.contacts.website}>{props.profile.contacts.website}</NavLink></div> :
                            <div>Website: none</div>}</li>
                        <li>{props.profile.contacts.vk != null ?
                            <div>VKontakte: <NavLink to={props.profile.contacts.vk}>{props.profile.contacts.vk}</NavLink></div> :
                            <div>VKontakte: none</div>}</li>
                        <li>{props.profile.contacts.twitter != null ?
                            <div>Twitter: <NavLink to={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</NavLink></div> :
                            <div>Twitter: none</div>}</li>
                        <li>{props.profile.contacts.instagram != null ?
                            <div>Instagram: <NavLink to={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</NavLink></div> :
                            <div>Instagram: none</div>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;