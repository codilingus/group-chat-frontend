import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Login from '../login';
import Registration from '../registration';
import './style.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className='welcome-page-container'>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path='/registration' component={Registration} />
            <Route path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default WelcomePage;
