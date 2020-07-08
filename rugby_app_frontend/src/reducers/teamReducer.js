export default function teamReducer(state = [], action) {
    switch (action.type){
        case "GET_TEAMS":
            return action.payload
        case "ADD_TEAM":
            return [...state, action.payload]
        case "UPDATE_TEAM":
            return state //updated    
        default:   
            return state;
    }
}