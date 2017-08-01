import React, {Component} from 'react';

export default class Results extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <div className="container">
            <div className="card-panel cyan">
            <h1 className="yellow-text lighten-5">City: {this.props.dailyWeather.city}</h1>
            <div className="divider"></div>  
            <ul className="tSize">
                
                <li className=""><canvas id="icon" width="20" height="20"></canvas></li>
                <li className="">Date: {this.props.dailyWeather.date}</li>
                <li className="">Summary: {this.props.dailyWeather.summary}</li>
                <li className="">Humidity: {this.props.dailyWeather.humidity} %</li>
                <li className="">Precipitation: {this.props.dailyWeather.precipitation} in</li>
                <li className="">Wind Speed: {this.props.dailyWeather.wind} mph</li>
                <li className="">High: {this.props.dailyWeather.high} F</li>
                <li className="">Low: {this.props.dailyWeather.low} F</li>
                <li className="">Sunrise: {this.props.dailyWeather.sunrise} AM</li>
                <li className="">Sunset: {this.props.dailyWeather.sunset} PM</li>
            </ul>
          </div>
        </div>
    );
  }
}

