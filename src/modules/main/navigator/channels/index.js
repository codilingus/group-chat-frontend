import React, { Component } from 'react';
import FaPlus from 'react-icons/lib/fa/plus-circle';
import Channel from './channel';
import './style.css';

const channels = ['a', 'b', 'c'];

class Channels extends Component {

  handleAddChannel = () => {
    console.log('to do');
  }

  render() {
    console.log(channels);
    return (
      <div className='channels-container'>
      <div className='channels-header'>
      Channels
      <FaPlus className='icon' onClick={this.handleAddChannel}/>
      </div>
        {channels.map((channel, index) =>
          (<Channel
            key={index}
            name={channel} />)
        )}
      </div>
    );
  }
}

export default Channels;
