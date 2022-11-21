import React, { useRef } from 'react';
import classes from './contacts.module.css'
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from '@emailjs/browser';

function Contacts(){
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_n92xeeo', 'template_i7z5wv2', form.current, 'XjpWlWZjyp4WBGqeM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
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
              <MdOutlineEmail className={classes.contact_option_icon}/>
              <h4> Whatsapp</h4>
              <h5> 0786274306</h5>
              <a href="https://api.whatsapp.com/send?phone=0786274306" target={'_blank'}> send a message</a>
            </article>
          

          </div>
          <div>
          <form form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='your name' required />
            <input type="email" name="email" placeholder='your email' required />
            <textarea name='message' id='' cols='30' rows='7' placeholder='your message'></textarea>
            <button type='submit' value={'send'} className='btnx btn-primaryx'> send message</button>
          </form>
          </div>
        </div>
      </section>
    )
}

export default Contacts;