import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'





let mapStateToProps = (state) => {
    return ({
        dialogsPage: state.dialogsPage
})
}

let mapDispatchToProps = (dispatch) => {
     return ({
        updateNewMessageBody: (body) => {
            dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
        },
        sendMessage: () => {
            dispatch({type: 'SEND-MESSAGE'})
        }
})
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;