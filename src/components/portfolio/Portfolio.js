import React from "react";
import classes from "./portfolio.module.css";
import projects from "../../data/portfolioData/projectData.json";

function Portfolio() {
  let projectData = projects;
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className={`${classes.container} ${classes.portfolio_container}`}>
        {projectData.map((project) => (
     
          <article className={`${classes.portfolio_item} ${classes.grow}`}>
            <div className={classes.portfolio_item_image}>
              <img src={project.image} alt="d" />
            </div>
            <h3> {project.name}</h3>
            <h3> {project.description}</h3>
            <br />
            <div className={classes.portfolio_item_buttons}>
              <a href={project.github} className="btnx" target={"_blank"} rel="noreferrer">
                {" "}
                github
              </a>
              <a
                href="https://9anime.to/"
                className="btnx btn-primaryx"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
