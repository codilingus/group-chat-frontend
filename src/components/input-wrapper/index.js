import React, { Component } from 'react';
import classNames from 'classnames';
//import './style.css';

class InputWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      value
    });
    this.props.onChange(value);
  }

  render() {
    const { text, type, placeholder, error } = this.props;
    const { detail } = this.state;
    return (
      <div className='input-wrapper'>
        <span>{text}</span>
        <input className={classNames({
          'input-wrapper-input': true,
          'input-wrapper-input--invalid': error
        })}
          value={detail}
          type={type}
          placeholder={placeholder}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default InputWrapper;
