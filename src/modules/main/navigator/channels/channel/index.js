import React, { Component } from 'react';
import './style.css';

class Channel extends Component {

  handleDirectToChannel = () => {
    console.log('to do');
  };

  render() {
    const { name } = this.props;
    return (
      <div className='channel-container'
        onClick={this.handleDirectToChannel}>
        # {name}
      </div>
    );
  }
}

export default Channel;
