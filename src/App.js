import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import WelcomePage from './modules/welcome-page';
import Main from './modules/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route path='/me' component={Main} />
            <Route exact path='' component={WelcomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
