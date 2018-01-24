import React from 'react';

import '../Styles/RegistrationComponentStyles.css'; 

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);

    }

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
                    <h6>Already Signed Up?</h6>
                </div>
            </div>
        )
    }
}

export default RegistrationComponent;