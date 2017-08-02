import React from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar';
import Results from './Results';
import WeeklyResults from './WeeklyResults';

const BaseLayout = (props) => {
  return (
    <div className="App center">
      <h1 className="yellow-text">
        Weather Forecaster
      </h1>
      <SearchBar handleWeather={props.handleWeather}/>
      <Results dailyWeather={props.dailyWeather}/>
      <WeeklyResults weeklyWeather={props.weeklyWeather} />
      <footer>
        <a href='https://darksky.net/poweredby/'>Powered by Dark Sky</a>
      </footer>
    </div>
  );
}

export default BaseLayout;
