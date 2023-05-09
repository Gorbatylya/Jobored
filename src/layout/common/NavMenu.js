import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const NavMenu = () => {

  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav-links">
          <li>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Поиск вакансий</NavLink>
          </li>
          <li>
            <NavLink to="/favourites" className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Избранное</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
