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
                <RegistrationComponent />
            </div>
        )
    }
}

export default SideBarComponent;