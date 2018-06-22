import React, { PureComponent } from 'react';
import './style.css';

const channel = 'radnom';

class MessageForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  handleMessage = (event) => {
    const message = event.target.value;
    this.setState({
      message
    });
  };

  render() {
    const { message } = this.state;
    return (
      <div className='message-form-container'>
        <input className='message-form-input'
          placeholder={`Message ${channel}`}
          value={message}
          onChange={this.handleMessage} />
      </div>
    );
  }
}

export default MessageForm;
