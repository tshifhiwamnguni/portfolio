import React from "react";
import classes from "./experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import frontendSkills from "../../data/xpData/frontend.json";
import backendSKills from '../../data/xpData/backend.json'
import databaseSkills from '../../data/xpData/database.json'
function Experience() {
  let frontendData = frontendSkills;
  let backendData = backendSKills
  let databaseData = databaseSkills
  return (
    <section id="experience">
      <h5>what skills do i have?</h5>
      <h2>My experience</h2>
      <div className={`${classes.container} ${classes.experience_container}`}>
        <div className={classes.frontend}>
          <h3> frontend development</h3>
          <div className={classes.experience_content}>
            {frontendData.map((skill) => (
              <article>
                <div className={classes.experience_details}>
                  <BsPatchCheckFill className={classes.experience_icon} />

                  <h4>{skill.skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={classes.backend}>
          <h3> backend development</h3>
          <div className={classes.experience_content}>
            {backendData.map((skill)=>(
                 <article>
              <div className={classes.experience_details}>
                <BsPatchCheckFill className={classes.experience_icon} />
                <h4>{skill.skill}</h4>
              </div>
            </article>
            ))}
          </div>
        </div>

        <div className={classes.frontend}>
          <h3> Database </h3>
          <div className={classes.experience_content}>
            {databaseData.map((skill) => (
              <article>
                <div className={classes.experience_details}>
                  <BsPatchCheckFill className={classes.experience_icon}/>
                  <h4>{skill.skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
