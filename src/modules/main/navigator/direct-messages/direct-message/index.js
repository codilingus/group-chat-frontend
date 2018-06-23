import React, { PureComponent } from 'react';
import classnames from 'classnames';
import FaCircle from 'react-icons/lib/fa/circle';
import { connect } from 'react-redux';
import { startConversation } from '../../../../../state/messages';
import {
  selectUserStatus,
  selectActiveUsers
} from '../../../../../state/active-users/selectors';
import './style.css';

class DirectMessage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleFetchingMessage = () => {
    const { id } = this.props;
    this.props.onStartConversation({ id });
  };

  render() {
    const { name, isActive } = this.props;
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

const mapStateToProps = (state, props) => ({
  isActive: selectUserStatus(state, props.id)
});

const mapDispatchToProps = {
  onStartConversation: startConversation
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessage);
