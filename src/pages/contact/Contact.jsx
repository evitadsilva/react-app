import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
   <div class="contact_body">
     <div class="contact__container">
        <div class="contact__row">
            
            <section class="col left">

                <div class="contact__title">
                    <h2>Get in touch</h2>
                </div>

                <div class="contact__info">

                    <div class="icon-group">
                        <div class="icon">
                            <i class={faPhone}></i>
                        </div>
                        <div class="details">
                            <span>Phone</span>
                            <span>+91 7718088601</span>
                        </div>
                    </div>

                    <div class="icon-group">
                        <div class="icon">
                            <i class={faEnvelope}></i>
                        </div>
                        <div class="details">
                            <span>Email</span>
                            <span>gigit@gmail.com</span>
                        </div>
                    </div>

                    <div class="icon-group">
                        <div class="icon">
                            <i class={faLocationDot}></i>
                        </div>
                        <div class="details">
                            <span>Location</span>
                            <span>Maharashtra, Mumbai.</span>
                        </div>
                    </div>

                </div>

                
                <div className="social-media">
      <a href="#"><FontAwesomeIcon icon={faFacebook} style={{ color: '#fff' }} className='media-icons' /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} className='media-icons' /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} className='media-icons' /></a>
      <a href="#"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#fff' }} className='media-icons' /></a>
    </div>


            </section>

        
            <section class="col right">

                <form class="messageForm">
                    <div class="input_grp halfWidth">
                        <input type="text" name="" required="required"/>
                        <label>Your Name</label>
                    </div>

                    <div class="input_grp halfWidth">
                        <input type="email" name="" required="required"/>
                        <label>Email</label>
                    </div>

                    <div class="input_grp fullWidth">
                        <input type="text" name="" required="required"/>
                        <label>Subject</label>
                    </div>

                    <div class="input_grp fullWidth">
                        <textarea required="required"></textarea>
                        <label>Say something....</label>
                    </div>

                    <div class="input_grp fullWidth">
                        <button>Send Message</button>
                    </div>
                </form>

            </section>
        </div>
    </div>
    </div>
  )
}

export default Contact