export default function authReducer(state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}}, action) {
    switch (action.type){
        case "CHECK_STATUS" :
            if (action.payload.logged_in && state.loggedInStatus === "NOT_LOGGED_IN") {
                return {loggedInStatus: "LOGGED_IN", user: action.payload.user}}
            else if (!action.payload.logged_in & state.loggedInStatus === "LOGGED_IN") {
                return {loggedInStatus: "NOT_LOGGED_IN", user: {}}}
            else { return state }   
        case "LOGIN" :
            if (action.payload.logged_in) {
                return {loggedInStatus: "LOGGED_IN", user: action.payload.user}
            }
            else { return state }  
        case "LOGOUT" :
            return {loggedInStatus: "NOT_LOGGED_IN", user: {}}
        case "REGISTER" :
            return state
        default:   
            return state;
    }
}