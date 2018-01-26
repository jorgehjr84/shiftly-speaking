import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';
import LoginComponent from './Components/Login/LoginComponent.js';
import RegistrationComponent from './Components/Registration/RegistrationComponent.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path='/' component={LoginComponent}/>
            <Route path='/registration' component={RegistrationComponent}/>
            <Route path='/login' component={LoginComponent}/>
        </div>
      </Router>
    )
  }
}

export default App;
