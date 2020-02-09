import {Col, Row} from "react-grid-system";
import React from 'react';
import './WorkCard.css';

class WorkCard extends React.Component {
    state = {

    };

    render() {
        return(
            <Col lg={5.9} md={5.8} className="work-card">
                <img src={this.props.photo} style={{width: "100%"}} alt=""/>
                <span className="gutter-wrapper">
                    <h3>{this.props.name}Train Tracker</h3>
                    <p>{this.props.desc}A progressive web app to monitor and find CTA trains near you.</p>
                    <a href="" className="btn">Link</a>
                </span>
            </Col>
        );
    }
}

export default WorkCard;