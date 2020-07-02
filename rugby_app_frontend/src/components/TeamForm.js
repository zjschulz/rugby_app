import React, { Component } from 'react';

export default class TeamForm extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        // fetch request to create team
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div>
                <h1>New Team Form</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
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
            </div>
        )
    }
}