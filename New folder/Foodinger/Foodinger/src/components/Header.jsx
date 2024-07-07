import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [loginText, setLoginText] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <NavLink to="/" className="nav-link">
            <img src={logo} alt="logo Image" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>{onlineStatus ? "Online:🟢" : "Offline:🔴"}</li>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
            <li className="cart">
              <NavLink to="/cart" className="nav-link">
                <img src={cart} alt="" />({cartItems.length})
              </NavLink>
            </li>
            <button
              className="loginBtn"
              onClick={() => {
                if (loginText === "Login") {
                  setLoginText("Logout");
                } else {
                  setLoginText("Login");
                }
              }}
            >
              {loginText}
            </button>
            <li className="loggedIn">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
