import React from 'react';

import "../Styles/SideBarComponentStyles.css";

class SideBarComponent extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props.component);
        return(
            <div id="side-bar-container">
                <div className="mobile-owl-image-wrapper">
                    <div className="mobile-owl-image"></div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default SideBarComponent;