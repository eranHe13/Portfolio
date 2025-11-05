import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/ResumeNew";

function Home() {
  const [showAllTypes, setShowAllTypes] = useState(false);

  const toggleTypeDisplay = () => {
    setShowAllTypes(!showAllTypes);
  };

  const scrollToResume = () => {
    const resumeElement = document.getElementById('resume');
    if (resumeElement) {
      resumeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Eran Helvitz</strong>
              </h1>

              
              <div style={{ display: "flex", alignItems: "center", gap: "24px", position: "relative" }}>
                <h1 className="heading-name" style={{ marginBottom: 0 }}>
                  I'M
                </h1>
                <div style={{ padding: 0, textAlign: "left", position: "relative" }}>
                  <Type showAllTypes={showAllTypes} />
                  
                  {/* Finger icon and click me text */}
                  <div 
                    style={{ 
                      position: "absolute", 
                      top: "-10px", 
                      right: "-80px", 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#fff",
                      opacity: 0.8
                    }}
                    onClick={toggleTypeDisplay}
                  >
                    <span style={{ fontSize: "16px" }}>👆</span>
                    <span>click me</span>
                  </div>
                </div>
              </div>



              <div 
                className="job-status-badge"
                onClick={scrollToResume}
                style={{ cursor: 'pointer' }}
              >
                <span className="status-icon">💻</span>
                <span className="status-text">Open to Work</span>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            
          </Row>
          <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/eranHe13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ cursor: 'pointer' }}
                  
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eran-helvitz-859707149"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:13eran@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
      <Projects />
      <Resume />
    </section>
  );
}

export default Home;
