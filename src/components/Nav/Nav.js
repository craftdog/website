import React from "react";
import "./Nav.css";
import { Container } from "react-grid-system";
import WhiteLogo from "../../assets/logo_white.svg";

class Nav extends React.Component {
  state = {};

  render() {
    return (
      <nav>
        <Container>
          <div className="inner">
            <a href="" id="logo">
              <img src={WhiteLogo} alt="logo" />
            </a>
            <a href="#contact" className="btn">
              Contact Us
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#our-work" className="nav-link">
              Our Work
            </a>
          </div>
        </Container>
      </nav>
    );
  }
}

export default Nav;
