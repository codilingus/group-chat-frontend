import React, { PureComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import WelcomePage from './modules/welcome-page';
import Main from './modules/main';
import './App.css';

class App extends PureComponent {

  render() {
    const { userIsActive } = this.props;
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route path='/me' component={Main} />
            <Route exact path='' component={WelcomePage} />
          </Switch>
        </BrowserRouter>
        <BrowserRouter>
          {
            userIsActive &&
            (<Redirect to="/me" />)
          }
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userIsActive: state.currentUser.isActive
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
