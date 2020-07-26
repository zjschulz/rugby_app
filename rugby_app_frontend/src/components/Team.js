import React, { Component } from 'react';

export default class Team extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            clap: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        this.setState({
            clap: this.state.clap + 1
        })
    }
    
    render(){
        return(
            <tr class="table-secondary">
                <td>{this.props.name} {this.state.clap} <button onClick={this.handleSubmit}>Clap!</button></td> 
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