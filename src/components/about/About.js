import React from "react";

import ME from "./../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import classes from './about.module.css'
function About() {
  return (
    <section id="about">
      <h5> get to know </h5>
      <h2> about me</h2>
      <div className={`${classes.container} ${classes.about_container}`}>
        <div className={classes.about_me}>
          <div className={classes.about_me_image}>
            <img src={ME} alt="About image"/>
          </div>
        </div>

        <div className={classes.about_content}>
          <div className={classes.about_cards} >
            <article className={classes.about_card}>
                <div className={classes.center_icon}>
              <FaAward className={classes.about_icon} />
              </div>
           
              <h5> experience</h5>
              <small> 1 year 6 months experience</small>
            
            </article>

            <article className={classes.about_card}>
            <div className={classes.center_icon}>
              <FiUser className={classes.about_icon} />
              </div>
              <h5> Clients</h5>
              <small> 4 clients</small>
            </article>

            <article className={classes.about_card}>
            <div className={classes.center_icon}>
              <VscFolderLibrary className={classes.about_icon} />
            </div>
              <h5> Projects</h5>
              <small> 5 completed projects</small>
            </article>
            
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularized in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <br />
          <a href="#contact" className="btnx btn-primaryx">
            {" "}
            let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
