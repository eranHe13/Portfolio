import React from "react";
import basketballIcon from "../../Assets/basketball-illustration-5-svgrepo-com.svg";
import techReadingIcon from "../../Assets/code-tech-dev-svgrepo-com.svg";
import travelingIcon from "../../Assets/travelling-by-airplane-around-the-earth-svgrepo-com.svg";
import snowboardingIcon from "../../Assets/snowboard-svgrepo-com.svg";
import divingIcon from "../../Assets/diving-3-svgrepo-com.svg";
import chessIcon from "../../Assets/chess-svgrepo-com.svg";
import dancingIcon from "../../Assets/dancing-motion-svgrepo-com.svg";

function HobbiesStack() {
  const hobbies = [
    { name: "Basketball", icon: basketballIcon },
    { name: "Tech Reading", icon: techReadingIcon },
    { name: "Traveling", icon: travelingIcon },
    { name: "Snowboarding", icon: snowboardingIcon },
    { name: "Diving", icon: divingIcon },
    { name: "Chess", icon: chessIcon },
    { name: "Dancing", icon: dancingIcon }
  ];

  return (
    <>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Some of my <strong className="purple">Hobbies</strong>
      </h1>
      
      <div className="hobbies-container">
        <div className="hobbies-row">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-item">
              <div className="hobby-icon">
                <img 
                  src={hobby.icon}
                  alt={hobby.name}
                  className="hobby-svg"
                />
              </div>
              <span className="hobby-name">{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HobbiesStack;
