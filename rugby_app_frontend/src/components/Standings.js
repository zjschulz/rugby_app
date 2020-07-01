import React from 'react';
import Team from './Team';

export default class Standings extends React.Component {

    // generateInfo = () => {
    //     return this.state.teams.map((team, index) => <Team
    //       key = {index}
    //       site = {reservation.site}
    //       name = {reservation.name}
    //       date = {reservation.date}
    //       />)
    
    //     };

    render() {    
        return (
            <div>
            <table>
                <tr>
                    <th></th>
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
                    {/* {this.generateReservations()} */}
                    <Team />
                </tbody>
            </table>
            </div>
        )
        }
    }