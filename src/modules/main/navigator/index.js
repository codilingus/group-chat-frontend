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
=======
        <CurrentUser />
        <Channels />
        <DirectMessages />
        {/* <LogOut /> */}
>>>>>>> b0963d9db41893607fa7bf77748dcbd645bf1860
        {/* maybe better name it OtherUsers instead of DirectMessages? */}
      </div>
    );
  }
}

export default Navigator;
