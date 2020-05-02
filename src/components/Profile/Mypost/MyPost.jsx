import React from "react";
import s from "./Mypost.module.css"
import Post from "./Post/Post";


const MyPost = (props) => {

    /*let postData = [
        {id: 1, post: 'Мой первый пост!', likesCount: '20' },
        {id: 2, post: 'Hi, how are you?', likesCount: '40'},
        {id: 3, post: 'It`s my first post!', likesCount: '-111'}
    ]
    let postElements = postData.map((el) => <Post id={el.id} post={el.post} like={el.likesCount}/>)*/

    /*  PROPS:
        [
        <Post id={el.id} post={el.post} like={el.likesCount}/>,
        <Post id={el.id} post={el.post} like={el.likesCount}/>,
        <Post id={el.id} post={el.post} like={el.likesCount}/>,
        ]
     */

    let postElements = props.postData.map((el) => <Post key={el.id} id={el.id} post={el.post} like={el.likesCount}/>)

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.MyPost}>
            <h3>My post</h3>
            <div >
                <div>
                    <textarea className={s.textarea}
                              ref={newPostElement} value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div className={s.but}>
                    <button className={s.button} onClick={()=> {onAddPost()}}>Send</button>
                    <button className={s.button}>Clear</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements.reverse()}
            {/*<Post id={postData[0].id} post={postData[0].post} like = {postData[0].likesCount}/>
            <Post id={postData[1].id} post={postData[1].post} like = {postData[1].likesCount}/>
            <Post id={postData[2].id} post={postData[2].post} like = {postData[2].likesCount}/>*/}
            </div>
        </div>
    )
}
export default MyPost