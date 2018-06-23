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
    const { messages } = this.props;
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
  lastMessage: selectLastMessage(state),
  id: state.messages.id
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
