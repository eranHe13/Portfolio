import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../../Assets/hero_img.jpg";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Technology has always been my way of creating, exploring, and solving problems. Over the years I've grown from writing small scripts into building full applications that combine web development, data science, and artificial intelligence.
              <br />
              <br />
              I work with <i><b className="purple">Python, JavaScript, C++, and SQL</b></i>, and I enjoy moving smoothly between backend logic, databases, and modern frontends with <b className="purple">React and Node.js</b>. For me, development is about turning an idea into a product that people can actually use and enjoy.
              <br />
              <br />
              What excites me most is <i><b className="purple">AI and Machine Learning</b></i>. I love experimenting with models, analyzing data, and finding ways to bring intelligent features into real applications—whether it's making predictions, improving user experiences, or uncovering patterns that weren't obvious before.
              <br />
              <br />
              Some of the things I like to build:
              <br />
              <br />
              <i>
                <b className="purple">Web platforms</b> that are responsive, scalable, and easy to use.
                <br />
                <b className="purple">AI-driven solutions</b> that make software smarter.
                <br />
                <b className="purple">Data tools</b> that help transform raw numbers into clear insights.
              </i>
              <br />
              <br />
              I see every project as a chance to learn something new and push myself forward. My portfolio is a collection of that journey—projects that reflect both my technical skills and my curiosity for innovation.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="avatar-container">
              <img src={heroImg} className="img-fluid rounded-circle" alt="avatar" />
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
