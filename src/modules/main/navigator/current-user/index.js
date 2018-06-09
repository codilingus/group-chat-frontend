import React, { Component } from 'react';
import './style.css'

class CurrentUser extends Component {

  render() {
    return (
      <div 
        className='current-user-container'
        onClick={this.props.onDetails}>
        Me
      </div>
    );
  }
}

export default CurrentUser;
