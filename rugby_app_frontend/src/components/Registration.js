import React, { Component } from 'react';

export default class Registration extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleSubmit(event) {
        console.log("form submitted");
        event.preventDefault();
        fetch(`http://localhost:3001/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }),
            withCredentials: true
        })
        .then(resp => {
            if (Response.data.status === "created") {
                this.props.handleSuccessfulAuth(resp.data)
            }    
        })
        .catch(err => console.log("registration error", err)); 
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div>
                <h1>Registration</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required></input>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required></input>
                    <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Password Confirmation"
                    value={this.state.password_confirmation}
                    onChange={this.handleChange}
                    required></input>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}