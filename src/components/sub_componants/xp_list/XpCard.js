import React from 'react'
import classes from './XpCard.module.css'
function XpCard(props) {
  return (
    <article>
    <div className={classes.experience_details}>
      {props.children}
      <h4>{props.skill.skill}</h4>
    </div>
  </article>
  )
}

export default XpCard