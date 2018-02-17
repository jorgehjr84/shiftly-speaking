import React from 'react';

import {Link, Redirect} from 'react-router-dom';
import firebase from 'firebase';
import Alert from '../common/alert';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirectToReferrer: false,
            showInvalidLoginAlert: false
        }
        
        this.login = this.login.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
            .then((result) => {
                console.log("dfsdfsdf" + result);
                console.table(result);
                this.setState({redirectToReferrer: true})
            }).catch((error) => {
                this.setState({
                    showInvalidLoginAlert: true
                }, () => { setTimeout(this.closeAlert, 4000); })
            })
    }

    closeAlert() {
        this.setState({
            showInvalidLoginAlert: false
        })
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
                <Alert 
                show={this.state.showInvalidLoginAlert} 
                color={'#F4B7AB'}
                onClose={this.closeAlert}
                alertMessage="Invalid Email or Password"/>
            </div>
        )
    }
}

export default LoginForm;