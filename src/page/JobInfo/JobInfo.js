import React from 'react';
import './JobInfo.css';

const JobInfo = () => {
  return (
    <div className="jobInfo">
      <div className="container">
        <div className="jobInfo-content">
          <div className="item-wrap">
            <h3 className="item-title">Менеджер-дизайнер</h3>
            <img src="./images/star.svg" alt="star" className="icon-star"></img>
            <div className="item-discription">
              <p className="item-discription-salary">з/п от 70000 rub</p>
              <p className="item-discription-point">•</p>
              <p className="item-discription-timetable">Полный рабочий день</p>
            </div>
            <div className="item-location">
              <img
                src="./images/location.svg"
                alt="location"
                className="icon-location"
              ></img>
              <p>Новый Уренгой</p>
            </div>
          </div>

          <div className="vacancy-info">
            <h4 className="vacancy-info-title">Обязанности:</h4>
            <ul>
              <li>
                Разработка дизайн-макетов для наружной, интерьерной рекламы,
                полиграфии, сувенирной продукции.
              </li>
              <li>
                Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop.
              </li>
              <li>Cоздание дизайна логотипов и брендбуков.</li>
              <li>
                Управленческая функция: обучение, адаптация дизайнеров, их
                контроль, оценка
              </li>
            </ul>

            <h4 className="vacancy-info-title">Требования:</h4>
            <ul>
              <li>
                Собеседование – после успешного прохождения тестового задания
                Обязательно - наличие портфолио
              </li>
              <li>Рассматриваются кандидаты только с опытом работы</li>
              <li>
                Умение самостоятельно принимать решения, умение объективно
                оценивать свою работу, работать в режиме многозадачности и
                переключаться с одного задания к другому и планировать свой
                день. Соблюдать сроки.
              </li>
              <li>
                Ответственный, исполнительный, целеустремленный, большим плюсом
                будет опыт управления
              </li>
            </ul>

            <h4 className="vacancy-info-title">Условия:</h4>
            <ul>
              <li>Оформление по контракту</li>
              <li>Полный социальный пакет</li>
              <li>Премирование по результатам работы</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobInfo
