import React from 'react';
import '../styles/App.css';

const BaseLayout = (props) => {
  if (!props.dailyWeather.date) {
    var date = "No Date";
  }
  else {
   var date = props.dailyWeather.date;
  }
  console.log(date);
  return (
    <div className="App">
      <h1>
        Today's Place
      </h1>
      <p></p>
    </div>
  );
}

export default BaseLayout;
