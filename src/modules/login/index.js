import React, { Component } from 'react';
import InputWrapper from '../../components/input-wrapper';

class Login extends Component {
  render() {
    return (
      <div className="Login-container">
        <InputWrapper text="Username/mail" 
        placeholder="username or email"/>
        <InputWrapper text="Password"
        type="password"
        placeholder="******"/>
      </div>
    );
  }
}

export default Login;
