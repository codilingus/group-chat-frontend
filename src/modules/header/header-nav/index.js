import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

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

// const mapStateToProps 

export default HeaderNav;

{/* <Link className='header-nav-link'
to='/me'>
</Link> */}