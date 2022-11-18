let initialState = {
    dialogs: [
        {id: 1, name: 'Evgeniy'},
        {id: 2, name: 'Alexander'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Konstantin'},
        {id: 6, name: 'Konstantin'},
        {id: 7, name: 'Konstantin'},
      ],
      
    messages: [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Welcome'},
        {id: 4, message: 'Welcome'},
        {id: 5, message: 'Welcome'},
      ],

    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    

    

    
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': 
            return {
                ...state,
                newMessageBody: action.body
            } 
    
        
        case 'SEND-MESSAGE': 
            let body = state.newMessageBody 
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            } 
        
        default:
            return state;
    }
}

export default dialogsReducer