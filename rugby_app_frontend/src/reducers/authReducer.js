export default function authReducer(state = {user: []}, action) {
    switch (action.type){
        case "LOGIN":
            return state
        case "REGISTER":
            return state
        case "LOGOUT":
            return state 
        default:   
            return state;
    }
}

export default authReducer;