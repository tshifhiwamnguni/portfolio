import React from "react";

import ME from "./../../assets/mee.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import classes from './about.module.css'
import AboutCard from "../sub_componants/about_card/AboutCard";
function About() {
  return (
    <section id="about">
      <h5> get to know </h5>
      <h2> about me</h2>
      <div className={`${classes.container} ${classes.about_container}`}>
        <div className={classes.about_me}>
          <div className={classes.about_me_image}>
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className={classes.about_content}>
          <div className={classes.about_cards} >

            <AboutCard title={'experience'} data={'1 year 6 months experience'}>
              <FaAward className={classes.about_icon} />
            </AboutCard>

            <AboutCard title={'Clients'} data={'4 clients'}>
              <FiUser className={classes.about_icon} />
            </AboutCard>

            <AboutCard title={'Projects'} data={'5 completed projects'}>
              <VscFolderLibrary className={classes.about_icon} />
            </AboutCard>


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
