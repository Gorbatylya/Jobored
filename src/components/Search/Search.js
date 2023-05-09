import React,{useState}  from 'react';
import './style.css';
import { NavLink } from "react-router-dom";
import { getVacancy, getUser } from "../../services";


const Search = () => {


const [keyword, setKeyword] = useState("");

function startSearch() {
  console.log(getVacancy(keyword));
}

  return (
    <div className="search">
      <div className="search-content">
        <div className="search-input-wrap">
          <img src="./images/loop.svg" alt="loop" className="icon-loop"></img>
          <input
            placeholder="Введите название вакансии"
            className="search-input"
            onChange={(e) => setKeyword(e.target.value)}
          ></input>
          <button className="search-button" onClick={()=>startSearch()}>Поиск</button>
        </div>

        <div className="list-vacancies">

          <NavLink to="/jobInfo">
            <div className="item-wrap" >
            <h3 className="item-title">Менеджер-дизайнер</h3>
            <img src="./images/star.svg" alt="star" className="icon-star"></img>
            <div className="item-discription">
              <p className="item-discription-salary">з/п от 70000 rub</p>
              <p className="item-discription-point">•</p>
              <p className="item-discription-timetable">Полный рабочий день</p>
            </div>
            <div className='item-location'>
               <img src="./images/location.svg" alt="location" className="icon-location"></img>
               <p>Новый Уренгой</p>
            </div>
          </div>
          </NavLink>

          <div className="item-wrap">
            <h3 className="item-title">Менеджер-дизайнер</h3>
            <img src="./images/star.svg" alt="star" className="icon-star"></img>
            <div className="item-discription">
              <p className="item-discription-salary">з/п от 70000 rub</p>
              <p className="item-discription-point">•</p>
              <p className="item-discription-timetable">Полный рабочий день</p>
            </div>

            <div className='item-location'>
               <img src="./images/location.svg" alt="location" className="icon-location"></img>
               <p>Новый Уренгой</p>
            </div>
          </div>

          <div className="item-wrap">
            <h3 className="item-title">Менеджер-дизайнер</h3>
            <img src="./images/star.svg" alt="star" className="icon-star"></img>
            <div className="item-discription">
              <p className="item-discription-salary">з/п от 70000 rub</p>
              <p className="item-discription-point">•</p>
              <p className="item-discription-timetable">Полный рабочий день</p>
            </div>

            <div className='item-location'>
               <img src="./images/location.svg" alt="location" className="icon-location"></img>
               <p>Новый Уренгой</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Search
