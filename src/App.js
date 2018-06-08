import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import WelcomePage from './modules/welcome-page';
import Main from './modules/main';
import './App.css';

class App extends Component {

  render() {
    const { userIsActive } = this.props;
    return (
      <div className='App'>
        <Switch>
          <Route path='/me' component={Main} />
        </Switch>
        <WelcomePage />
        {
          userIsActive &&
          (<Redirect to="/me" />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userIsActive: state.currentUser.isActive
});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
