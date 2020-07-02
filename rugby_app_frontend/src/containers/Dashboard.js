import React from 'react';
import Standings from '../components/Standings';

const Dashboard = props => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>Status: {props.loggedInStatus}</h1>
            <Standings user={props.user}/>
        </div>
    )
}

export default Dashboard;