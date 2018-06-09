import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './style.css';

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
    const { text, type, placeholder } = this.props;
    const { detail } = this.state;
    return (
      <div className='input-wrapper'>
        <span>{text}</span>
        <input className={classNames(
            'input-wrapper-input', 
            this.props.invalidLogin && 'input-wrapper-input--invalid')}
          value={detail}
          type={type}
          placeholder={placeholder}
          onChange={this.onChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    invalidLogin: state.login.invalidLogin
  };
}

export default connect(mapStateToProps)(InputWrapper);
