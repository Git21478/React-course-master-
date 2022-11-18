let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                //...action.data,
                login: action.login,
                isAuth: true,
            }

        
        default:
            return state
    }
}

export default authReducer