import React, { Component } from 'react';

export default class Team extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.name}</td> 
                <td>{this.props.wins}</td>
                <td>{this.props.losses}</td>
                <td>{this.props.draws}</td>
                <td>{this.props.pf}</td>
                <td>{this.props.pa}</td>
                <td>{this.props.pd}</td>
                <td>{this.props.bp}</td>
                <td>{this.props.tp}</td>
            </tr>
        )
    }
   

   
}