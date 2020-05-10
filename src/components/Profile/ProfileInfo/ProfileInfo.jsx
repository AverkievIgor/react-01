import React from "react";
import s from './ProfileInfo.module.css'
import ava from '../../../img/death.png'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.ava}>
                <img src='https://avatars.mds.yandex.net/get-pdb/1533739/0a2c3a05-39d9-4bd8-96d0-1fd1163eef7a/s1200'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.ava}><img src={ava} /*width='150' height='auto'*/ />+ description</div>
            </div>
        </div>
    );
}
export default ProfileInfo;