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
            pfA: "",
            pfB: "",
            paA: "",
            paB: "",
            awin: "",
            bwin: "",
            aloss: "",
            bloss: "",
            draw: "",
            bpA: "",
            bpB: "",
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
        const ateam = this.state.data.find(x => x.name === this.state.teamA);
        const bteam = this.state.data.find(x => x.name === this.state.teamB);
        fetch(`http://localhost:3001/teams/${ateam.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: ateam.name,
                wins: ateam.wins + this.state.awin,
                losses: ateam.losses + this.state.aloss,
                draws: ateam.draws + this.state.draw,
                pf: ateam.pf + this.state.pfA,
                pa: ateam.pa + this.state.paA,
                pd: ateam.pd + this.state.pfA - this.state.paA,
                bp: ateam.bp + this.state.bpA,
                tp: ateam.tp + this.state.awin*4 + this.state.draw*2
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        fetch(`http://localhost:3001/teams/${bteam.id}`, {
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
        //redirect to dashboard??
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({
            pfA: this.state.tryA*5 + this.state.convA*2 + this.state.kickA*3,
            pfB: this.state.tryB*5 + this.state.convB*2 + this.state.kickB*3,
            paA: this.state.tryB*5 + this.state.convB*2 + this.state.kickB*3,
            paB: this.state.tryA*5 + this.state.convA*2 + this.state.kickA*3
        });
        
        if (this.state.pfA > this.state.paA){ 
            this.setState({
                awin: 1,
                bloss: 1
            });
            if ((this.state.tryA - this.state.tryB) >= 3) {
                this.setState({
                    bpA: 1
                })}
            else if ((this.state.pfA - this.state.paA) <= 8 ){
                this.setState({
                    bpB: 1
                })}}
        else if (this.state.pfA < this.state.paA) {
            this.setState({
                aloss: 1,
                bwin: 1
            })
            if ((this.state.tryB - this.state.tryA) >= 3){
                this.setState({
                    bpB: 1
                })}
            else if ((this.state.pfB - this.state.paB) <= 8 ){
                this.setState({
                    bpA: 1
                })}}
        else if (this.state.pfA === this.state.paA) {
            this.setState({
                draw: 1
            })}    
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