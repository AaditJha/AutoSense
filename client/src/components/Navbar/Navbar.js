import React, {  useState } from "react";
import "../../styles/Navbar.css";
import Logo from "../../img/logo.svg";
import { Link } from "react-scroll";

function NavBar(props) {
  const [click, setClick] = useState(false);
  const active = props.active;
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className={active ? "navbar-active" : "navbar"}>
        <div className="nav-container">
          <Link
            className="nav-logo"
            to="home-section"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <img src={"./img/logo.svg"} alt="logo" width="8%" />
            <img
              src={Logo}
              alt="logo"
              width="50%"
              style={{ paddingLeft: "2%" }}
            />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                to="services-section"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                to="features-section"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
