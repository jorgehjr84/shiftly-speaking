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
                    <input type="text"/>
                    <input type="email"/>
                    <input type="password"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <button>Register</button>
                    <h6>Already Signed Up?</h6>
                </div>
            </div>
        )
    }
}

export default RegistrationComponent;