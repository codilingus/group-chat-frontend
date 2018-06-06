import React, { Component } from 'react';
import FaPlus from 'react-icons/lib/fa/plus-circle';
import DirectMessage from './direct-message';
import './style.css';

const directMessages = ['Anna', 'Jan', 'Ola'];

class DirectMessages extends Component {

  handleAddDirectMessage = () => {

  };

  render() {
    return (
      <div className='direct-messages-container'>
        <div className='direct-messages-header'>
          Direct Messages
            <FaPlus className='icon'
            onClick={this.handleAddDirectMessage} />
          {directMessages.map((directMessage, index) => (
            <DirectMessage
              key={index}
              name={directMessage} />
          ))}
        </div>
      </div>
    );
  }
}

export default DirectMessages;
