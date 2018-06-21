import React, { Component } from 'react';
import './style.css';

const Message = ({ text, username }) => {

  return (
    <div className='message-container' >
      <span className='message-conversationist-name'>
        {username}
      </span>
      <span className='message-text'>
        {text}
      </span>
    </div >
  )
};

export default Message;
