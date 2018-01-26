import React from 'react';

import '../Styles/LoginComponentStyles.css'; 

class LoginComponent extends React.Component {

    render() {
        return(
            <div id="login-form-container">
                {/* <form action="">
                    <img className="email-icon" src="../img/email-icon.png" alt=""/>
                    <input className="email-input" type="email"/>
                    <img className="password-icon" src="../img/password-icon.png" alt=""/>
                    <input className="password-input" type="password"/>
                </form> */}
                <button className="login-button">Login</button>
                <h6>Forgot Username or Password?</h6>
                <a href="">Register</a>
            </div>
        )
    }
}

export default LoginComponent;