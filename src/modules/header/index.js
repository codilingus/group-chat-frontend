import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import HeaderNav from './header-nav';
import './style.css';

class Header extends Component {

  render() {
    return (
      <header className='header-container'>
        <Link exact to="/">
          <Logo />
        </Link>
        <HeaderNav />
      </header>
    );
  }
};

export default Header;
