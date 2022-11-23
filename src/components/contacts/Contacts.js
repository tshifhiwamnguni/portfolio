import React from 'react';
import classes from './contacts.module.css'
import { MdOutlineEmail } from 'react-icons/md'
import ContactCard from '../sub_componants/contacts_card/ContactCard';
import ContactForm from '../sub_componants/contact_form/ContactForm';

function Contacts() {

  return (
    <section id='contact'>
   
      <h2 className="headings">Get in touch</h2>
      <div className={`${classes.container} ${classes.contact_container}`}>

        <div className={classes.contact_options}>

          <ContactCard title={'Email'} data={'tb01mngunbi@gmail.com'} extra={"mailto:tb01mngunbi@gmail.com"}>
            <MdOutlineEmail className={classes.contact_option_icon} />
          </ContactCard>


          <ContactCard title={'Whatsapp and call'} data={'0786274306'} extra={"https://api.whatsapp.com/send?phone=0786274306"}>
            <div>ue</div>
          </ContactCard>

        </div>
        <div>

          <ContactForm />

        </div>
      </div>
    </section>
  )
}

export default Contacts;