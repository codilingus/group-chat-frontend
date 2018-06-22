import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'

class CurrentUser extends Component {

  render() {
    return (
      <div 
        className='current-user-container'
        onClick={this.props.onDetails}>
        {this.props.activeUser}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.log.activeUser
  };
}

export default connect(mapStateToProps)(CurrentUser);
