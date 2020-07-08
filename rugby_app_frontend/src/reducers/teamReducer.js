export default function teamReducer(state = {teams: []}, action) {
    switch (action.type){
        case "GET_TEAMS":
            console.log("GET_TEAMS", action.payload);
            return {...state, teams: action.payload}
        case "ADD_TEAM":
            return {...state, teams: [...state.teams, action.payload]}
        case "UPDATE_TEAM":
            console.log("UPDATE_TEAM", action.payload)
            return state //updated    
        default:   
            return state;
    }
}