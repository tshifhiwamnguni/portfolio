import React from "react";
import classes from "./Services.module.css";
import { BiCheck } from "react-icons/bi";
import webDev from "../../data/services/webDevList.json";
import creator from "../../data/services/contentCreatorList.json";
import uxUi from "../../data/services/uiuxList.json";

function Services() {

  let webDevData = webDev;
  let creatorData = creator;
  let uiUxData = uxUi;

  return (
    <section id="service">
      <h5>what i offer</h5>
      <h2>Services</h2>
      <div className={`${classes.container} ${classes.services_container}`}>
        <article className={classes.service}>
          <div className={classes.service_head}>
            <h3> web development</h3>
          </div>
          <ul className={classes.service_list}>
            {webDevData.map((li) => (
              <li>
                <BiCheck className={classes.service_list_icon} />
                <p> {li.service}</p>
              </li>
            ))}
          </ul>
        </article>
{/* ==================================== */}
        <article className={classes.service}>
          <div className={classes.service_head}>
            <h3>Content creation</h3>{" "}
          </div>
          <ul className={classes.service_list}>
            {creatorData.map((li) => (
              <li>
                <BiCheck className={classes.service_list_icon} />
                <p> {li.service}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* ========================== */}
        <article className={classes.service}>
          <div className={classes.service_head}>
            <h3> UI/UX Design</h3>{" "}
          </div>
          <ul className={classes.service_list}>
            {uiUxData.map((li) => (
              <li>
                <BiCheck className={classes.service_list_icon} />
                <p> {li.service}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
