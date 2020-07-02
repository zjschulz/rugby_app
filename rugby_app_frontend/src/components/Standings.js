import React from 'react';
import Team from './Team';

export default class Standings extends React.Component {

    // generateTeams = () => {
    //     return this.state.teams.map((team, index) => <Team
    //       key = {index}
    //       name = {team.name}
    //       wins = {team.wins}
    //       losses = {team.losses}
    //       draws = {team.draws}
    //       pf = {team.pf}
    //       pa = {team.pa}
    //       pd = {team.pd}
    //       bp = {team.bp}
    //       tp = {team.tp}
    //       />)
    //     };

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
                    {/* {this.generateTeams()} */}
                    <Team />
                </tbody>
            </table>
            </div>
        )
        }
    }