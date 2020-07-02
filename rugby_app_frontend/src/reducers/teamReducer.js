function teamReducer(
    state = {
                teams: [
                    {name: "test",
                    wins: "27/05/2020",
                    losses: "test site",
                    draws: "",
                    pf: "",
                    pa: "",
                    pd: "",
                    bp: "",
                    tp: ""}
                ]}, action
    ) {
        switch (action.type){
            case "GET_TEAMS":
                return state.teams
            case "ADD_TEAM":
                return {
                    ...state,
                        teams: state.teams.concat(action.newTeam)
                }
            default:   
                return state;
        }
    }
    
    export default teamReducer;