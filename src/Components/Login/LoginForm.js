import React from 'react';

import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="login-form">
                <input placeholder="Username" type="text"/>
                <input placeholder="Password" type="password"/>
                <button>Login</button>
                <Link to='/registration'>New? Register</Link>
            </div>
        )
    }
}

export default LoginForm;