import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTeam } from '../actions/actions';
 
class TeamForm extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            user_id: this.props.user.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updatePoints = this.availableTeams.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTeam(this.state, this.props.history);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
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

    render () {
        return (
            <div id="teamform" style={{marginLeft: '20px'}}>
                <h1>New Team Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required></input>         
                    <button type="submit">Submit New Team</button>
                </form>
                <p></p>
                <h2>Current Teams</h2>
                <ul>{this.availableTeams()}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {teams: state.teams, loggedInStatus: state.user.loggedInStatus, user: state.user.user}
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addTeam: (formData, history) => dispatch(addTeam(formData, history)),
    }
  }  

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm)