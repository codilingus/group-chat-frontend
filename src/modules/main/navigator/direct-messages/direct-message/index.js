import React, { Component } from 'react';
import classnames from 'classnames';
import FaCircle from 'react-icons/lib/fa/circle';
import './style.css';

class DirectMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive
      //props in the future
    }
  }

  handleAddDirectMessage = () => {
    console.log('to do');
  };

  render() {
    const { name } = this.props;
    const { isActive } = this.state;
    return (
      <div className='direct-message-container'>
        <FaCircle className={classnames('inactive-user',
          { 'active-user': isActive })} />
        <div className='user-name'>{name}
        </div>
      </div>
    );
  }
}

export default DirectMessage;
