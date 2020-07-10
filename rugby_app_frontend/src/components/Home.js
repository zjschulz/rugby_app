import React, { Component } from 'react';
import Registration from './Auth/Registration';
import Login from './Auth/Login';
import { connect } from 'react-redux';

class Home extends Component {

  render () {
    return (
      <div className="home">
        <h1>Home</h1>
        <Registration/>
        <Login/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.loggedInStatus, user: state.user}
}

export default connect(mapStateToProps)(Home)