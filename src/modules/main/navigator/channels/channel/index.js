import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { startConversation } from '../../../../../state/messages';
=======
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
import './style.css';
import { clearMessageBoard, fetchMessages } from '../../../../../state/messages';

export class Channel extends PureComponent {

  handleDirectToChannel = () => {
    const { id } = this.props;
<<<<<<< HEAD
    this.props.onStartConversation({ id });
=======
    this.props.onClearMessageBoard();
    this.props.onFetchingMessage({ id });
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
  };

  render() {
    const { name } = this.props;
    return (
      <div className='channel-container'
        onClick={this.handleDirectToChannel}>
        # {name}
      </div>
    );
  }
};

<<<<<<< HEAD
const mapStateToProps = () => ({
=======
const mapStateToProps = (state) => ({
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94

});

const mapDispatchToProps = {
<<<<<<< HEAD
  onStartConversation: startConversation
=======
  onFetchingMessage: fetchMessages,
  onClearMessageBoard: clearMessageBoard
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
};

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
