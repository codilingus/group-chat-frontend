import React, { Component } from 'react';
import './style.css';

class Message extends Component {

  render() {
    const { text } = this.props;
    return (
      <div className='message-container'>
        {text}
      </div>
    );
  }
}

export default Message;
