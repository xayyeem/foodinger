import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Foot.css";

function Foot() {
  return (
    <footer className="footer">
      <div className="section__container">
        <div className="footer__top">
          <div className="footer__logo">
            <a href="#">
              <img src={logo} alt="logo" />
              Order from Your Favorite Restaurant
            </a>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut
            corporis aliquid recusandae officia quo optio asperiores vero
            laboriosam nisi tempore, omnis blanditiis, odit nam, doloremque
            tenetur in molestiae quas! Aspernatur excepturi nesciunt tempora!
          </p>
        </div>
       
        <div className="footer__col">
          <h4>Contact</h4>
          <div className="footer__links">
            <a href="tel:7521989156">Phone - +91-7521989156</a>
            <a href="mailto:hasira84@gmail.com">Email - hasira804@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="footer__bar">Copyright ©Hasir Ali</div>
    </footer>
  );
}

export default Foot;
