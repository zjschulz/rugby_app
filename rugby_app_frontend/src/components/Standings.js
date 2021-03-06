import React from 'react';
import Team from './Team';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/actions';

class Standings extends React.Component {

    componentDidMount() {
        this.props.fetchTeams()
    };

    generateTeams = () => {
        function compare(a, b) {
            const totalpointsA = a.tp;
            const totalpointsB = b.tp;
          
            let comparison = 0;
            if (totalpointsA > totalpointsB) {
              comparison = 1;
            } else if (totalpointsA < totalpointsB) {
              comparison = -1;
            }
            return comparison * -1;
          };
          
        return this.props.teams.filter(team => team.user_id === this.props.user.id).sort(compare).map((team, index) => <Team
          key = {index}
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
            <table class="table table-hover">
                <tbody>
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
                    {this.generateTeams()}
                </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {teams: state.teams, user: state.user.user}
}

export default connect(mapStateToProps, { fetchTeams })(Standings)