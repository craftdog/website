import React from 'react';
import './Home.css';
import './mast.css';
import './work.css';
import './about.css';
import {Container,Col,Row} from "react-grid-system";
import Nav from "../../components/Nav/Nav";
import WireframeImage from "../../assets/wireframe.png";
import ProfileCard from "../ProfileCard/ProfileCard";
import FeatureCard from "../FeatureCard/FeatureCard";
import WorkCard from "../WorkCard/WorkCard";

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
                                <img src={WireframeImage} style={{width: "100%"}} alt=""/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="work">
                    <Container style={{position: "relative"}}>
                        <a href="#our-work" id="scroll-button">&larr; SCROLL</a>
                        <div className="feature-card-wrapper">
                            <Row justify="between">
                                <FeatureCard
                                    name="App Development"
                                    desc="Siraj is a UX designer and frontend developers Cognitive Psychology, Computer Science and Design."
                                    photo="https://via.placeholder.com/400x300"
                                />
                                <FeatureCard
                                    name="UI/UX Design"
                                    desc="Siraj is a UX designer and frontend developers Cognitive Psychology, Computer Science and Design."
                                    photo="https://via.placeholder.com/400x300"
                                />
                                <FeatureCard
                                    name="Web Development"
                                    desc="Siraj is a UX designer and frontend developers Cognitive Psychology, Computer Science and Design."
                                    photo="https://via.placeholder.com/400x300"
                                />
                            </Row>
                        </div>
                        <h1 id="our-work">Our Work</h1>
                        <Row>
                            <WorkCard />
                            <WorkCard />
                        </Row>
                        <br />
                        <Row>
                            <WorkCard />
                            <WorkCard />
                        </Row>
                    </Container>
                </section>
                <section id="about">
                    <Container>
                        <h1>About Us</h1>
                        <h2>Craftdog is a creative partnership between University of Illinois students Siraj Chokshi and Aaron Alberg</h2>
                        <Row justify="around">
                            <ProfileCard
                                name="Siraj Chokshi"
                                desc="Siraj is a UX designer and frontend developer. He currently attends the University of Illinois and applies his coursework in Computer Science, Cognitive Psychology and Design with product design and software development."
                                photo="https://via.placeholder.com/400x300"
                            />
                            <ProfileCard
                                name="Aaron Alberg"
                                desc="Aaron is currently studying computer science at the University of Illinois at Urbana-Champaign. He's passionate about applying human-centered design principles to projects ranging from software development to community outreach."
                                photo="https://via.placeholder.com/400x300"
                            />
                        </Row>
                    </Container>
                </section>
                <section id="contact">
                    <Container>
                        <h1>Contact Us</h1>
                    </Container>
                </section>
                <footer>
                    <Container>
                        <p>Copyright &copy; {new Date().getFullYear()} Craftdog. Made with &heart; in Chicago &times; Boston</p>
                    </Container>
                </footer>
            </>
        );
    }
}

export default Home;