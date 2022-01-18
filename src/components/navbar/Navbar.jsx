import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLink } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="ewd__navbar">
      <div className="ewd__navbar-links">
        <div className="ewd__navbar-links_logo">
          <img src={logo} alt="evolveWD-logo" />
        </div>
        <div className="ewd__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#evolveWD">evolveWD</a>
          </p>
          <p>
            <a href="#competenze">Competenze</a>
          </p>
          <p>
            <a href="#portfolio">Portfolio</a>
          </p>
          <p>
            <a href="#contatti">Contatti</a>
          </p>
        </div>
      </div>
      <div className="ewd__navbar-sign">
        <p>Sign in</p>
        <button type="button" className="">
          Sign Up
        </button>
      </div>
      <div className="ewd__navbar-menu"></div>
    </div>
  );
};

export default Navbar;
