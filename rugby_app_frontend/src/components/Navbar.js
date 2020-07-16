import React from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { handleLogout } from '../actions/actions';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'darkblue',
  textDecoration: 'none',
  color: 'white',
  border: '2px solid black',
}

const nolog = {
  padding: '12px',
  margin: '0 6px 6px',
  background: 'red',
  textDecoration: 'none',
  color: 'white',
  display: 'inline-block',
  border: '2px solid black',
}

const yeslog = {
  padding: '12px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
  display: 'inline-block',
  border: '2px solid black',
}

const loggedout = {
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'black',
  display: 'inline-block',
  border: '2px solid black',
  font: 'Times New Roman'
}

class Navbar extends React.Component {
  
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick() {
    this.props.handleLogout();
    this.props.history.push('/')
  }

  renderlog() {
    if (this.props.loggedInStatus === "NOT_LOGGED_IN") {
      return (
        <button style={nolog}>Not Logged In</button>
      )
    }
    else if (this.props.loggedInStatus === "LOGGED_IN") {
      return (
        <button style={yeslog}>Logged In</button>
      )
    }
  }
  
  renderlogout() {
    if (this.props.loggedInStatus === "LOGGED_IN") {
      return (
        <button
        style={loggedout}
        onClick={() => this.handleLogoutClick()}>Logout</button>
      )
    }
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{background: 'maroon'}}
        >Home</NavLink>
        <NavLink
          to="/dashboard"
          exact
          style={link} 
          activeStyle={{background: 'maroon'}}
        >Dashboard</NavLink>
        <NavLink
          to="/gameform"
          exact
          style={link}
          activeStyle={{background: 'maroon'}}
        >Game Form</NavLink>
        <NavLink
          to="/teamform"
          exact
          style={link}
          activeStyle={{background: 'maroon'}}
        >Team Form</NavLink>
        {this.renderlog()}
        {this.renderlogout()}
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {teams: state.teams, loggedInStatus: state.user.loggedInStatus, user: state.user.user}
}

export default connect(mapStateToProps, { handleLogout })(withRouter(Navbar))