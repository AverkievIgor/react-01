const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, post: 'Мой первый пост!', likesCount: '20'},
        {id: 2, post: 'Hi, how are you?', likesCount: '40'},
        {id: 3, post: 'It`s my first post!', likesCount: '-111'}
    ],
    newPostText: ''
}

const ProfileReducer = (state = initialState, action) => { /*state=state.ProfilePage*/

    let stateCopy = {...state, postData: {...state.postData}};

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: (state.postData.length + 1),
                post: state.newPostText,
                likesCount: 0
            };
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;}
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;}
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

export const addPostActionCreate = () => {
    return (
        {type: ADD_POST}
    )
}
export const updateNewPostTextActionCreate = (text) => {
    return (
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}

export default ProfileReducer;