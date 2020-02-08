import {Col} from "react-grid-system";
import React from 'react';

class ProfileCard extends React.Component {
    state = {

    };

    render() {
        return(
            <Col sm={5.5} class="profile-card">
                <img src={this.props.photo} style={{width: "100%"}} alt=""/>
                <span className="gutter-wrapper">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                </span>
            </Col>
        );
    }
}

export default ProfileCard;