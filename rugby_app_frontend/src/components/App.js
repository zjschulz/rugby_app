import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from '../containers/Home';
import Dashboard from './Dashboard';
import GameForm from './GameForm';
import Navbar from './Navbar';

export default class App extends Component {
  
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }
  
  checkLoginStatus() {
    fetch(`http://localhost:3001/logged_in`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .then(data => {
      if (data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN")
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: data.user
        })
      else if (!data.logged_in & this.state.loggedInStatus === "LOGGED_IN")
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      });
    })
    .catch(err => {
      console.log("check login error", err);
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: ""
    })
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render () {
    return (
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                {...props}
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus}/>
              )} 
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
              )} 
            />
            <Route
              exact
              path={"/gameform"}
              render={props => (
                <GameForm {...props} loggedInStatus={this.state.loggedInStatus} />
              )} 
            />
          </Switch>
        </BrowserRouter>  
      </div>
    )
  }
}