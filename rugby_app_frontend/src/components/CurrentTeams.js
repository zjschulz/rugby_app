import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentTeams extends Component {
    
    constructor(props) {
        super(props);

        this.availableTeams = this.availableTeams.bind(this);
    }

    availableTeams() {
        function compare(a, b) {
            const nameA = a.name;
            const nameB = b.name;
          
            let comparison = 0;
            if (nameA > nameB) {
              comparison = 1;
            } else if (nameA < nameB) {
              comparison = -1;
            }
            return comparison * 1;
          };

        return this.props.teams.filter(x => x.user_id === this.props.user.id).sort(compare).map(team => {
            return (
                <li>{team.name}</li>
            )
        })
    }
    
    render(){
        return(
            <div id="currentteams">
                <h2>Available Teams</h2>
                <ul>{this.availableTeams()}</ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {teams: state.teams, loggedInStatus: state.user.loggedInStatus, user: state.user.user}
}

export default connect(mapStateToProps)(CurrentTeams)