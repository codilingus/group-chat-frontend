import React, { Component } from 'react';
import FaChat from 'react-icons/lib/fa/comments';
import './style.scss';

class Logo extends Component {
  render() {
    return (
      <div className='logo-container'>
        <FaChat className='logo-icon'/>
        <span className='logo-title'>Chatilingus</span>
      </div>
    );
  }
}

export default Logo;
