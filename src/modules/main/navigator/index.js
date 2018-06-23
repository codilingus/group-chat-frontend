import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import CurrentUser from './current-user';
import Channels from './channels';
import DirectMessages from './direct-messages';
import LogOut from './logout';
import './style.css';

class Navigator extends Component {
  render() {
    return (
      <div className='navigator-container'>
        <p> Chatilingus </p>
<<<<<<< HEAD
        <CurrentUser />
        <Channels />
        <DirectMessages />
        <LogOut />
=======
        <ScrollArea
          speed={0.8}
          className="area"
          contentClassName="content"
          smoothScrolling={true}
          horizontal={false} >
          <CurrentUser />
          <Channels />
          <DirectMessages />
        </ScrollArea>
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
        {/* maybe better name it OtherUsers instead of DirectMessages? */}
      </div>
    );
  }
}

export default Navigator;
