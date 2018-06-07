import React, { Component } from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import './style.css';

class HeaderNav extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='header-nav'>
          <Link className='header-nav-link'
            to='/registration'>
            Register
          </Link>
          <Link className='header-nav-link'
            to='/login'>
            Log in
          </Link>
        </div>
      </BrowserRouter>
    );
  }
};

export default HeaderNav;
