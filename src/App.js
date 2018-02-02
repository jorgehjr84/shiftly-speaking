import React, { Component } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import * as firebase from 'firebase';

import './App.css';
import LoginComponent from './Components/Login/LoginComponent.js';
import RegistrationComponent from './Components/Registration/RegistrationComponent.js';
import Account from './Components/AccountComponent';
import {DB_CONFIG} from './Config/config';

export const firebaseApp = firebase.initializeApp(DB_CONFIG);
export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      // userName: '',
      // user: null,
      // redirectToLogin: false,
      uid: null
    }

  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if(user) {
        window.localStorage.setItem(storageKey, user.uid)
        this.setState({
          uid: user.uid
        })
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({
          uid: null
        })
      } 
    })
  }

  render() {
      return (
        <Router>
          <div className="App">
              <Route exactly path="/" component={LoginComponent}/> 
              <Route path='/registration' component={RegistrationComponent}/>
              <RouteWhenAuthorized path='/account' component={Account}/>
          </div>
        </Router>
      )
  }
}

const RouteWhenAuthorized = ({component: Component, ...rest}) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated() ? (
      <Component {...renderProps} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: {from: renderProps.location}
      }} />
    )
  )}/>
)

export default App;
