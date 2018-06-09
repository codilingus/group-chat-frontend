import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import WelcomePage from './modules/welcome-page';
import Main from './modules/main';
import './App.css';

class App extends Component {

  render() {
    const { isUserActive } = this.props;
    return (
      <div className='App'>
        <Switch>
          <Route path='/me' component={Main} />
          <WelcomePage />
          {isUserActive && (
            <Redirect to="/me" />
          )}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isUserActive: state.currentUser.isActive
});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
