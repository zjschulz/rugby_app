import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTeam } from '../actions/actions';
import CurrentTeams from './CurrentTeams';
 
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
                <CurrentTeams/>
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