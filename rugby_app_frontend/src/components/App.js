import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/dashboard"} component={Dashboard} />
          </Switch>
        </BrowserRouter>  
      </div>
    )
  }
}