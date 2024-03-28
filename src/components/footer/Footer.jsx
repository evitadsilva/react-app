import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__links">
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>About us</h2>
            <a href="#">Features</a>
            <a href="#">Careers</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Contact us</h2>
            <a href="contact.jsx">Contact</a>
            <a href="/">Support</a>
            <a href="/">Sponsorship</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Our services</h2>
            <a href="/">Home</a>
            <a href="/">About us</a>
            <a href="/">Services</a>
            <a href="/">Features</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <div className="social__media">
        <div className="social__media--wrap">
          <p className="website__rights">@gigit 2024. All rights reserved.</p>
          <div className="social__icons">
            <a href="#" className="social__icons--links" target="_blank">
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#fff' }} />
            </a>
            <a href="#" className="social__icons--links" target="_blank">
              <FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} />
            </a>
            <a href="#" className="social__icons--links" target="_blank">
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} />
            </a>
            <a href="#" className="social__icons--links" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#fff' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
