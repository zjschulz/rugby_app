import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'darkblue',
  textDecoration: 'none',
  color: 'white',
}
 
class Navbar extends React.Component {
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
      </div>
    )
  }
}
 
export default Navbar;