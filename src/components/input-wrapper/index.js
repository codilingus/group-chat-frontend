import React, { Component } from 'react';
import './style.css';

class InputWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ''
    }
  }

  handleDetailValue = (event) => {
    const detail = event.target.value;
    this.setState({
      detail
    });
    this.props.sendDetail(detail);
  }

  render() {
    const { text, sendDetail, type, placeholder } = this.props;
    const { detail } = this.state;
    return (
      <div className='input-wrapper'>
        <span>{text}</span>
        <input className='input-wrapper-input'
          value={detail}
          type={type}
          placeholder={placeholder}
          onChange={this.handleDetailValue} />
      </div>
    );
  }
}

export default InputWrapper;
