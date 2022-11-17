import React from "react";
import classes from "./Services.module.css";
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id="service">
      <h5>what i offer</h5>
      <h2>Services</h2>

      <div
        className={`${classes.container} ${classes.services_container}`}
      >
            <article className={classes.service}>
                <div className={classes.service_head}>
                    <h3> web development</h3>
                    </div>
                    <ul className={classes.service_list}>
                        <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Website design and building</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Directing or performing Website updates.</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Editing, writing, or designing Website content</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p>Maintaining an understanding of the latest Web applications and programming practices </p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Determining user needs by analyzing technical requirements</p>
                     </li>
                    </ul>
           
            </article>
            {/* ==================================== */}
            <article className={classes.service}>
                <div className={classes.service_head}>
                    <h3>Content creation</h3>    </div>
                    <ul className={classes.service_list}>
                        <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Research industry-related topics</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Prepare well-structured drafts</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Promote content on social networks and monitor engagement</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Coordinate with marketing and design teams to illustrate articles</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Update our websites as needed</p>
                     </li>
                    </ul>
            
            </article>
            {/* ========================== */}
            <article className={classes.service}>
                <div className={classes.service_head}>
                    <h3> UI/UX Design</h3> </div>
                    <ul className={classes.service_list}>
                        <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Gather and evaluate user requirements in collaboration with product managers and engineers</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Illustrate design ideas using storyboards, process flows and sitemaps</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Design graphic user interface elements, like menus, tabs and widgets</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Develop UI mockups and prototypes that clearly illustrate how sites function and look like</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Prepare and present rough drafts</p>
                     </li>
                     <li >
                            <BiCheck className={classes.service_list_icon}/>
                            <p> Adhere to style standards on fonts, colors and images
	Identify and troubleshoot UX problems</p>
                     </li>
                    </ul>
               
            </article>

      </div>
    </section>
  );
}

export default Services;
