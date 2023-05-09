import React,{useState} from 'react';
import './style.css';
import useDebounce from "../../hooks/useDebounce";
import { getVacancy, getUser } from "../../services";


const Filters = () => {

const [showList, setShowList] = useState(false);
const [keyword, setKeyword] = useState("");
const [paymentFrom, setPaymentFrom] = useState('');
const [paymentTo, setPaymentTo] = useState('');
const [valueInputIndustry,setValueInputIndustry] = useState('')

// const professionList = document.querySelectorAll('.profession-list');

// const handleToggle = () => {
//   setActive(!isActive);
// };


function startSearch () {
  console.log(getVacancy(keyword, paymentFrom, paymentTo));
}


  return (
    <div className="filters">
      <div className="filters-content">
        <div className="top-row">
          <h3 className="filters-title">Фильтры</h3>
          <button className="btn-reset-filters">
            <h4 className="btn-reset-filters-title">Сбросить все х</h4>
          </button>
        </div>

        <h3 className="title-input">Отрасль</h3>
        <div className="filter-input-wrap first-input">
          <input 
            type="text" 
            placeholder="Выберите отрасль" 
            className="filter-input input-industry" 
            // onClick={() => setShowList(true)}
            onFocus={() => setShowList(true)}
            onBlur={() => setShowList(false)}
            onChange={(e) => setKeyword(e.target.value)}
            ></input>

          {showList ? 
          <><img src='./images/arrowDownBlue.svg' alt='arrowDown' className='arrow-down-blue' onClick={() => setShowList(false)}></img>
          <div className='profession-list'>
            <li onClick={()=> setValueInputIndustry(this.value)}>IT, интернет, связь, телеком</li>
            <li>Кадры, управление персоналом</li>
            <li>Искусство, культура, развлечения</li>
            <li>Банки, инвестиции, лизинг</li>
            <li>Дизайн</li>
           </div></>
          :
          <img src='./images/arrowdown.svg' alt='arrowDown' className='arrow-down' onClick={() => setShowList(true)}></img>
          }


        </div>

        <h3 className="title-input">Оклад</h3>
        <div className="filter-input-wrap">
          <input type="text" placeholder="От" className="filter-input" onChange={(e) => setPaymentFrom(e.target.value)}></input>
            <img src='./images/arrowUp.svg' alt='arrowUp' className='arrow-up-salary'></img>
            <img src='./images/arrowdown.svg' alt='arrowDown' className='arrow-down-salary'></img>
         </div>
         <div className="filter-input-wrap last-input">
          <input type="text" placeholder="До" className="filter-input" onChange={(e) => setPaymentTo(e.target.value)}></input>
            <img src='./images/arrowUp.svg' alt='arrowUp' className='arrow-up-salary'></img>
            <img src='./images/arrowdown.svg' alt='arrowDown' className='arrow-down-salary'></img>
        </div>

        <button className='filter-button' onClick={()=>startSearch()}>Применить</button>
      </div>
    </div>
  );
}

export default Filters
