import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import InputWrapper from '../../components/input-wrapper';
import { addNewUser } from '../../state/current-user';
import './style.css';

export class Registration extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      username: '',
      password: '',
      confirmedPassword: '',
      mail: ''
    }
  };

  handleName = (name) => {
    this.setState({ name });
  };

  handleSurname = (surname) => {
    this.setState({ surname });
  };

  handleUsername = (username) => {
    this.setState({ username });
  };

  handlePassword = (password) => {
    this.setState({ password });
  };

  handleMail = (mail) => {
    this.setState({ mail });
  };

  handleConfirmedPassword = (confirmedPassword) => {
    this.setState({ confirmedPassword });
  };

  onAddingNewUser = () => {
    const { name, surname, username, password,
      confirmedPassword, mail } = this.state;
    {
      (password === confirmedPassword)
        ? this.props.onAddingNewUser({ name, surname, username, password, mail })
        : this.cancelPasswords();
    }
  };

  cancelPasswords = () => {
    this.setState({
      password: '',
      confirmedPassword: ''
    });
    alert('Confirmed password doesn\'t match password');
  };

  render() {
    return (
      <div className='registration-form'>
        <h2>Join us! Register to Chatilingus </h2>
        <InputWrapper
          text="Name"
          type="text"
          sendDetail={this.handleName}
          placeholder="name" />
        <InputWrapper
          text="Surname"
          type="text"
          sendDetail={this.handleSurname}
          placeholder="surname" />
        <InputWrapper
          text="Username"
          type="text"
          sendDetail={this.handleUsername}
          placeholder="username" />
        <InputWrapper
          text="Password"
          type="password"
          sendDetail={this.handlePassword}
          placeholder="*******" />
        <InputWrapper
          text="Confirm password"
          type="password"
          sendDetail={this.handleConfirmedPassword}
          placeholder="*******" />
        <InputWrapper
          text="Email"
          type="mail"
          sendDetail={this.handleMail}
          placeholder="mail@example.com" />
        <button
          className='registartion-button-resume'
          onClick={this.onAddingNewUser}>
          Register
        </button>
      </div>
    );
  }
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  onAddingNewUser: addNewUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
