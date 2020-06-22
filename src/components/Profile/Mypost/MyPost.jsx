import React from "react";
import s from "./Mypost.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


let AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText"/>
            </div>
            <div className={s.but}>
                <button className={s.button}>Send</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)
//-----------------------------------------------------------------------------------------------------
const MyPost = (props) => {

    let postElements = props.postData.map((el) => <Post key={el.id} id={el.id} post={el.post} like={el.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.MyPost}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {/*<div >
                <div>
                    <textarea className={s.textarea}
                              ref={newPostElement} value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div className={s.but}>
                    <button className={s.button} onClick={()=> {onAddPost()}}>Send</button>
                    <button className={s.button}>Clear</button>
                </div>
            </div>*/}
            <div className={s.posts}>
                {postElements.reverse()}
            </div>
        </div>
    )
}

export default MyPost