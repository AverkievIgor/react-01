import ProfileReducer from "./Profile-Reducer";
import MessagesReducer from "./Messages-Reducer";
import SidebarReducer from "./Sidebar-Reducer";

/*const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';*/

let store = {
    /*_state: {  /!*создание объекта массивов (упаковали)*!/
        ProfilePage: {
            postData: [
                {id: 1, post: 'Мой первый пост!', likesCount: '20'},
                {id: 2, post: 'Hi, how are you?', likesCount: '40'},
                {id: 3, post: 'It`s my first post!', likesCount: '-111'}
            ],
            newPostText: ''
        },
        MessagePage: {
            dialogsData: [
                {id: 1, name: 'Bug'},
                {id: 2, name: 'Jam'},
                {id: 3, name: 'Fill'},
                {id: 4, name: 'Snymrik'},
                {id: 5, name: 'Snoop'},
                {id: 6, name: 'Stamiho'}
            ],
            messageData: [
                {id: 1, message: 'HI'},
                {id: 2, message: 'LOL =)'},
                {id: 3, message: 'May be yore are cow ?'}
            ],
            newMessageText:''
        },
        Sidebar:{}
    },*/
    _callSubscriber () {
        console.log('state was Changed')
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; // наблюдатель observer патерн // publisher-subscriber
    },

    /*addPost () {
        let newPost = {
            id:  (this._state.ProfilePage.postData.length+1),
            post: this._state.ProfilePage.newPostText,
            likesCount: 0
        };
        this._state.ProfilePage.postData.push(newPost);
        this._state.ProfilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.ProfilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/
    dispatch(action) { // {type: 'ADD-POST}

        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
        this._state.MessagePage = MessagesReducer(this._state.MessagePage, action);
        this._state.SidebarPage = SidebarReducer (this._state.SidebarPage, action)

        this._callSubscriber(this._state)
        /*if (action.type === ADD_POST) {
            let newPost = {
                id: (this._state.ProfilePage.postData.length + 1),
                post: this._state.ProfilePage.newPostText,
                likesCount: 0
            };
            this._state.ProfilePage.postData.push(newPost);
            this._state.ProfilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: (this._state.MessagePage.messageData.length + 1),
                message: this._state.MessagePage.newMessageText
            };
            this._state.MessagePage.messageData.push(newMessage);
            this._state.MessagePage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.MessagePage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }*/
    }
}

/*export const addPostActionCreate = () => {
    return (
        {type: ADD_POST}
    )
}
export const updateNewPostTextActionCreate = (text) => {
    return (
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}

export const addMessageActionCreate = () => {
    return (
        {type: ADD_MESSAGE}
    )
}
export const updateNewMessageTextActionCreate = (text) => {
    return (
        {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
    )
}*/

window.state = store;

export default store;
// store - oop