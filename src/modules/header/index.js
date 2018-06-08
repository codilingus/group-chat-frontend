import React, { Component } from 'react';
import Logo from '../logo';
import HeaderNav from './header-nav';
import './style.css';

class Header extends Component {

  render() {
    return (
      <header className='header-container'>
        <Logo />
        <HeaderNav />
      </header>
    );
  }
};

export default Header;
