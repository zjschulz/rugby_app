export function fetchTeams() {
    return (dispatch) => {
        // dispatch({ type: 'GET_TEAMS' });
        return fetch('http://localhost:3001/teams')
        .then(response => response.json())
        .then(data => dispatch({ type: 'GET_TEAMS', payload: data }))
        .catch(err => alert(err))
    };
}

export function addTeam(formData) {
    return (dispatch) => {
        // dispatch({ type: 'ADD_TEAM'});
        return fetch(`http://localhost:3001/teams`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                user_id: formData.user_id
            })
        })
        .then(response => response.json())
        .then(data => dispatch({ type: 'ADD_TEAM', payload: data }))
        .catch(err => alert(err)) 
    };
}

export function updateTeamA(ateam, formData) {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_TEAM'});
        return fetch(`http://localhost:3001/teams/${ateam.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: ateam.name,
                wins: ateam.wins + formData.awin,
                losses: ateam.losses + formData.aloss,
                draws: ateam.draws + formData.draw,
                pf: ateam.pf + formData.pfA,
                pa: ateam.pa + formData.paA,
                pd: ateam.pd + formData.pfA - formData.paA,
                bp: ateam.bp + formData.bpA,
                tp: ateam.tp + formData.awin*4 + formData.draw*2 + formData.bpA
            })
        })
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'UPDATE_TEAM', payload: data }))
        .catch(err => console.log(err));
    }
}

export function updateTeamB(bteam, formData) {
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
                wins: bteam.wins + formData.bwin,
                losses: bteam.losses + formData.bloss,
                draws: bteam.draws + formData.draw,
                pf: bteam.pf + formData.pfB,
                pa: bteam.pa + formData.paB,
                pd: bteam.pd + formData.pfB - formData.paB,
                bp: bteam.bp + formData.bpB,
                tp: bteam.tp + formData.bwin*4 + formData.draw*2 + formData.bpB
            })
        })
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'UPDATE_TEAM', payload: data }))
        .catch(err => console.log(err));
    }
}

export function checkLoginStatus() {
    return (dispatch) => {
        return fetch(`http://localhost:3001/logged_in`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
    .then(resp => resp.json())
    .then(data => dispatch({ type: 'CHECK_STATUS', payload: data }))}
}

export function handleLogout() {
    return (dispatch) => {
        return fetch(`http://localhost:3001/logout`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
                //"X-CSRF-Token": this.getCookie("CSRF-TOKEN")
            },
            withCredentials: true
        })
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'LOGOUT', payload: data }))
        .catch(err => console.log(err));
    }
}

export function handleLogin(formdata) {
    return (dispatch) => {
        return fetch(`http://localhost:3001/sessions`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: formdata.email,
                password: formdata.password
            }),
            withCredentials: true
        })
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'LOGIN', payload: data }))
        .catch(err => console.log("registration error", err));
    }
}

export function register(formdata) {
    return (dispatch) => {
        return fetch(`http://localhost:3001/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: formdata.email,
                password: formdata.password,
                password_confirmation: formdata.password_confirmation
            }),
            withCredentials: true
        })
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'REGISTER', payload: data }))
        .catch(err => console.log("registration error", err));
    }
}