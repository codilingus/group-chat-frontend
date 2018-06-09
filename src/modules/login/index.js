import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputWrapper from '../../components/input-wrapper';
import './style.css';
import { logIn } from '../../state/login/index'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername = (username) => {
    this.setState({ username });
  };

  handlePassword = (password) => {
    this.setState({ password });
  };

  onLogIn = () => {
    const { username, password } = this.state;
    this.props.onLogIn({username, password});
  }

  render() {
    //maybe we can make one component to handle log in and registration
    return (
      <div className='login-form'>
        <h2>Log in to Chatilingus</h2>
        <InputWrapper text="Username/mail"
          type="text"
          placeholder="username or email"
          error={this.props.invalidLogin}
          onChange={this.handleUsername} />
        <InputWrapper text="Password"
          type="password"
          placeholder="******"
          onChange={this.handlePassword} />
        <button 
          className='login-button-resume'
          onClick={this.onLogIn}>
          Sign in
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    invalidLogin: state.login.invalidLogin
  };
}

const mapDispatchToProps = {
  onLogIn: logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
