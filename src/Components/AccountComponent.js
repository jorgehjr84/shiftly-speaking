import React from 'react';

import firebase from 'firebase';

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
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
            <div>
                <h1>Account Page</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Account;