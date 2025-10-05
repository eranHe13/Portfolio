import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const techStack = props.techStack || [];

  return (
    <div className="json-project-card">
      <div className="json-header">
        <span className="json-key">project</span>
        <span className="json-colon">:</span>
        <span className="json-string">"{props.title}"</span>
        <span className="json-comma">,</span>
      </div>
      
      <div className="json-content">
       

        <div className="json-line">
          <span className="json-key">  description</span>
          <span className="json-colon">:</span>
          <span className="json-string">"{props.description}"</span>
          <span className="json-comma">,</span>
        </div>

        <div className="json-line">
          <span className="json-key">  techStack</span>
          <span className="json-colon">:</span>
          <span className="json-bracket">[</span>
        </div>
        
         <div className="json-line">
           {techStack.map((tech, index) => (
             <span key={index}>
               <span className="json-string">    "{tech}"</span>
               {index < techStack.length - 1 && <span className="json-comma">, </span>}
             </span>
           ))}
         </div>
        
        <div className="json-line">
          <span className="json-bracket">  ]</span>
          <span className="json-comma">,</span>
        </div>

        <div className="json-line">
          <span className="json-key">  links</span>
          <span className="json-colon">:</span>
          <span className="json-bracket">{`{`}</span>
        </div>

        <div className="json-line">
          <span className="json-key">    github</span>
          <span className="json-colon">:</span>
          <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="json-link">
            <BsGithub className="json-icon" />
            <span className="json-string">"{props.isBlog ? "Blog" : "GitHub"}"</span>
          </a>
          <span className="json-comma">,</span>

        </div>
        {props.siteLink && (
        <div className="json-line">
          <span className="json-key">    Website</span>
          <span className="json-colon">:</span>
          <a href={props.siteLink} target="_blank" rel="noopener noreferrer" className="json-link">
            <CgWebsite className="json-icon" />
            <span className="json-string">"Website"</span>
          </a>
          <span className="json-comma">,</span>
        </div>
        )}

        <div className="json-line">
          <span className="json-bracket">{`}`}</span>
        </div>
      </div>
      
      <div className="json-footer">
        <span className="json-bracket">{`}`}</span>
      </div>
    </div>
  );
}

export default ProjectCards;
