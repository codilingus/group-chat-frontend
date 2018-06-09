import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import './style.css';

class Messages extends Component {

  render() {
    const { messages, name } = this.props;
    console.log(messages);
    return (
      <div className='messages-container'>
        {messages.length > 0 && (
          <div>
            {messages.map((message, index) => (
              <Message text={message}
                key={index} />
            ))}
          </div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  timestamp: state.messages.timestamp
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
