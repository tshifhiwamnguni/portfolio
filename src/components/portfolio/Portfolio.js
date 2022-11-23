import React from "react";
import classes from "./portfolio.module.css";
import projects from "../../data/portfolioData/projectData.json";
import ProjectCard from "../sub_componants/project_card/ProjectCard";

function Portfolio() {
  let projectData = projects;
  return (
    <section id="portfolio">
      
      <h2 className="headings">Portfolio</h2>
      <div className={`${classes.container} ${classes.portfolio_container}`}>
        {projectData.map((project) => (
         <ProjectCard project={project}/>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
