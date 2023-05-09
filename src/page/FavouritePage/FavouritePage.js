import React from "react";
import './FavouritePage.css';
import { NavLink } from "react-router-dom";

const FavouritesPage = () => {


  return (
    <div className="favourites">
      <div className="container">
         <div className="favourites-content">
            <img src='./images/Frame.png' alt='men' className='favourite-img'></img>
            <h3 className="favourites-title">Упс, здесь еще ничего нет!</h3>
            <NavLink to="/home" >
              <button className="favourite-btn">Поиск вакансий</button>
            </NavLink>
         </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
