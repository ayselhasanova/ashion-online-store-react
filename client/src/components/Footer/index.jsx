import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../../assets/css/reset.css";
import "./style.css";

// Logo
import logo from "../../assets/img/logo.png.webp";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer d-flex">
        <div className="col-4">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt cilisis.
          </p>
          <div className="payment d-flex">
            <div className="payment-1">
              <img
                src="	https://preview.colorlib.com/theme/ashion/img/payment/payment-1.png"
                alt="payment-1"
              />
            </div>
            <div className="payment-2">
              <img
                src="	https://preview.colorlib.com/theme/ashion/img/payment/payment-2.png"
                alt="payment-2"
              />
            </div>
            <div className="payment-3">
              <img
                src="	https://preview.colorlib.com/theme/ashion/img/payment/payment-3.png"
                alt="payment-3"
              />
            </div>
            <div className="payment-4">
              <img
                src="	https://preview.colorlib.com/theme/ashion/img/payment/payment-4.png"
                alt="payment-4"
              />
            </div>
            <div className="payment-4">
              <img
                src="	https://preview.colorlib.com/theme/ashion/img/payment/payment-5.png"
                alt="payment-5"
              />
            </div>
          </div>
        </div>
        <div className="col-2 quick-links">
          <div className="quick-links-heading d-flex">
            <p>QUICK LINKS</p>
          </div>
          <div className="quick-links-content">
            <ul typeof="none" className="d-block">
              <li>
                {" "}
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/"}>FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2 account">
          <div className="account-heading d-flex">
            <p>ACCOUNT</p>
          </div>
          <div className="account-content">
            <ul typeof="none" className="d-block">
              <li>My Account</li>
              <li>Orders Tracking</li>
              <li>Checkout</li>
              <li>Wishlist</li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="newsletter-heading d-flex">
            <p>NEWSLETTER</p>
          </div>
          <div className="newsletter-content">
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit" className="submit-btn">
                Subscribe
              </button>
            </form>
            <div className="footer-icons d-flex">
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                  <span className="pi pi-facebook"></span>
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                  <span className="pi pi-twitter"></span>
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                  <span className="pi pi-instagram"></span>
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                  <span className="pi pi-youtube"></span>
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                  <span className="pi pi-github"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyrights d-flex justify-content-center">
        Copyright © 2023 All rights reserved | This template is made with by developer Aisel
      </p>
    </footer>
  );
};

export default Footer;
