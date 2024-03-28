import "./navbar.css"
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav class="navbar">
        <div class="navbar__container">
            <a href="/" class="navbar__logo">
                <img src="images/logofinal.png"/>
            </a>
            <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul className="navbar__menu">
      <li className="navbar__item">
        <Link to="/" class="navbar__links">HOME</Link>
      </li>
      <li className="navbar__item">
        <Link to="/about" class="navbar__links">ABOUT</Link>
      </li>
      <li className="navbar__item">
        <Link to="/contact" class="navbar__links">CONTACT</Link>
      </li>
      <li className="navbar__item">
        <Link to="/explore" class="navbar__links">EXPLORE</Link>
      </li>
    </ul>
            <li class="navbar__btn">
                <a href="login.html" class="button"> SignUp </a>
            </li>
        </div>
    </nav>
  )
}

export default navbar