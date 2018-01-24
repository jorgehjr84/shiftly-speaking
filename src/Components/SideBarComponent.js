import React from 'react';

import RegistrationComponent from './RegistrationComponent';
import LoginComponent from './LoginComponent';

import "../Styles/SideBarComponentStyles.css";

class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div id="side-bar-container">
                <div className="mobile-owl-image-wrapper">
                    <div className="mobile-owl-image"></div>
                </div>
                <RegistrationComponent />
            </div>
        )
    }
}

export default SideBarComponent;