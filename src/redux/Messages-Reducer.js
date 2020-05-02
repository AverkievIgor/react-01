const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const MessagesReducer = (state = initialState, action) => { /*state= state.MessagePage*/
    let stateCopy = {
        ...state,
        messageData:[...state.messageData]
    }

    switch (action.type) {
        case ADD_MESSAGE: {

            let newMessage = {
                id: (stateCopy.messageData.length + 1),
                message: stateCopy.newMessageText
            };
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

        /*if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: (state.messageData.length + 1),
                message: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
           state.newMessageText = action.newText;
        }
    return state*/
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
}

export default MessagesReducer;