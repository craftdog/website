import React from 'react';
import './Home.css';
import './mast.css';
import './work.css';
import './about.css';
import {Container,Col,Row,Visible} from "react-grid-system";
import Nav from "../../components/Nav/Nav";
import ProfileCard from "../ProfileCard/ProfileCard";
import FeatureCard from "../FeatureCard/FeatureCard";
import WorkCard from "../WorkCard/WorkCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCodeBranch, faPencilRuler, faSitemap } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../Icons/Icon'
import HeaderImage from "../../components/HeaderImage/HeaderImage";

class Home extends React.Component {
    state = {

    };

    render() {
        return(
            <>
                <Nav />
                <section id="mast">
                    <Container>
                        <Row>
                            <Col lg={6} md={7}>
                                <h1>
                                    &mdash;<br />
                                    Hi, we're Craftdog.<br />
                                    We make cool software.
                                </h1>
                                <p>We make cool and usable software. Check out our work and feel free to contact us below.</p>
                                <a href="" className="btn">Contact Us</a>
                                <a href="" className="btn secondary">Check Out Our Work</a>
                            </Col>
                            <Col lg={6} md={5}>
                                <HeaderImage />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="work">
                    <Container style={{position: "relative"}}>
                        <Visible md lg xl>
                         <a href="#our-work" id="scroll-button">&larr; SCROLL</a>
                        </Visible>
                        <div className="feature-card-wrapper">
                            <Row justify="between">
                                <FeatureCard
                                    icon={faPencilRuler}
                                    name="UI/UX Design"
                                    desc="Great software has to be usable. We do our research to ensure our products remain accessible to the most users possible."
                                    photo="https://via.placeholder.com/400x400"
                                />
                                <FeatureCard
                                    icon={faCodeBranch}
                                    name="Development"
                                    desc="Building software requires structure. We strive to create clean and maintainable code that adheres to universal standards."
                                    photo="https://via.placeholder.com/400x400"
                                />
                                <FeatureCard
                                    icon={faSitemap}
                                    name="Product Support"
                                    desc=""
                                    photo="https://via.placeholder.com/400x400"
                                />
                            </Row>
                        </div>
                        <span id="our-work" />
                        <h1>Our Work</h1>
                        <Row  justify="between">
                            <WorkCard />
                            <WorkCard />
                        </Row>
                        <br />
                        <Row  justify="between">
                            <WorkCard />
                            <WorkCard />
                        </Row>
                    </Container>
                </section>
                <section id="about">
                    <Container>
                        <h1>About Us</h1>
                        <h2><Icon fill={"#fff"} style={{height: "1em", width: "auto", marginBottom: "-0.15em", marginRight: "0.15em"}} />Craftdog is a creative partnership founded in 2020</h2>
                            <ProfileCard
                                name="Siraj Chokshi"
                                desc="Siraj is a UX designer and frontend developer. He currently attends the University of Illinois at Urbana-Champaign and applies his coursework in Computer Science, Cognitive Psychology and Design on product design and software development."
                                photo="https://media-exp1.licdn.com/dms/image/C4E03AQH3ZuJUgFiHLw/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=wf-3jubA70o3vg-qkEmrirGpjk3alNYAiCY48BVNOtY"
                                link="https://sirajchokshi.com"
                                skills = {["UI/UX", "Frontend Development", "JavaScript", "React.JS", "Python", "Java", "C#"]}
                                linkedin="sirajchokshi"
                                github="sirajchokshi"
                            />
                            <ProfileCard
                                name="Aaron Alberg"
                                desc="Aaron is currently studying computer science at the University of Illinois at Urbana-Champaign. He's passionate about applying human-centered design principles to projects ranging from software development to community outreach."
                                photo="https://avatars1.githubusercontent.com/u/55102496"
                                skills = {["Software Development", "Java", "Android Studio", "React.JS", "HTML/CSS"]}
                                link="https://aaronalberg.com"
                                linkedin="aaron-alberg"
                                github="aaronalberg"
                            />
                    </Container>
                </section>
                <section id="contact">
                    <Container>
                        <h1>Contact Us</h1>
                    </Container>
                </section>
                <footer>
                    <Container>
                        <p>Copyright &copy; {new Date().getFullYear()}&nbsp;
                            <Icon fill={"#0C041F"} style={{height: "1em", width: "auto", marginBottom: "-0.15em", marginRight: "0.15em"}} /><span style={{fontWeight: 600}}>Craftdog</span>. Made with <FontAwesomeIcon color={"#EF5454"} icon={faHeart} /> in Chicago &times; Boston
                        </p>
                    </Container>
                </footer>
            </>
        );
    }
}

export default Home;