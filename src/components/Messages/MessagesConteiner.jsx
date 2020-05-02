import React from "react";
import {addMessageActionCreate, updateNewMessageTextActionCreate} from "../../redux/Messages-Reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

/*const MessagesConteiner = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreate())
    }

    let MessageChange = (text) => {
       //let action = updateNewMessageTextActionCreate(text);
        props.store.dispatch(updateNewMessageTextActionCreate(text));
    }

    return (
        <Messages //newMessageText={state.MessagesPage.newMessageText}
                  MessagesPage={state.MessagesPage}
                  addMessage={addMessage}
                  MessageChange={MessageChange}/>
    )
}*/

let mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreate())
        },
        MessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreate(text))
        }
    }
}

const MessagesConteiner = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesConteiner;

