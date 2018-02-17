import React from 'react';
import {
    Link,
    Redirect
  } from 'react-router-dom';
import firebase from 'firebase';
import Alert from '../common/alert';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showRegisteredSuccessAlert: false
        }

        this.register = this.register.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    register() {
        const db = firebase.database();
        firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value).then((user) => {
                db.ref(`users/${user.uid}`).set({
                username: this.username.value,
                email: this.email.value,
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                phone: this.phone.value,
                address: this.address.value
            });
        }).then(() => {
            this.setState({
                showRegisteredSuccessAlert: true
            }, () => { 
                setTimeout(this.closeAlert, 4000)
            })
        });
    }

    closeAlert() {
        this.setState({
            showRegisteredSuccessAlert: false
        });
        <Redirect to='/account' />    
    }

    render() {
        return(
            <div id="registration-form-container">
                <div className="registration-form">
                    <input ref={username => this.username = username} placeholder="Username" type="text"/>
                    <input ref={email => this.email = email} placeholder="Email" type="email"/>
                    <input ref={password => this.password = password} placeholder="Password" type="password"/>
                    <input ref={firstName => this.firstName = firstName} placeholder="First Name" type="text"/>
                    <input ref={lastName => this.lastName = lastName} placeholder="Last Name" type="text"/>
                    <input ref={phone => this.phone = phone} placeholder="Phone" type="text"/>
                    <input ref={address => this.address = address} placeholder="Address" type="text"/>
                    <button onClick={this.register}>Register</button>
                    <Link className="link-to-login" to='/login'>Already Signed Up?</Link>
                
                    <Alert 
                    show={this.state.showRegisteredSuccessAlert} 
                    color={'#2ecc71'}
                    onClose={this.closeAlert}
                    alertMessage="Success! Registered Successfully"/>
                </div>
            </div>
        )
    }
}

export default RegistrationForm;