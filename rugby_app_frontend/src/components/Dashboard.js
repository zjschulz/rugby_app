import React from 'react';
import Standings from './Standings';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    
    render () {
        return (
            <div>
                <h1>Dashboard</h1>
                <Standings/>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {loggedInStatus: state.loggedInStatus, user: state.user}
  }
  
export default connect(mapStateToProps)(Dashboard)