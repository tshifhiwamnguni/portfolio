import React from 'react'
import classes from './ServiceCard.module.css'
import ServiceList from "../service_list/ServiceList";
function ServiceCard(props) {
  return (
    <article className={classes.service}>
    <div className={classes.service_head}>
      <h3> {props.service}</h3>
    </div>
    <ul className={classes.service_list}>
      {props.Data.map((li) => (
       <ServiceList li={li}/>
      ))}
    </ul>
  </article>
  )
}

export default ServiceCard