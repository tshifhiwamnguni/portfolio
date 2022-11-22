import React from 'react'
import classes from './ServiceList.module.css'
import { BiCheck } from "react-icons/bi";
function ServiceList(props) {
  return (
    <li>
    <BiCheck className={classes.service_list_icon} />
    <p> {props.li.service}</p>
  </li>
  )
}

export default ServiceList