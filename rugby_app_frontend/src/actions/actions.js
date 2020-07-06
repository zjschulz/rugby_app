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