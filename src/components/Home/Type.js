import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full Stack Developer",
          "backend enginner" , 
          "Problem Solver",
          "Quick Learner",
          "Team Player",
          "Detail-Oriented",
          "Adaptable",
          "Passionate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
