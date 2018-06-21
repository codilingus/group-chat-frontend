import React, { Component } from 'react';
import classnames from 'classnames';
import FaCircle from 'react-icons/lib/fa/circle';
import { connect } from 'react-redux';
import {
  clearMessageBoard,
  fetchMessages,
  setConversationistAndClearBoard
} from '../../../../../state/messages';
import './style.css';

class DirectMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive
      //props in the future
    }
  }

  handleFetchingMessage = () => {
    const { id } = this.props;
    this.props.onClearMessageBoard();
    this.props.onFetchingMessage({ id });
  };

  render() {
    const { name } = this.props;
    const { isActive } = this.state;
    return (
      <div className='direct-message-container'>
        <FaCircle className={classnames('inactive-user',
          { 'active-user': isActive })} />
        <div className='user-name'
          onClick={this.handleFetchingMessage}>
          {name}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  onFetchingMessage: fetchMessages,
  onClearMessageBoard: clearMessageBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessage);
