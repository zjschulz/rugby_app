import React from 'react';
import Team from './Team';

export default class Standings extends React.Component {

    constructor() {
        super();
    
        this.state = {
          data: []
        };
    }    

    componentDidMount() {
        fetch('http://localhost:3001/teams')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data
        }))
        .catch(err => alert(err));
    };

    generateTeams = () => {
        return this.state.data.filter(x => x.user_id === this.props.user.id).map(team => <Team
          name = {team.name}
          wins = {team.wins}
          losses = {team.losses}
          draws = {team.draws}
          pf = {team.pf}
          pa = {team.pa}
          pd = {team.pd}
          bp = {team.bp}
          tp = {team.tp}
          />)
        };

    render() {    
        return (
            <div>
            <table>
                <tr>
                    <th>Team Name</th>
                    <th>Win</th>
                    <th>Loss</th>
                    <th>Draw</th>
                    <th>Points For</th>
                    <th>Points Against</th>
                    <th>Points Differential</th>
                    <th>Bonus Points</th>
                    <th>Total Points</th>
                </tr>
                <tbody>
                    {this.generateTeams()}
                    <Team />
                </tbody>
            </table>
            </div>
        )
        }
    }