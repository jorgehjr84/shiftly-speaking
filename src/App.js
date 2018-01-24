import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router';
import LandingPageComponent from './Components/LandingPage/LandingPageComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LandingPageComponent />
      </div>
    );
  }
}

export default App;
