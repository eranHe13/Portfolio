import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      
      isBlog: false,
      title: "AI Agent",
      description: "An intelligent helper agent built with Telegram Bot API and LangChain framework. Features mission management, event tracking, and automated data summarization capabilities. The bot provides personalized assistance through natural language processing, helping users organize tasks, track events, and generate comprehensive summaries from various data sources. Built with Python, utilizing advanced AI/ML libraries for conversational AI and data processing.",
      ghLink: "https://github.com/eranHe13/my-agent",
      

    },
    {
      
      isBlog: false,
      title: "Artist Hub",
      description: "Platform for managing artist profiles and bookings, with a focus on backend development. Built with FastAPI, Python, SQLAlchemy, PostgreSQL backend and Next.js, React, TypeScript, Tailwind CSS frontend. Deployed on Vercel and Fly.io, using Neon database. Features include Google OAuth2 with JWT security, RESTful API, calendar integration, and real-time chat.",
      ghLink: "https://github.com/eranHe13/artisthub",
      siteLink: "https://artisthub.art/"

    },
    {
      
      isBlog: false,
      title: "Fleet Simulation System",
      description: "A C++ project utilizing the Model-View-Controller (MVC) pattern to simulate the dynamic interaction between vehicles and warehouses. The system applies object-oriented principles, custom user commands, and robust error handling to create a scalable simulation environment. Features include real-time vehicle movement and inventory management, demonstrating experience with logistics and optimization.",
      ghLink: "https://github.com/eranHe13/fleet-simulation"
    },
    {
      
      isBlog: false,
      title: "Wine Price Tracker",
      description: "A web application built with Python (FastAPI), React.js, and SQL to monitor and alert users about wine price fluctuations. The backend employs multithreading for real-time data scraping from multiple retailers, while the frontend provides a responsive interface for managing preferences, setting price alerts, and receiving email notifications.",
      ghLink: "https://github.com/eranHe13/wine-price-tracker"
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <div className="json-projects-container">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="json-project-wrapper"
            >
              <ProjectCard
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                siteLink={project.siteLink}
              />
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
