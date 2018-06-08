import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from '../header';
import Login from '../login';
import Registration from '../registration';
import './style.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className='welcome-page-container'>
        <Header />
        <Switch>
          <Route path='/registration' component={Registration} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(WelcomePage);
