import React, { Component } from 'react';
import RegistrationHeader from './registration-header';
import RegistrationForm from './registration-form';
import './style.css';

class Registration extends Component {

  render() {
    return (
      <div className='registration-container'>
        <RegistrationHeader />
        <RegistrationForm />
      </div>
    );
  }
};

export default Registration;
