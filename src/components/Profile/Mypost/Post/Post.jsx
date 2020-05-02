import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img
                    src='https://avatars.mds.yandex.net/get-pdb/1920578/49f7ae2d-9e99-45f3-a06e-b6602bb92436/s1200?webp=false'
                />
                {props.post}
            </div>
            <div className={s.like}>
                <img
                    src='https://avatars.mds.yandex.net/get-pdb/1939052/816156dd-3c53-4f0a-a60c-aecff1086720/s1200?webp=false'
                    />
                {props.like}
            </div>
        </div>
    )
}
export default Post