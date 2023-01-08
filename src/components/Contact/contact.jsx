import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const contact = () => {
  return (
   <section id='contact'> 
   <h5>Get In Touch</h5>
   <h2>Contact Me</h2>


   <div className="container contact_container">
    <div className="contact_options">
      <article className="contact_option">
        <MdOutlineEmail className='contact_option-icon'/>
         <h4>Email</h4>
         <h5>oladotunlaniyan@gmail.com</h5>
         <a href="mailto:oladotunlaniyan@gmail.com" target= 'blank'>Send a message</a>
      </article>
      <article className="contact_option">
        <BsTwitter className='contact_option-icon'/>
         <h4>Twitter</h4>
         <h5>DevDotun</h5>
         <a href="#" target= 'blank'>Send a message</a>
      </article>
      <article className="contact_option">
        <BsLinkedin className='contact_option-icon'/>
         <h4>LinkedIn</h4>
         <h5>Abdul-Qawi Laniyan</h5>
         <a href="#" target= 'blank'>Send a message</a>
      </article>
    </div>
    {/*==============END OF CONTACT OPTIONS================= */}
    <form action="">
      <input type="text" name='name' placeholder='Your Full Name' required/>
      <input type="email" name='email' placeholder='Your Email' required/>
      <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
   </div>
   </section>
  )
}

export default contact