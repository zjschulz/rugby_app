import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '/home/zjschulz/code/rugby_app/rugby_app_frontend/src/actions/actions.js';
import { withRouter } from "react-router";

class Login extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleLogin(this.state, this.props.history);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div style={{marginLeft: '20px'}}>
                <h2>Login</h2>
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
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {loggedInStatus: state.loggedInStatus, user: state.user}
}

export default connect(mapStateToProps, { handleLogin })(withRouter(Login))