import React from "react";
import s from './ProfileInfo.module.css'
import ava from '../../../img/death.png'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.ava}>
                <img src='https://avatars.mds.yandex.net/get-pdb/1533739/0a2c3a05-39d9-4bd8-96d0-1fd1163eef7a/s1200'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.ava}><img src= {props.profile.photos.large != null ? props.profile.photos.large : ava}  />+ description</div>
            </div>
        </div>
    );
}
export default ProfileInfo;