import fetch from 'isomorphic-fetch';

export function fetchTeams() {
    return (dispatch) => {
        dispatch({ type: 'GET_TEAMS' });
        return fetch('http://localhost:3001/teams')
        .then(response => response.json())
        .then(data => dispatch({ type: 'GET_TEAMS', payload: data }))
        .catch(err => alert(err))
    };
}

export function addTeam() {
    return (dispatch) => {
        dispatch({ type: 'ADD_TEAM'});
        return fetch(`http://localhost:3001/teams`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                user_id: this.state.user_id
            })
        })
        .then(response => response.json())
        .then(data => dispatch({ type: 'ADD_TEAM', payload: data }))
        .catch(err => alert(err)) 
    };
}

export function updateTeam() {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_TEAM'});
        return fetch(`http://localhost:3001/teams/${bteam.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: bteam.name,
                wins: bteam.wins + this.state.bwin,
                losses: bteam.losses + this.state.bloss,
                draws: bteam.draws + this.state.draw,
                pf: bteam.pf + this.state.pfB,
                pa: bteam.pa + this.state.paB,
                pd: bteam.pd + this.state.pfB - this.state.paB,
                bp: bteam.bp + this.state.bpB,
                tp: bteam.tp + this.state.bwin*4 + this.state.draw*2
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}