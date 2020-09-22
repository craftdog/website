import React from 'react';
import {Col} from "react-grid-system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FeatureCard.css';
// import sal from 'sal.js';
// sal({
//     threshold: 1,
//     once: true
// });

class FeatureCard extends React.Component {
    state = {

    };

    render() {
        return(
            <Col lg={3.8} className="feature-card">
                <span className="feature-icon"><FontAwesomeIcon icon={this.props.icon} /></span>
                <h3>{this.props.name}</h3>
                <p>{this.props.desc}</p>
            </Col>
        );
    }
}

export default FeatureCard;