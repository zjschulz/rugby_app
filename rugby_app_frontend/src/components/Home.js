import React, { Component } from 'react';
import Registration from './Registration';

export default class Home extends Component {
  render () {
    return (
      <div className="home">
        <h1>Home</h1>
        <Registration />
      </div>
    )
  }
}