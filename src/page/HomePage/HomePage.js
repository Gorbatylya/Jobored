import React from 'react'
import Filters from '../../components/Filters/Filters';
import './HomePage.css';
import Search from '../../components/Search/Search';

const HomePage = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="home-content">
          <Filters />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default HomePage
