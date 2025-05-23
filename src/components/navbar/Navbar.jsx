import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    };

  return (
    <nav className="navbar">
        <div className="navbar__container">
        <Link to="/" className="navbar__logo">
         <img src="images/logofinal.png" alt="Logo" />
         </Link>

            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
      <ul className="navbar__menu">
      <li className="navbar__item">
        <Link to="/" className="navbar__links">HOME</Link>
      </li>
      <li className="navbar__item">
        <Link to="/about" className="navbar__links">ABOUT</Link>
      </li>
      <li className="navbar__item">
        <Link to="/contact" className="navbar__links">CONTACT</Link>
      </li>
      <li className="navbar__item">
        <Link to="/artists" className="navbar__links">EXPLORE</Link>
      </li>
    </ul>
    {user ? (
       <div className="navbar__dropdown" 
       onClick={toggleDropdown}>
       <div className="username">{user.username}</div>
       {isDropdownOpen && (
        <div className="navbar__toggle">
          <ul className="dropdown__menu">
               <li className="dropdown__item" 
               key="logout"
               onClick={handleLogout}
               >
                Logout</li>
           </ul>
        </div>
           
       )}
   </div>
        ) : (
          <>
        <div className="navbutton">
          <li className="navbar__btn">
          <Link to="/login" className="button"> Login </Link>
        </li>

        <li className="navbar__btn">
        <Link to="/register" className="button"> SignUp </Link>
        </li>
        </div>
        
      </>
    )}

        </div>
    </nav>
  )
}

export default Navbar;