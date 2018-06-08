import React, { Component } from 'react';
import InputWrapper from '../../components/input-wrapper';
import './style.css';

class Login extends Component {
  render() {
    //maybe we can make one component to handle log in and registration
    return (
      <div className='login-form'>
        <h2>Log in to Chatilingus</h2>
        <InputWrapper text="Username/mail"
          placeholder="username or email" />
        <InputWrapper text="Password"
          type="password"
          placeholder="******" />
        <button className='login-button-resume'>
          Sign in
        </button>
      </div>
    );
  }
}

export default Login;
