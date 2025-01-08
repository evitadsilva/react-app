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
            <a href="#features">Features</a>
            <a href="#careers">Careers</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Contact us</h2>
            <a href="/contact">Contact</a>
            <a href="/support">Support</a>
            <a href="/sponsorship">Sponsorship</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Our services</h2>
            <a href="/">Home</a>
            <a href="/about">About us</a>
            <a href="/services">Services</a>
            <a href="/features">Features</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Social Media</h2>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="social__media">
        <div className="social__media--wrap">
          <p className="website__rights">@gigit 2024. All rights reserved.</p>
          <div className="social__icons">
            <a href="https://facebook.com" className="social__icons--links" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#fff' }} />
            </a>
            <a href="https://instagram.com" className="social__icons--links" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} />
            </a>
            <a href="https://twitter.com" className="social__icons--links" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} />
            </a>
            <a href="https://linkedin.com" className="social__icons--links" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#fff' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
