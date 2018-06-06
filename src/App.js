import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Registration from './modules/registration';
import Login from './modules/login';
import Main from './modules/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/registration' component={Registration} />
            <Route path='/login' component={Login} />
            <Route path='' component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
