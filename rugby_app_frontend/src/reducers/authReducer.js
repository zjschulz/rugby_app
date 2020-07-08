export default function authReducer(state = {user: []}, action) {
    switch (action.type){
        case "LOGIN":
            return {...state, user: action.payload}
        case "LOGOUT":
            return state 
        default:   
            return state;
    }
}