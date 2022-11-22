import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

function ContactForm() {
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
  return (
    <form form ref={form} onSubmit={sendEmail}>
    <input type="text" name="name" placeholder='your name' required />
    <input type="email" name="email" placeholder='your email' required />
    <textarea name='message' id='' cols='30' rows='7' placeholder='your message'></textarea>
    <button type='submit' value={'send'} className='btnx btn-primaryx'> send message</button>
  </form>
  )
}

export default ContactForm