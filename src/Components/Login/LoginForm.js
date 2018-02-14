import React from 'react';

import {Link, Redirect} from 'react-router-dom';
import firebase from 'firebase';
import auth from '../../App';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirectToReferrer: false
        }

        this.login = this.login.bind(this);
    }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(() => {
                this.setState({redirectToReferrer: true})
            });
    }

    render() {
        const {redirectToReferrer} = this.state;

        return(
            <div className="login-form">
            {
                (redirectToReferrer) ?
                    <Redirect to='/account'/>
                :
                    ''
            }
                <input ref={email => this.email = email} placeholder="Email" type="text"/>
                <input ref={password => this.password = password} placeholder="Password" type="password"/>
                <button onClick={this.login}>Login</button>
                <Link to='/registration'>New? Register</Link>
            </div>
        )
    }
}

export default LoginForm;