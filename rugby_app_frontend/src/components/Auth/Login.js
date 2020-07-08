import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '/home/zjschulz/rugby_app/rugby_app_frontend/src/actions/actions';

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
        console.log("form submitted");
        event.preventDefault();
        this.props.handleLogin(this.state);
        // fetch(`http://localhost:3001/sessions`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: this.state.email,
        //         password: this.state.password
        //     }),
        //     withCredentials: true
        // })
        // .then(resp => resp.json())
        // .then(data => {
        //     if (data.logged_in) {
        //         this.props.handleSuccessfulAuth(data);
        //     }   
        // })
        // .catch(err => console.log("registration error", err)); 
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div>
                <h1>Login</h1>
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

export default connect(mapStateToProps, { handleLogin })(Login)