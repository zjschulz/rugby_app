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

  componentDidMount() {
    this.props.checkLoginStatus()
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