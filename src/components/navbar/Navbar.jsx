import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLink, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whoami?">Who Am I?</a>
    </p>
    <p>
      <a href="#skills">Skills</a>
    </p>
    <p>
      <a href="#portfolio">Portfolio</a>
    </p>
    <p>
      <a href="#contacts">Contacts</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="ewd__navbar">
      <div className="ewd__navbar-links">
        <div className="ewd__navbar-links_logo">
          <img src={logo} alt="evolveWD-logo" />
        </div>
        <div className="ewd__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ewd__navbar-sign">
        <p>Sign in</p>
        <button type="button" className="">
          Sign Up
        </button>
      </div>
      <div className="ewd__navbar-menu  ">
        {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="ewd__navbar-menu_container tilt-in-fwd-tr">
            <div className="ewd__navbar-menu_container-links">
              <Menu />
              <div className="ewd__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button" className="">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
