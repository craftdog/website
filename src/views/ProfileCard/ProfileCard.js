import React from 'react';
import {Row,Col} from "react-grid-system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons/";

class ProfileCard extends React.Component {
    state = {

    };

    render() {
        return(
            <Row className="profile-card">
                <Col md={2} style={{padding: "0"}}>
                    <img src={this.props.photo} alt=""/>
                </Col>
                <Col md={9} className="info-wrapper" style={{paddingBottom: "20px"}}>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                    {/* <ul className="skills">
                        Skills:&nbsp;&nbsp;
                        {(this.props.skills).map(skill => <li key={skill}> {skill} </li>)}
                    </ul> */}
                    <a href={this.props.link} className="bio-link" target="_blank"><FontAwesomeIcon icon={faLink} /> Website</a>
                    <a href={"https://linkedin.com/in/" + this.props.linkedin} className="bio-link" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                    <a href={"https://github.com/" + this.props.github} className="bio-link" target="_blank"><FontAwesomeIcon icon={faGithubAlt} /> Github</a>
                </Col>
            </Row>
        );
    }
}

export default ProfileCard;