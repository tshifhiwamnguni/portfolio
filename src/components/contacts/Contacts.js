import React from "react";
import classes from './contacts.module.css'
import {MdOutlineEmail} from 'react-icons/md'

function Contacts(){
    return(
      <section id='contact'>
        <h5>Get in touch</h5>
        <h2>Contact me</h2>
        <div className={`${classes.container} ${classes.contact_container}`}>
          <div className={classes.contact_options}>
            <article className={classes.contact_option}>
              <MdOutlineEmail className={classes.contact_option_icon}/>
              <h4> Email</h4>
              <h5> tb01mngunbi@gmail.com</h5>
              <a href="mailto:tb01mngunbi@gmail.com"> send a message</a>
            </article>
            <article className={classes.contact_option}>
              <MdOutlineEmail/>
              <h4> Email</h4>
              <h5> tb01mngunbi@gmail.com</h5>
              <a href="mailto:tb01mngunbi@gmail.com"> send a message</a>
            </article>
            <article className={classes.contact_option}>
              <MdOutlineEmail/>
              <h4> Email</h4>
              <h5> tb01mngunbi@gmail.com</h5>
              <a href="mailto:tb01mngunbi@gmail.com"> send a message</a>
            </article>
          </div>
          <form action=''>
            <input type="text" name="name" placeholder='your name' required />
            <input type="email" name="name" placeholder='your email' required />
            <textarea name='message' id='' cols='30' rows='7' placeholder='your message'></textarea>
            <button type='submit' className='btnx btn-primaryx'> send message</button>
          </form>
        </div>
      </section>
    )
}

export default Contacts;