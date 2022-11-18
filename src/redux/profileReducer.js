let initialState = {
    posts: [
        {message: 'Hi', likes: 12},
        {message: 'How are you', likes: 15},
      ],

    newPostText: 'it-kamasutra.com',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD-POST': 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case 'UPDATE-NEW-POST-TEXT': 
            return {
                ...state,
                newPostText: action.newText
            }

        case 'SET-USER-PROFILE': 
            return {
                ...state,
                profile: action.profile
            }
          
        default: 
            return state
    }
}

export default profileReducer