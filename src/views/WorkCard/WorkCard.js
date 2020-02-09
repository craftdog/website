import {Col, Row} from "react-grid-system";
import React from 'react';
import './WorkCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WorkCard extends React.Component {
    state = {

    };

    render() {
        return(
            <Col lg={5.9} md={5.8} className="work-card" style={{backgroundColor: this.props.color}}>
                <a href="#read-more" className="link-wrapper">
                    <h3><FontAwesomeIcon icon={this.props.icon} /> {this.props.name}</h3>
                    <p>{this.props.desc}</p>
                    <div className="btn">Read More &rarr;</div>
                </a>
            </Col>
        );
    }
}

export default WorkCard;