import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var firebase = require("firebase/app");
require("firebase/auth");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
