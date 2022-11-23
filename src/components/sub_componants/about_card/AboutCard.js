import React from 'react'
import classes from './AboutCard.module.css'

function AboutCard(props) {
    return (
        <article className={`${classes.about_card} ${classes.grow}`}>
            <div className={classes.center_icon}>
               {props.children}
            </div>
            <h5> {props.titlte}</h5>
            <small> {props.data}</small>
        </article>
    )
}

export default AboutCard