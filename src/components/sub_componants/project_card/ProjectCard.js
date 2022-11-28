import React from 'react'
import classes from './ProjectCard.module.css'

function ProjectCard(props) {
  return (
    
    <article className={`${classes.portfolio_item} ${classes.grow}`}>
    <div className={classes.portfolio_item_image}>
      <img src={props.project.image} className={classes.imgs} alt="d" />
    </div>
    <h3> {props.project.name}</h3>
    <h3> {props.project.description}</h3>
    <br />
    <div className={classes.portfolio_item_buttons}>
      <a href={props.project.github} className="btnx" target={"_blank"} rel="noreferrer">
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
  )
}

export default ProjectCard