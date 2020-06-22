import React from "react";
import {addMessageActionCreate} from "../../redux/Messages-Reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

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
    return {MessagesPage: state.MessagesPage}}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreate(newMessageText))
        }
    }
}
/*let AuthRedirectCoponent = withAuthRedirect(Messages);
const MessagesConteiner = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectCoponent);
export default MessagesConteiner;*/
export default compose (
    connect(mapStateToProps, mapDispatchToProps)/*,
    withAuthRedirect*/)
(Messages)
