import React, { Component } from 'react';
import Navigator from './navigator';
import MessageField from './message-field';
import './style.css';

class Main extends Component {
  render() {
    return (
      <div className='main-container'>
        <Navigator />
        <MessageField />
      </div>
    );
  }
}

export default Main;
