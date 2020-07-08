import React, { Component } from 'react';
import Registration from './Auth/Registration';
import Login from './Auth/Login';
import { connect } from 'react-redux';
import { handleLogout } from '/home/zjschulz/rugby_app/rugby_app_frontend/src/actions/actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick() {
    this.props.handleLogout()
  }

  render () {
    return (
      <div className="home">
        <h1>Home</h1>
        <h1>Status: {this.props.user.loggedInStatus}</h1>
        <Registration/>
        <Login/>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.loggedInStatus, user: state.user}
}

export default connect(mapStateToProps, { handleLogout })(Home)