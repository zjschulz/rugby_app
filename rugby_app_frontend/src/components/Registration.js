import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { register } from '../actions/actions';

class Registration extends Component {
  
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
        event.preventDefault();
        this.props.register(this.state)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div style={{marginLeft: '20px'}}>
                <h2>Registration</h2>
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

export default connect(null, { register })(Registration)