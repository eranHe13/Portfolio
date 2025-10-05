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
      title: "Productivity Agent",
      description: "Boost your productivity with an all-in-one management system that helps you organize tasks, track your focus, and receive personalized AI coaching. Interact naturally through a REST API or Telegram bot, set daily goals, and stay motivated with intelligent reminders and contextual advice. Achieve more every day with seamless, AI-powered assistance tailored to your workflow.",
      ghLink: "https://github.com/eranHe13/productivity-agent",
      techStack: [
        "Python",
        "FastAPI",
        "SQLAlchemy", 
        "LangChain",
        "OpenAI GPT",
        "Telegram Bot API",
        "SQLite",
        "Pydantic",
        "Uvicorn"
      ]
    },
    {
      isBlog: false,
      title: "Artist Hub",
      description: "Discover a streamlined platform for artists and event organizers to connect, manage profiles, and handle bookings with ease. Enjoy secure authentication, real-time chat, calendar integration, and a user-friendly interface that makes managing your creative business effortless. Artist Hub brings your professional network and opportunities together in one place.",
      ghLink: "https://github.com/eranHe13/artisthub",
      siteLink: "https://artisthub.art/",
      techStack: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Google OAuth2",
        "JWT",
        "Vercel",
        "Fly.io",
        "Neon"
      ]
    },
    {
      isBlog: false,
      title: "Fleet Simulation System",
      description: "Experience the power of simulation with a dynamic system that models the real-time interaction between vehicles and warehouses. Command your fleet, manage inventory, and optimize logistics in a robust, scalable environment. Perfect for exploring logistics strategies and understanding complex supply chain dynamics.",
      ghLink: "https://github.com/eranHe13/fleet-simulation",
      techStack: [
        "C++",
        "MVC Pattern",
        "Object-Oriented Programming",
        "Simulation",
        "Logistics",
        "Optimization"
      ]
    },
    {
      isBlog: false,
      title: "Wine Price Tracker",
      description: "Stay ahead of the market with a smart web app that monitors wine prices and alerts you to the best deals. Get real-time updates, set personalized price alerts, and receive notifications directly to your inbox. The intuitive dashboard makes it easy to track your favorite wines and never miss a price drop.",
      ghLink: "https://github.com/eranHe13/wine-price-tracker",
      techStack: [
        "Python",
        "FastAPI",
        "React.js",
        "SQL",
        "Multithreading",
        "Web Scraping",
        "Email Notifications",
        "Price Tracking"
      ]
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
                techStack={project.techStack}
              />
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
