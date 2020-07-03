import React, { Component } from 'react';

export default class GameForm extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            teamA: "",
            teamB: "",
            tryA: "",
            tryB: "",
            convA: "",
            convB: "",
            kickA: "",
            kickB: "",
            teams: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3001/teams')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data
        }))
        .catch(err => alert("team fetch error", err));
    };

    handleSubmit(event) {
        event.preventDefault();
        const ateam = this.state.data.find_by(x => x.name == this.state.teamA)
        const bteam = this.state.data.find_by(x => x.name == this.state.teamB)
        //need to figure out how to get team id based on team name
        fetch(`http://localhost:3001/teams/${ateam.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                wins: "",
                losses: "",
                draws: "",
                pf: "",
                pa: "",
                pd: "",
                bp: "",
                tp: ""
            })
        })
        .then(resp => resp.json())
        //redirect to dashboard??
        .then(data => console.log(data))
        .catch(err => console.log(err));
        // needs to update both teams depending on the info provided in the form
        // would be two seperate fetch requests to update team info
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div>
                <h1>New Game Form</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="teamA"
                    name="teamA"
                    placeholder="Home Team"
                    value={this.state.teamA}
                    onChange={this.handleChange}
                    required></input>
                    <input
                    type="teamB"
                    name="teamB"
                    placeholder="Away Team"
                    value={this.state.teamB}
                    onChange={this.handleChange}
                    required></input><p></p>
                    <input
                    type="tryA"
                    name="tryA"
                    placeholder="Home Team Tries"
                    value={this.state.tryA}
                    onChange={this.handleChange}
                    required></input>
                    <input
                    type="tryB"
                    name="tryB"
                    placeholder="Away Team Tries"
                    value={this.state.tryB}
                    onChange={this.handleChange}
                    required></input><p></p>
                    <input
                    type="convA"
                    name="convA"
                    placeholder="Home Team Conversions"
                    value={this.state.convA}
                    onChange={this.handleChange}
                    required></input>
                    <input
                    type="convB"
                    name="convB"
                    placeholder="Away Team Conversions"
                    value={this.state.convB}
                    onChange={this.handleChange}
                    required></input><p></p>
                    <input
                    type="kickA"
                    name="kickA"
                    placeholder="Home Team Kicks"
                    value={this.state.kickA}
                    onChange={this.handleChange}
                    required></input>
                    <input
                    type="kickB"
                    name="kickB"
                    placeholder="Away Team Kicks"
                    value={this.state.kickB}
                    onChange={this.handleChange}
                    required></input><p></p>                                         
                    <button type="submit">New Game</button>
                </form>
            </div>
        )
    }
}