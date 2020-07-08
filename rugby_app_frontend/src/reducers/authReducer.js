export default function authReducer(state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}}, action) {
    switch (action.type){
        case "CHECK_STATUS" :
            if (action.payload.logged_in && state.loggedInStatus === "NOT_LOGGED_IN") {
                // this.setState({
                // loggedInStatus: "LOGGED_IN",
                // user: data.user
                // })
                return state}
            else if (!action.payload.logged_in & state.loggedInStatus === "LOGGED_IN") {
                // this.setState({
                // loggedInStatus: "NOT_LOGGED_IN",
                // user: {}
                // });
                return state}
            else
                return state    
        case "LOGIN" :
            if (action.payload.logged_in) {
                // this.setState({
                // loggedInStatus: "LOGGED_IN",
                // user: data.user
                // })
            }   
            return state
        case "LOGOUT":
                // this.setState({
                // loggedInStatus: "NOT_LOGGED_IN",
                // user: ""
                // })
            return state 
        default:   
            return state;
    }
}