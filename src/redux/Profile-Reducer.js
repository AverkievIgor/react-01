import {profileAPI, useraAPI} from "../components/api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    postData: [
        {id: 1, post: 'Мой первый пост!', likesCount: '20'},
        {id: 2, post: 'Hi, how are you?', likesCount: '40'},
        {id: 3, post: 'It`s my first post!', likesCount: '-111'}
    ],
    profile: null,
    status: ""
}

const ProfileReducer = (state = initialState, action) => { /*state=state.ProfilePage*/

    /*let stateCopy = {...state, postData: {...state.postData}};*/

    switch (action.type) {
        case ADD_POST:{
            /*let newPost = {
                id: (state.postData.length + 1),
                post: action.newPostText,
                likesCount: 0
            };*/
            return  {
                ...state,
                postData:[...state.postData, {id: (state.postData.length + 1),
                post: action.newPostText, likesCount: 0}
            ]}}
            //stateCopy.postData.push(newPost);
            //stateCopy.newPostText = '';
            /*return stateCopy;}*/

        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS:{
            return {...state, status: action.status}
        }
        default:
            return state;
    }
    /*if (action.type === ADD_POST) {
        let newPost = {
            id: (state.postData.length + 1),
            post: state.newPostText,
            likesCount: 0
        };
        state.postData.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
return state*/
}

export const addPostActionCreate = (newPostText) => {
    return (
        {type: ADD_POST, newPostText}
    )
}
export const setUserProfile = (profile) => {
    return (
        {type: SET_USER_PROFILE, profile}
    )
}
export const setStatus = (status) => {
    return (
        {type: SET_STATUS, status}
    )
}

/*Thunk*/
export const getUserProfile = (userId) => (dispatch) => {
    useraAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(response.data));
            }
        });
}
/*----------*/
export default ProfileReducer;