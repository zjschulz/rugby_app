import React, { Component } from 'react';
import Registration from '../components/Auth/Registration';
import Login from '../components/Auth/Login';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    fetch(`http://localhost:3001/logout`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
                //"X-CSRF-Token": this.getCookie("CSRF-TOKEN")
            },
            withCredentials: true
        })
        .then(resp => resp.json())
        .then(data => {
          this.props.handleLogout();
          console.log(data)
        })
        .catch(err => console.log(err));
  }

  render () {
    return (
      <div className="home">
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
      </div>
    )
  }
}