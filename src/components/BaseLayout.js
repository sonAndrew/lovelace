import React from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar';
import Results from './Results';

const BaseLayout = (props) => {
  if (!props.dailyWeather.date) {
    var date = "No Date";
  }
  else {
    var date = props.dailyWeather.date;
  }
  return (
    <div className="App center">
      <h1 className="yellow-text">
        Weather Forcaster
      </h1>
      <SearchBar handleWeather={props.handleWeather}/>
      <Results dailyWeather={props.dailyWeather}/>
      <footer>
        <a href='https://darksky.net/poweredby/'>Powered by Dark Sky</a>
      </footer>
    </div>
  );
}

export default BaseLayout;
