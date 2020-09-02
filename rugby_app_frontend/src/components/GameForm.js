import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/actions';
import { updateTeamA } from '../actions/actions';
import { updateTeamB } from '../actions/actions';
import CurrentTeams from './CurrentTeams';

class GameForm extends Component {
  
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
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updatePoints = this.updatePoints.bind(this);
    }

    componentDidMount() {
        this.props.fetchTeams();
    };
        
    gameCreated() {
        alert("Game Created Between: " + this.state.teamA + " and " + this.state.teamB);
    }

    handleSubmit(event) {
        event.preventDefault();
        const ateam = this.props.teams.find(x => x.name === this.state.teamA);
        const bteam = this.props.teams.find(x => x.name === this.state.teamB);
        this.props.updateTeamA(ateam, this.state);
        this.props.updateTeamB(bteam, this.state);
        this.gameCreated();
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
                bloss: 1,
                draw: 0
            });
            if ((this.state.tryA - this.state.tryB) >= 3) {
                this.setState({
                    bpA: 1,
                    bpB: 0
                })}
            else if ((this.state.pfA - this.state.paA) <= 8 ){
                this.setState({
                    bpB: 1,
                    bpA: 0
                })}}
        else if (this.state.pfA < this.state.paA) {
            this.setState({
                aloss: 1,
                bwin: 1,
                draw: 0
            })
            if ((this.state.tryB - this.state.tryA) >= 3){
                this.setState({
                    bpB: 1,
                    bpA: 0
                })}
            else if ((this.state.pfB - this.state.paB) <= 8 ){
                this.setState({
                    bpA: 1,
                    bpB: 0
                })}}
        else if (this.state.pfA === this.state.pfB) {
            this.setState({
                draw: 1,
                awin: 0,
                bwin: 0,
                aloss: 0,
                bloss: 0,
                bpA: 0,
                bpB: 0
            })}    
    }
    
    updatePoints() {
        this.setState({
            pfA: this.state.tryA*5 + this.state.convA*2 + this.state.kickA*3,
            pfB: this.state.tryB*5 + this.state.convB*2 + this.state.kickB*3,
            paA: this.state.tryB*5 + this.state.convB*2 + this.state.kickB*3,
            paB: this.state.tryA*5 + this.state.convA*2 + this.state.kickA*3
        });
        if (this.state.pfA > this.state.paA){ 
            this.setState({
                awin: 1,
                bloss: 1,
                draw: 0
            });
            if ((this.state.tryA - this.state.tryB) >= 3) {
                this.setState({
                    bpA: 1,
                    bpB: 0
                })}
            else if ((this.state.pfA - this.state.paA) <= 8 ){
                this.setState({
                    bpB: 1,
                    bpA: 0
                })}}
        else if (this.state.pfA < this.state.paA) {
            this.setState({
                aloss: 1,
                bwin: 1,
                draw: 0
            })
            if ((this.state.tryB - this.state.tryA) >= 3){
                this.setState({
                    bpB: 1,
                    bpA: 0
                })}
            else if ((this.state.pfB - this.state.paB) <= 8 ){
                this.setState({
                    bpA: 1,
                    bpB: 0
                })}}
        else if (this.state.pfA === this.state.pfB) {
            this.setState({
                draw: 1,
                awin: 0,
                bwin: 0,
                aloss: 0,
                bloss: 0,
                bpA: 0,
                bpB: 0
            })}   
    }

    render() {
        return (
            <div id="gameform" style={{marginLeft: '20px'}}>
                <h1>New Game Form</h1>
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
                                    <table class="table table-hover" style={{width: "30%"}}>
                    <tbody>
                        <tr>
                            <th>Team</th>
                            <th>{this.state.teamA}</th>
                            <th>{this.state.teamB}</th>
                        </tr>
                        <tr class="table-secondary">
                            <td>Points For</td>
                            <td>{this.state.pfA}</td>
                            <td>{this.state.pfB}</td>
                        </tr>
                        <tr class="table-secondary">
                            <td>Points Against</td>
                            <td>{this.state.paA}</td>
                            <td>{this.state.paB}</td>
                        </tr>
                        <tr class="table-secondary">
                            <td>Win</td>
                            <td>{this.state.awin}</td>
                            <td>{this.state.bwin}</td>
                        </tr>
                        <tr class="table-secondary">
                            <td>Loss</td>
                            <td>{this.state.aloss}</td>
                            <td>{this.state.bloss}</td>
                        </tr>
                        <tr class="table-secondary">
                            <td>Draw</td>
                            <td>{this.state.draw}</td>
                            <td>{this.state.draw}</td>
                        </tr>
                        <tr class="table-secondary">
                            <td>Bonus Points</td>
                            <td>{this.state.bpA}</td>
                            <td>{this.state.bpB}</td>
                        </tr>
                    </tbody>
                </table>                                       
                    <button type="submit">Submit Game</button>
                    <p style={{color: "red"}}>***Check Info and Click Update Form Button Before Submitting***</p>
                </form>
                    <button onClick={this.updatePoints}>Update Points</button> 
                <p></p>
                <CurrentTeams/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {teams: state.teams, loggedInStatus: state.user.loggedInStatus, user: state.user.user}
}

// const mapDispatchToProps = dispatch => {
//     return { fetchTeams: () => dispatch(fetchTeams())}
// }

export default connect(mapStateToProps, { fetchTeams, updateTeamA, updateTeamB })(GameForm)