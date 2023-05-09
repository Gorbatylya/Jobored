import React from "react";
import "./style.css";
import NavMenu from "./common/NavMenu";
import { NavLink } from "react-router-dom";

const Header = () => {


  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <NavLink to="/home">
              <div className="header__logo">
                <img src="/images/Union.svg" alt="logo"></img>
                <h2 className="header__logo-title">Jobored</h2>
              </div>
            </NavLink>

            <NavMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
