import React from 'react';

import LoginComponent from '../LoginComponent';
import RegistrationComponent from '../RegistrationComponent';
import './landingStyles.css';
import BackgroundComponent from '../BackgroundComponent';
import SideBarComponent from '../SideBarComponent';


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
            <div id="landing-page-container">
                <BackgroundComponent logoStyles={logoStyles}/>
                <SideBarComponent />
            </div>
        )
    }
}

export default LandingPageComponent;