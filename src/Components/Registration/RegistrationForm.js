import React from 'react';
import {
    Link
  } from 'react-router-dom';

class RegistrationForm extends React.Component {

    render() {
        return(
            <div id="registration-form-container">
                <div className="registration-form">
                    <input placeholder="Username" type="text"/>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Password" type="password"/>
                    <input placeholder="First Name" type="text"/>
                    <input placeholder="Last Name" type="text"/>
                    <input placeholder="Phone" type="text"/>
                    <input placeholder="Address" type="text"/>
                    <button>Register</button>
                    <Link className="link-to-login" to='/login'>Already Signed Up?</Link>
                </div>
            </div>
        )
    }
}

export default RegistrationForm;