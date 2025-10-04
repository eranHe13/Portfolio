import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiFastapi,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiFigma,
  SiOpenai,
} from "react-icons/si";

import SiFlydotio from "../../Assets/icons-fly.io.svg"
import SiCursor from "../../Assets/icons-cursor-ai.svg"
import SiClaude from "../../Assets/icons-claude-ai.svg"

function Techstack() {
  const languages = [
    { name: "C++", icon: <CgCPlusPlus /> },
    { name: "Java", icon: <DiJava /> },
    { name: "Python", icon: <DiPython /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
  ];

  const frameworks = [
    { name: "React", icon: <DiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Fly.io", icon: <img src={SiFlydotio} /> },   
    { name: "Git", icon: <DiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
  ];

  const tools = [
    { name: "Visual Studio Code", icon: <SiVisualstudiocode /> },
    { name: "Cursor", icon: <img src={SiCursor} /> }, 
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "ChatGPT", icon: <SiOpenai /> },
    { name: "Claude AI", icon: <img src={SiClaude} /> }, 
  ];

  return (
    <div className="hobbies-container">
      <h1 className="project-heading">
        Languages <strong className="purple">I use</strong>
      </h1>
      <br />
      <div className="hobbies-row">
        {languages.map((tech, index) => (
          <div key={index} className="hobby-item">
            <div className="hobby-icon">
              <div className="tech-icon-wrapper">
                {tech.icon}
              </div>
            </div>
            <span className="hobby-name">{tech.name}</span>
          </div>
        ))}
      </div>
      <br />
      <h1 className="project-heading">
        Frameworks & Technologies <strong className="purple">I use</strong>
      </h1>
      <br />
      <div className="hobbies-row">
        {frameworks.map((tech, index) => (
          <div key={index} className="hobby-item">
            <div className="hobby-icon">
              <div className="tech-icon-wrapper">
                {tech.icon}
              </div>
            </div>
            <span className="hobby-name">{tech.name}</span>
          </div>
        ))}
      </div>
      <br />
      <h1 className="project-heading">
        Tools <strong className="purple">I use</strong>
      </h1>
      <br />
      <div className="hobbies-row">
        {tools.map((tech, index) => (
          <div key={index} className="hobby-item">
            <div className="hobby-icon">
              <div className="tech-icon-wrapper">
                {tech.icon}
              </div>
            </div>
            <span className="hobby-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;
