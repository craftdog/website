import {Col, Row} from "react-grid-system";
import React from 'react';
import './WorkCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WorkCard extends React.Component {
    state = {

    };

    render() {
        return(
                <Col md={6}>
                    <div className="work-card" style={{backgroundColor: this.props.color}}>
                    <a href={this.props.link !== "" ? this.props.link : false} className="link-wrapper">
                        <h3><FontAwesomeIcon icon={this.props.icon} /> {this.props.name}</h3>
                        <p>{this.props.desc}</p>
                        {this.props.link !== "" ? (<div className="btn" style={{color: this.props.color}}>Read More &rarr;</div>) : <></>}
                    </a>
                    </div>
                </Col>
        );
    }
}

export default WorkCard;