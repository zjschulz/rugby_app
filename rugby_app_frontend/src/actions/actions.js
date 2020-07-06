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
        return fetch('http://localhost:3001/teams')
        .then(response => response.json())
        .then(data => dispatch({ type: 'ADD_TEAM', payload: data }))
        .catch(err => alert(err)) 
    };
}