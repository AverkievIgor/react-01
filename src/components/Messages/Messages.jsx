import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreate, updateNewMessageTextActionCreate} from "../../redux/Messages-Reducer";
import Post from "../Profile/Mypost/Post/Post";
import {Redirect} from "react-router-dom";


const Messages = (props) => {

    /*let dialogsData = [
        {id: 1, name: 'Bug'},
        {id: 2, name: 'Jam'},
        {id: 3, name: 'Fill'},
        {id: 4, name: 'Snymrik'},
        {id: 5, name: 'Snoop'},
        {id: 6, name: 'Stamiho'}
    ]*/
    /*let messageData = [
        {id: 1, message: 'HI'},
        {id: 2, message: 'LOL =)'},
        {id: 3, message: 'May be yore are cow ?'} ]*/

    let dialogsElement = props.MessagesPage.dialogsData.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messageElement = props.MessagesPage.messageData.map((el) => <Message key={el.id} message={el.message}
                                                                             id={el.id}/>)
    let newMessage = React.createRef();
    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.MessageChange(text);
    }
    if (!props.isAuth)
        return <Redirect to={'/login/'}/>;


            return (
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {dialogsElement}
                    {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name='Fill' id='3'/>
                <DialogItem name='Snymrik' id='4'/>
                <DialogItem name='Snoop' id='5'/>
                <DialogItem name='Stamiho' id='6'/>*/}
                </div>
                <div className={s.messages}>
                    <div> {messageElement}
                        {/*<Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>*/}
                    </div>
                    <div>
                    <textarea ref={newMessage}
                              value={props.MessagesPage.newMessageText}
                              onChange={onMessageChange}
                              placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>ADD Message</button>
                    </div>
                </div>
            </div>
            )}

            export default Messages;


