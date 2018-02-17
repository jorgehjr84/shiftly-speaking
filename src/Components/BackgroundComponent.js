import React from 'react';

import "../Styles/BackgroundComponentStyles.css";

class BackgroundComponent extends React.Component {

    render() {
        const logoStyles = this.props.logoStyles;

        return(
            <div id="background-component">
                <div 
                className="logo"
                style={{top: logoStyles.top, left: logoStyles.left, transform: logoStyles.rotate}}></div>
            </div>
        )
    }
}

export default BackgroundComponent;
