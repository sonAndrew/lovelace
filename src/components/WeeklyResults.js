import React, {Component} from 'react';
import moment from 'moment';

export default class WeeklyResults extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const weatherItems = this.props.weeklyWeather.map((weather) => {
      return (
      <div className="card" key={weather.dateTime._d}>
        <li>{moment(weather.dateTime._d).format('dddd')}</li>
        <li>Summary: {weather.summary}</li>
        <li>Humidity: {weather.humidity * 100}%</li>
        <li>Precipitation: {weather.precipitation} in</li>
        <li>Wind Speed: {weather.windSpeed} mph</li>
        <li>High: {weather.apparentTemperatureMax} F</li>
        <li>Low: {weather.apparentTemperatureMin} F</li>
        <li>Sunrise: {moment(weather.sunriseTime * 1000).format('h:mm')} AM</li>
        <li>Sunrise: {moment(weather.sunriseTime * 1000).format('h:mm')} PM</li>
      </div>
      );
    });
    return (
      <div className="container">
        <ul className="tSize">
          {weatherItems}
        </ul>
      </div>
    );
  }
}