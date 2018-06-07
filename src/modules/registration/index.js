import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import InputWrapper from '../../components/input-wrapper';
import { addNewUser } from '../../state/current-user';
import './style.css';

class Registration extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      mail: ''
    }
  };

  handleUsername = (username) => {
    this.setState({
      username
    });
  };

  handlePassword = (password) => {
    this.setState({
      password
    });
  };

  handleMail = (mail) => {
    this.setState({
      mail
    });
  };

  handlePasswordConfimation = (password) => {
    {
      this.state.password === password
        ? console.log('Good')
        : console.log('Wrong')
    }
  };

  render() {
    const { username, password, mail } = this.state;
    return (
      <div className='registration-form'>
        <h2>Join us! Register to Chatilingus </h2>
        <InputWrapper
          text="Username"
          type="text"
          sendDetail={this.handleUsername}
          placeholder="username" />
        <InputWrapper text="Password"
          type="password"
          sendDetail={this.handlePassword}
          placeholder="*******" />
        <InputWrapper text="Confirm password"
          type="password"
          sendDetail={this.handlePasswordConfimation}
          placeholder="*******" />
        <InputWrapper text="Email"
          type="mail"
          sendDetail={this.handleMail}
          placeholder="mail@example.com" />
        <button className='registartion-button-resume'
          onClick={(username, password, mail) =>
            this.props.onAddingNewUser(username, password, mail)}>
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
