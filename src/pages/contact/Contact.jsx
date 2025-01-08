import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact_body">
      <div className="contact__container">
        <div className="contact__row">
          <section className="col left">
            <div className="contact__title">
              <h2>Get in touch</h2>
            </div>
            <div className="contact__info">
              <div className="icon-group">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="details">
                  <span>Phone</span>
                  <span>+91 7718088601</span>
                </div>
              </div>
              <div className="icon-group">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="details">
                  <span>Email</span>
                  <span>gigit@gmail.com</span>
                </div>
              </div>
              <div className="icon-group">
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="details">
                  <span>Location</span>
                  <span>Maharashtra, Mumbai.</span>
                </div>
              </div>
            </div>
            <div className="social-media">
  <Link to="#"><FontAwesomeIcon icon={faFacebook} style={{ color: '#fff' }} className='media-icons' /></Link>
  <Link to="#"><FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} className='media-icons' /></Link>
  <Link to="#"><FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} className='media-icons' /></Link>
  <Link to="#"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#fff' }} className='media-icons' /></Link>
</div>
          </section>
          <section className="col right">
            <form className="messageForm">
              <div className="input_grp halfWidth">
                <input type="text" name="" required="required"/>
                <label>Your Name</label>
              </div>
              <div className="input_grp halfWidth">
                <input type="email" name="" required="required"/>
                <label>Email</label>
              </div>
              <div className="input_grp fullWidth">
                <input type="text" name="" required="required"/>
                <label>Subject</label>
              </div>
              <div className="input_grp fullWidth">
                <textarea required="required"></textarea>
                <label>Say something....</label>
              </div>
              <div className="input_grp fullWidth">
                <button>Send Message</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
