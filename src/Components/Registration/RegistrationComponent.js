import React from 'react';

import BackgroundComponent from '../BackgroundComponent';
import SideBarComponent from '../SideBarComponent';
import RegistrationForm from './RegistrationForm';
import '../../Styles/RegistrationComponentStyles.css'; 

const logoStyles = {
    "top": "150px",
    "left": "300px",
    "rotate": "rotate()"
}

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div id="registration-page-container">
                <BackgroundComponent logoStyles={logoStyles}/>
                <SideBarComponent>
                    <RegistrationForm/>
                </SideBarComponent>
            </div>
        )
    }
}

export default RegistrationComponent;