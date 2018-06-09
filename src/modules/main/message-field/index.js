import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from './messages';
import MessageForm from './message-form';
import Details from './details';
import './style.css';

class MessageField extends Component {

  render() {
    return (
      <div className='message-field-container'>
        <Details />
        <Messages />
        <MessageForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  
}

export default MessageField;
