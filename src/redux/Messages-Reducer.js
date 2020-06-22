const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}


const MessagesReducer = (state = initialState, action) => { /*state= state.MessagePage*/

    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageText;
            return  {
                ...state,
                messageData:  [...state.messageData, {id: (state.messageData.length + 1),
                    message: action.newMessageText}]
            }
         default:
            return state;
    }
}

export const addMessageActionCreate = (newMessageText) => {
    return (
        {type: ADD_MESSAGE, newMessageText}
    )
}


export default MessagesReducer;