import React from 'react';
import '../styles/App.css';

const BaseLayout = (props) => {
  if (!props.dailyWeather.date) {
    var date = "No Date";
  }
  else {
   var date = props.dailyWeather.date;
  }
  return (
    <div className="App">
      <h1>
        Today's Place
      </h1>
      <p>{props.dailyWeather.humidity}</p>
    </div>
  );
}

export default BaseLayout;
