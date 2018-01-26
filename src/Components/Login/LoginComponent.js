import React from 'react';

import '../../Styles/LoginComponentStyles.css';
import BackgroundComponent from '../BackgroundComponent';
import SideBarComponent from '../SideBarComponent';
import LoginForm from './LoginForm';

const logoStyles = {
    "top": "150px",
    "left": "300px",
    "rotate": "rotate()"
}

class LandingPageComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: true
        }
    }

    render() {
        return(
            <div id="login-container">
                <BackgroundComponent logoStyles={logoStyles}/>
                <SideBarComponent>
                    <LoginForm />
                </SideBarComponent>
            </div>
        )
    }
}

export default LandingPageComponent;