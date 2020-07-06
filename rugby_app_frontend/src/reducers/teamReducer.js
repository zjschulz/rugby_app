export default function teamReducer(state = {teams: []}, action) {
        switch (action.type){
            case "GET_TEAMS":
                return {teams: action.payload}
            case "ADD_TEAM":
                return {...state, teams: [...state.teams, action.payload]}
            case "UPDATE_TEAM_DATA":
                return state //updated    
            default:   
                return state;
        }
    }
    
export default teamReducer;