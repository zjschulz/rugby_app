import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'darkblue',
  textDecoration: 'none',
  color: 'white',
}

const nolog = {
  padding: '12px',
  margin: '0 6px 6px',
  background: 'red',
  textDecoration: 'none',
  color: 'white',
  display: 'inline-block'
}

const yeslog = {
  padding: '12px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
  display: 'inline-block'
}
 
class Navbar extends React.Component {
  
  renderlog() {
    if (this.props.loggedInStatus === "NOT_LOGGED_IN") {
      return (
        <button style={nolog}>{this.props.loggedInStatus}</button>
      )
    }
    else if (this.props.loggedInStatus === "LOGGED_IN") {
      return (
        <button style={yeslog}>{this.props.loggedInStatus}</button>
      )
    }
  }
  
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {teams: state.teams, loggedInStatus: state.user.loggedInStatus, user: state.user.user}
}

export default connect(mapStateToProps)(Navbar)