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
        this.logout = this.logout.bind(this);
    }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(() => {
                this.setState({redirectToReferrer: true})
            });
    }

    logout() {
        firebase.auth().signOut().then(() => {
            console.log("Signed Out") 
          }).catch(function(error) {
            // An error happened.
          });
    }

    render() {
        return(
            <div className="login-form">
            <button onClick={this.logout}>Logout</button>
                <input ref={email => this.email = email} placeholder="Email" type="text"/>
                <input ref={password => this.password = password} placeholder="Password" type="password"/>
                <button onClick={this.login}>Login</button>
                <Link to='/registration'>New? Register</Link>
                {
                    (console.log(this.state.redirectToReferrer))
                }
                {
                    (this.state.redirectToReferrer) ?
                        <Redirect to={'/account'}/>
                    :
                        <Redirect to={'/'}/>
                }
            </div>
        )
    }
}

export default LoginForm;