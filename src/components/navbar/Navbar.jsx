import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#barbers">Barbers</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="barber-rsvp__navbar">
      <Link to="/">
        <div className="barber-rsvp__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="barber-rsvp__navbar-links">
        <div className="barber-rsvp__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="barber-rsvp__navbar-sign">
        <p>Login/Sign up</p>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="barber-rsvp__navbar-menu_container scale-up-center">
            <div className="barber-rsvp__navbar-menu_container-links">
              <Menu />
              <div className="barber-rsvp__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
