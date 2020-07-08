import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import GameForm from './GameForm';
import TeamForm from './TeamForm';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { checkLoginStatus } from '../actions/actions';

class App extends Component {
  
  constructor() {
    super();

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }
  
  // checkLoginStatus() {
  //   fetch(`http://localhost:3001/logged_in`, {
  //           method: 'GET',
  //           headers: {
  //               'Content-type': 'application/json',
  //               'Accept': 'application/json'
  //           },
  //           withCredentials: true
  //       })
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  //   .then(data => {
  //     if (data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN")
  //       this.setState({
  //         loggedInStatus: "LOGGED_IN",
  //         user: data.user
  //       })
  //     else if (!data.logged_in & this.state.loggedInStatus === "LOGGED_IN")
  //     this.setState({
  //       loggedInStatus: "NOT_LOGGED_IN",
  //       user: {}
  //     });
  //   })
  //   .catch(err => {
  //     console.log("check login error", err);
  //   })
  // }

  componentDidMount() {
    this.props.checkLoginStatus()
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
                <Home {...props}/>
              )} 
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard {...props}/>
              )} 
            />
            <Route
              exact
              path={"/gameform"}
              render={props => (
                <GameForm {...props}/>
              )} 
            />
            <Route
              exact
              path={"/teamform"}
              render={props => (
                <TeamForm {...props}/>
              )} 
            />
          </Switch>
        </BrowserRouter>  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.loggedInStatus, user: state.user}
}

export default connect(mapStateToProps, { checkLoginStatus })(App)