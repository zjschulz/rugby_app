import React, { Component } from 'react';
import Registration from './Auth/Registration';
import Login from './Auth/Login';
import { connect } from 'react-redux';

class Home extends Component {

  showLogin() {
    if (this.props.user.loggedInStatus === "NOT_LOGGED_IN") {
      return <Login/>
    }
    else {
      return (<h2>Welcome {this.props.user.user.email}!</h2>)
    }
  }
  
  render () {
    return (
      <div className="home">
        <h1>Home</h1>
        <Registration/>
        {this.showLogin()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.loggedInStatus, user: state.user}
}

export default connect(mapStateToProps)(Home)