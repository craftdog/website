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
import { faHeart, faCodeBranch, faPencilRuler, faSitemap, faSubway, faMapMarkedAlt, faQrcode, faQuestionCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
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
                                    <span className="dash">&mdash;<br /></span>
                                    Hi, we're Craftdog.<br />
                                    We make cool software.
                                </h1>
                                <p>We make cool and usable software. Check out our work and feel free to contact us below.</p>
                                <a href="#contact" className="btn">Contact Us</a>
                                <a href="#work" className="btn secondary">Check Out Our Work</a>
                            </Col>
                            <Col lg={6} md={5}>
                                <HeaderImage />
                            </Col>
                        </Row>
                    </Container>
                    <div id="clip" />
                </section>
                <section id="work">
                    <Container style={{position: "relative"}}>
                        <Visible lg xl>
                         <a href="#our-work" id="scroll-button">&larr; SCROLL</a>
                        </Visible>
                        <div className="feature-card-wrapper">
                            <Row justify="between" >
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
                                    desc="Great software has to be usable. We do our research to ensure our products remain accessible to the most users possible."
                                    photo="https://via.placeholder.com/400x400"
                                />
                            </Row>
                        </div>
                        <span id="our-work" />
                        <h1>Our Work</h1>
                        <Row justify="between">
                            <WorkCard
                                icon={faSubway}
                                name="L-Scout"
                                desc="An installable progressive web app build to allow you to easily monitor and find nearby CTA trains."
                                color="var(--blue)"
                                link="#lscout"
                            />
                            <WorkCard
                                icon={faMapMarkedAlt}
                                name="Illini Tours"
                                desc="An augmented reality game to engagingly introduce new and prospective students to the UIUC campus."
                                color="var(--yellow)"
                                link="#illinitours"
                            />
                        </Row>
                        <br id="break-work" style={{marginTop: "5px"}} />
                        <Row justify="between">
                            <WorkCard
                                icon={faQrcode}
                                name="Confer"
                                desc="An open-source SaaS and client to manage student run hackathons/conferences."
                                color="var(--green)"
                                link="https://github.com/craftdog/confer"
                            />
                            <WorkCard
                                icon={faQuestionCircle}
                                name="Coming Soon"
                                desc="We're always bouncing around ideas. Check back here later and something may have popped up."
                                color="grey"
                                link=""
                            />
                        </Row>
                    </Container>
                </section>
                <section id="about">
                    <Container>
                        <h1>About Us</h1>
                        <h2>
                            <Icon fill={"#fff"} style={{height: "1em", width: "auto", marginBottom: "-0.15em", marginRight: "0.15em"}} />
                            Craftdog is a creative partnership founded in 2020
                        </h2>
                        <p>
                            We are two University of Illinois students applying our studies in the areas of
                            <span style={{color: "var(--magenta)", fontWeight: 600}}> software engineering</span>,
                            <span style={{color: "var(--blue)", fontWeight: 600}}> design thinking</span> and&nbsp;
                            <span style={{color: "var(--yellow)", fontWeight: 600}}>creative problem solving</span>.
                        </p>
                            <ProfileCard
                                name="Siraj Chokshi"
                                desc="Siraj is a software engineer with a design background. He currently attends the University of Illinois at Urbana-Champaign and applies his coursework in Computer Science, Cognitive Psychology and Design in product design and software development."
                                photo="https://media-exp1.licdn.com/dms/image/C4E03AQH3ZuJUgFiHLw/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=q-9Z_1CXHCutJDA9v2uc2W12WcUj4CHQw3DJU206qAw"
                                link="https://sirajchokshi.com"
                                skills = {["JavaScript/TypeScript", "Python", "C#", "Go", "Java", "Software Development"]}
                                linkedin="sirajchokshi"
                                github="sirajchokshi"
                            />
                            <ProfileCard
                                name="Aaron Alberg"
                                desc="Aaron is currently studying computer science at the University of Illinois at Urbana-Champaign. He's passionate about applying human-centered design principles to projects ranging from software development to community outreach."
                                photo="https://avatars1.githubusercontent.com/u/55102496"
                                skills = {["Java", "C++", "C#", "JavaScript", "Python", "Software Development"]}
                                link="https://aaronalberg.com"
                                linkedin="aaron-alberg"
                                github="aaronalberg"
                            />
                    </Container>
                </section>
                <section id="contact">
                    <Container>
                        <h1>Contact Us</h1>
                        <ul>
                            <li><a href="mailto:mail@craftdog.dev" style={{color: "var(--blue)"}}><FontAwesomeIcon icon={faPaperPlane} /> mail@craftdog.dev</a></li>
                            <li><a href="https://github.com/craftdog" target="_blank" rel="noreferrer noopener" style={{color: "var(--dark-color)"}}><FontAwesomeIcon icon={faGithub} /> Github</a></li>
                            <li><a href="https://dribbble.com/sirajchokshi" style={{color: "var(--magenta)"}}><FontAwesomeIcon icon={faDribbble} /> Dribbble</a></li>
                            <li><a href="" style={{color: "var(--green)"}}><FontAwesomeIcon icon={faMedium} /> Medium</a></li>
                        </ul>
                    </Container>
                </section>
                <footer>
                    <Container>
                        <Icon fill={"#86868f"} style={{height: "1.6em", width: "auto", marginBottom: 0}} />
                        <p>Copyright &copy; {new Date().getFullYear()}&nbsp;
                            {/*<Icon fill={"rgb(90, 72, 216)"} style={{height: "1em", width: "auto", marginBottom: "-0.075em", marginRight: "0.15em"}} />*/}
                            Craftdog. Made with <FontAwesomeIcon color={"var(--red)"} icon={faHeart} /> in Chicago &times; Boston
                        </p>
                    </Container>
                </footer>
            </>
        );
    }
}

export default Home;