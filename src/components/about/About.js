import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaHandPointRight} from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import classes from "./about.module.css";
import AboutCard from "../sub_componants/about_card/AboutCard";


function About() {
  return (
    <section id="about">
    
      <h2 className="headings"> <span className="names">About me</span></h2>
      <div className={`${classes.container} ${classes.about_container}`}>
        <div className={classes.about_content}>
          <div className={classes.about_cards}>
            <AboutCard title={"experience"} data={"1 year 6 months experience"}>
              <FaAward className={classes.about_icon} />
            </AboutCard>

            <AboutCard title={"Clients"} data={"4 clients"}>
              <FiUser className={classes.about_icon} />
            </AboutCard>

            <AboutCard title={"Projects"} data={"5 completed projects"}>
              <VscFolderLibrary className={classes.about_icon} />
            </AboutCard>
          </div>
          <div className="card-profile-heading">
            <span className="names"> Know Who I'M</span>
   
          </div>
          <div className="card-profile-details">
          I am a multi-disciplinary creative professional with a passion for digital marketing channels and design. At a young age I got involved in multiple projects around personal and corporate communication and branding, including my Digital Marketing Youtube channel with over 1K subscribers. These projects have allowed me to develop a deep knowledge and understanding of how the main marketing channels work, as well as applying a wide range of skills like illustration, photo and video editing, motion graphics, etc. With a year of experience in the retail industry and about to finish my double major in English and Scenic art studies, I am currently looking for a creative digital marketing position where I can be involved in the campaign design and strategy process in order to kickstart my career in the advertising industry.
          </div>
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
