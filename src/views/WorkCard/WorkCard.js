import {Col, Row} from "react-grid-system";
import React from 'react';
import './WorkCard.css';

class WorkCard extends React.Component {
    state = {

    };

    render() {
        return(
            <Col md={5.5} className="work-card">
                {/*<img src={this.props.photo} style={{width: "100%"}} alt=""/>*/}
                {/*<span className="gutter-wrapper">*/}
                {/*    <h3>{this.props.name}</h3>*/}
                {/*    <p>{this.props.desc}</p>*/}
                {/*</span>*/}
            </Col>
        );
    }
}

export default WorkCard;