import React from 'react';

import './commonStyles.css';

class Alert extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if(!this.props.show) {
            return null;
        }
        
        let alertStyle = {
            backgroundColor: this.props.color,
        }

        let iconStyle = {
            height: '40px',
            width: '40px',
        }

        return(
            <div className="alert-modal show" style={alertStyle}>
                <img style={iconStyle} src={require("../../img/errorIcon.png")}/>
                <h5 
                onClick={this.props.onClose}>
                    {this.props.alertMessage}
                </h5>
            </div>
        )
    }
}

export default Alert;