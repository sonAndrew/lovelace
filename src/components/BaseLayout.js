import React from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar';

const BaseLayout = (props) => {
  if (!props.dailyWeather.date) {
    var date = "No Date";
  }
  else {
   var date = props.dailyWeather.date;
  }
  return (
    <div className="App">
      <h1 className="white-text">
        Today's Place
      </h1>
      <SearchBar />
      <p>{props.dailyWeather.humidity}</p>
    </div>
  );
}

export default BaseLayout;
