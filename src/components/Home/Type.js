import React from "react";
import Typewriter from "typewriter-effect";

function Type({ showAllTypes }) {
  const typeStrings = [
    "Software Developer",
    "AI Engineer",
    "Full Stack Developer",
    "Backend Engineer" , 
    "Problem Solver",
    "Quick Learner",
    "Team Player",
    "Detail-Oriented",
    "Adaptable",
    "Passionate",
  ];

  if (showAllTypes) {
    return (
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "8px",
        fontSize: "1.2em",
        fontWeight: "bold",
        color: "#fff"
      }}>
        {typeStrings.map((type, index) => (
          <div key={index} style={{ 
            padding: "4px 8px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "4px",
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}>
            {type}
          </div>
        ))}
      </div>
    );
  }

  return (
    <Typewriter
      options={{
        strings: typeStrings,
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
