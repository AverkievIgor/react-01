import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../redux/Profile-Reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


/*const MyPostConteiner = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreate())
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreate(text);
        props.store.dispatch(action);
    };
    return (
        <MyPost addPost={addPost}
                updateNewPostText={onPostChange}
                postData={state.ProfilePage.postData}
                newPostText={state.ProfilePage.newPostText}
        />
    )
}*/

let MapStateToProps = (state) => {
    return {
        postData: state.ProfilePage.postData,
        newPostText: state.ProfilePage.newPostText
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {dispatch(addPostActionCreate(newPostText))},
    }
}

const MyPostConteiner = connect(MapStateToProps, MapDispatchToProps)(MyPost)

export default MyPostConteiner;