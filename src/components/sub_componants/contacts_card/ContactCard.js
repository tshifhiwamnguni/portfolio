import React from 'react'
import classes from './ContactCard.module.css'


function ContactCard(props) {
    return (
        <article className={classes.contact_option}>
             {props.children}
            <h4> {props.title}</h4>
            <h5> {props.data}</h5>
            <a href={props.extra} rel="noreferrer"> send a message</a>
        </article>
    )
}

export default ContactCard