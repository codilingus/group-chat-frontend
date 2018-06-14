import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import Messages from './messages';
import MessageForm from './message-form';
import Details from './details';
import './style.css';

class MessageField extends Component {

  render() {
    return (
      <div className='message-field-container'>
        <Details />
        <ScrollArea
          speed={0.8}
          className="area"
          contentClassName="content"
          smoothScrolling={true}
          horizontal={false} >
          <Messages />
        </ScrollArea>
        <MessageForm />
      </div>
    );
  }
}

export default MessageField;
