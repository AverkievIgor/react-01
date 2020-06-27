import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validator/validators";


let maxLength50 = maxLengthCreator(50)

let AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name="newMessageText"
                    placeholder="Enter your message"/>
            </div>
            <div>
                <button>ADD Message</button>
            </div>
        </form>
    )
}

let AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

const Messages = (props) => {

    let dialogsElement = props.MessagesPage.dialogsData.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messageElement = props.MessagesPage.messageData.map((el) => <Message key={el.id} message={el.message}
                                                                             id={el.id}/>)
    let AddNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElement}
                </div>
                <AddMessageFormRedux onSubmit={AddNewMessage}/>
            </div>
        </div>
    )
}



export default Messages;


