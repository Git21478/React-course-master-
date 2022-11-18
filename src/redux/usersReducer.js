

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })}

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })}

        case 'SET-USERS':
            return { ...state, users: [...action.users]}

        case 'SET-CURRENT-PAGE': {
            return { ...state, currentPage: action.currentPage}
        }

        case 'SET-USERS-TOTAL-COUNT': {
            return { ...state, totalUsersCount: action.totalCount}
        }

        case 'TOGGLE-IS-FETCHING': {
            return { ...state, isFetching: action.isFetching}
        }

        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                    ...state, 
                    followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] 
                    : state.followingInProgress.filter(id => id != action.userId)
                }
        }

        default:
            return state
    }
}

export default usersReducer