import React, { Component } from 'react';

import '../App.css';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class LoginComponent extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
        
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
 

    handleEmailChange(e) {
        e.preventDefault();
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
        e.preventDefault();
        this.setState({password: e.target.value});
    }
    

    render() {
    return (
      <form onSubmit={this.updateEmailAndPassword}>
        <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
            value={this.state.email} 
            onChange={this.handleEmailChange}
          />
          <FieldGroup
          id="formControlsPassword"
          label="Password"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          />
          <button onClick={this.handleSignUp}>Submit</button>
      </form>
    );
}

    handleSignUp(e) {
        e.preventDefault();
        console.log("Email: " + this.state.email);
        console.log("Password: " + this.state.password);
    }
}

export default LoginComponent;