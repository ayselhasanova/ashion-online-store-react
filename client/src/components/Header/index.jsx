import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import "../../assets/css/reset.css";
import "./style.css";

// Logo
import logo from "../../assets/img/logo.png.webp";

const Header = () => {

  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo col-1">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="col-10">
            <ul className="menu">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/">ABOUT</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className=" col-1 buttons">
            <Link className="link" to="/favorites">
              <span className="pi pi-heart"></span>
            </Link>
            <Link className="link" to="./">
              <span className="pi pi-user"></span>
            </Link>
            <Link className="link" to="/cart">
              <span className="pi pi-shopping-cart"></span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
