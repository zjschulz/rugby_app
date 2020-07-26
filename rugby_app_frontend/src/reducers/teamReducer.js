export default function teamReducer(state = [], action) {
    console.log(9)
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