import React, { Component } from 'react';
import CurrentUser from './current-user';
import Channels from './channels';
import DirectMessages from './direct-messages';
import './style.css';

class Navigator extends Component {
  render() {
    return (
      <div className='navigator-container'>
        <p> Chatilingus </p>
        <CurrentUser />
        <Channels />
        <DirectMessages />
        {/* maybe better name it OtherUsers instead of DirectMessages? */}
      </div>
    );
  }
}

export default Navigator;
