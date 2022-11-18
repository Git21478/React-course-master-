import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'



const Dialogs = (props) => {

    let state1 = props.dialogsPage;

    let dialogsElements = state1.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state1.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state1.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
        props.store.dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
    }

    return (
        
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>

            <div>
                <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
        
    
    )
}

export default Dialogs;