import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi', likes: 12},
                {message: 'How are you', likes: 15},
              ],
    
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Evgeniy'},
                {id: 2, name: 'Alexander'},
                {id: 3, name: 'Alena'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Konstantin'},
                {id: 5, name: 'Konstantin'},
                {id: 5, name: 'Konstantin'},
              ],
              
            messages: [
                {id: 1, message: 'Hi',},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Welcome'},
                {id: 3, message: 'Welcome'},
                {id: 3, message: 'Welcome'},
              ],

            newMessageBody: ''
    }, 
    
        sidebar: {},
},

getState() {
    return this._state
},

subscribe(observer) {
    this._callSubscriber = observer
},

_callSubscriber() {
    console.log('State was changed')
},

dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
}

}







export default store;