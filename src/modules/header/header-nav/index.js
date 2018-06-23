import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class HeaderNav extends Component {

  render() {
    return (
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
    );
  }
};

export default HeaderNav;
