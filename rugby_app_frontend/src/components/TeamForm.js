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
    }
  
    teamCreated() {
        const main = document.getElementById("teamform")
        const div = document.createElement('div')
        div.setAttribute('style',"color: red;")
        main.append(div)
        div.innerHTML = "Team Created: " + this.state.name
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTeam(this.state)
        this.teamCreated();
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div id="teamform">
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {loggedInStatus: state.user.loggedInStatus, user: state.user.user}
  }

export default connect(mapStateToProps, { addTeam })(TeamForm)