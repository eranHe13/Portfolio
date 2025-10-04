import React from "react";
import Card from "react-bootstrap/Card";
import basketballIcon from "../../Assets/basketball-illustration-5-svgrepo-com.svg";
import techReadingIcon from "../../Assets/code-tech-dev-svgrepo-com.svg";
import travelingIcon from "../../Assets/travelling-by-airplane-around-the-earth-svgrepo-com.svg";
import snowboardingIcon from "../../Assets/snowboard-svgrepo-com.svg";
import divingIcon from "../../Assets/diving-3-svgrepo-com.svg";
// import vinylIcon from "../../Assets/vinyl-player-svgrepo-com.svg";
import chessIcon from "../../Assets/chess-svgrepo-com.svg";
import dancingIcon from "../../Assets/dancing-motion-svgrepo-com.svg";

function AboutCard() {
  const hobbies = [
    { name: "Basketball", icon: basketballIcon },
    { name: "Tech Reading", icon: techReadingIcon },
    { name: "Traveling", icon: travelingIcon },
    { name: "Snowboarding", icon: snowboardingIcon },
    { name: "Diving", icon: divingIcon },
    // { name: "Vinyl Collecting", icon: "../../Assets/vinyl-player-svgrepo-com.svg" },
    { name: "Chess", icon: chessIcon },
    { name: "Dancing", icon: dancingIcon }
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, my name is <span className="purple">Eran Helvitz</span>.
            <br />
            I work as a Software Engineer, AI Engineer, and Full Stack Developer, with strong experience in modern web technologies, data-driven systems, and intelligent applications.
            <br />
            I hold a BSc in Computer Science from Tel Hai Academic College, where I built the foundation for my work in software development and artificial intelligence.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Building innovative solutions that make a real impact!"{" "}
          </p>
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
