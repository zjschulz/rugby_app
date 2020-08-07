import React, { Component } from 'react';
import Registration from './Registration';
import Login from './Login';
import { connect } from 'react-redux';

class Home extends Component {

  showLogin() {
    if (this.props.user.loggedInStatus === "NOT_LOGGED_IN") {
      return <Login/>
    }
    else {
      return (<h2><small class="text-muted" ><center>Welcome {this.props.user.user.email}!</center></small></h2>)
    }
  }
  
  render () {
    return (
      <div className="home">
        <div class="jumbotron" style={{padding:"2rem", margin:"2rem"}}>
            <h2 class="display-3">Try Awarded</h2>
            <p class="lead">A Zachary Schulz Application</p>
            <hr class="my-4"></hr>
            <p>This application was designed to input and track the current standings for a rugby division, tournament, league, etc. A user is able to use authentication tools to sign up, login, and logout. Onced logged in, a user may create teams for their uses. After teams are created, a user may input game statistics between two teams. This data is then updated and presented to the user via the dashboard page. On the dashboard page is also a brief explanation on how the total points are calculated for each team. The dashboard page also present the current standings for the teams, with the number 1 ranking being on top of the table.</p>
       </div>
        {this.showLogin()}
        <hr class="my-4"></hr>
        <Registration/>
        <hr class="my-4"></hr>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.loggedInStatus, user: state.user}
}

export default connect(mapStateToProps)(Home)