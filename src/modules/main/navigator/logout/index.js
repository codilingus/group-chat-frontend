
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { logOut } from '../../../../state/logout/index';

class LogOut extends Component {
  render() {
    return (
      <div 
        className='logout'
        onClick={this.props.onLogOut}>
        <span>LogOut</span>
      </div>
    )
  }
}

const mapDispatchToProps = {
  onLogOut: logOut
};

export default connect(null, mapDispatchToProps)(LogOut);