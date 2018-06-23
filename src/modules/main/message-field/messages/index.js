import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import {
  selectLastMessage,
  selectMessages,
} from '../../../../state/messages/selectors';
import './style.css';

export class Messages extends PureComponent {

  render() {
<<<<<<< HEAD
    const { messages } = this.props;
=======
    const { messages, id } = this.props;
    console.log(id);
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
    return (
      <div className='messages-container'>
        {messages.map((message, index) => (
          <Message
            text={message.text}
            uderId={message.userId}
            username={message.username}
            key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: selectMessages(state),
<<<<<<< HEAD
  lastMessage: selectLastMessage(state)
=======
  lastMessage: selectLastMessage(state),
  id: state.messages.id
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
