import React from 'react';
import Standings from './Standings';

const Dashboard = props => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>Status: {props.loggedInStatus}</h1>
            <Standings />
        </div>
    )
}

export default Dashboard;