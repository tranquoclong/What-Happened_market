import React from "react";
import logo from "../../assets/Images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-menu">
        <div className="menu-icon"></div>
        <ul className="nav-menu">
          <li>
            <a className="nav-links" href="/">
              INTRODUCTION
            </a>
          </li>
          <li>
            <a className="nav-links" href="/">
              SOLUTION
            </a>
          </li>
          <li>
            <a className="nav-links" href="/">
              RATEPLAN
            </a>
          </li>
          <li>
            <a className="nav-links" href="/">
              LOGIN
            </a>
          </li>
          <li>
            <a className="nav-links" href="/">
              APPLY FOR FREE USE
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
