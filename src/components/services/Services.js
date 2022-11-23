import React from "react";
import classes from "./Services.module.css";
import webDev from "../../data/services/webDevList.json";
import creator from "../../data/services/contentCreatorList.json";
import uxUi from "../../data/services/uiuxList.json";
import ServiceCard from "../sub_componants/service_card/ServiceCard";


function Services() {

  let webDevData = webDev;
  let creatorData = creator;
  let uiUxData = uxUi;

  return (
    <section id="service">
   
      <h2 className="headings">what i offer</h2>
      <div className={`${classes.container} ${classes.services_container}`}>

        <ServiceCard service={'web development'} Data={webDevData} />
        {/* ==================================== */}
        <ServiceCard service={'Content creation'} Data={creatorData} />
        {/* ========================== */}
        <ServiceCard service={'UI/UX Design'} Data={uiUxData} />

      </div>
    </section>
  );
}

export default Services;
