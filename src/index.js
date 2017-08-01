import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import SearchBar from './components/SearchBar';
import registerServiceWorker from './registerServiceWorker';

import geocoder from 'google-geocoder';
import darksky from 'dark-sky-api';

// Geocode
const GG_API = 'AIzaSyAkU61SJoxhqnZyY1lNi6GcQXzlGS-GaRU';
const geo = geocoder ({
  key: GG_API
})

// Dark Sky
const DS_API = 'e24f723d76c1094ccbca15e435ca6f72';
darksky.apiKey = DS_API;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dailyWeather: {}
    }
    this.handleWeather('Charleston');
  }

  handleWeather(search_term) {
    geo.find(search_term, (err, res) => {
      let position = {
        latitude: res[0].location.lat,
        longitude: res[0].location.lng,
        city: res[0].city.long_name
      }
      darksky.loadForecast(position)
      .then(result => {
        let today = result.daily.data[0];
        console.log(today);
        let dailyWeather = {
          city: position.city,
          date: today.dateTime._d,
          icon: today.icon,
          humidity: today.humidity,
          precipitation: today.precipProbability,
          summary: today.summary,
          temperature: today.temperature,
          wind: today.windSpeed,
          high: today.temperatureMax,
          low: today.temperatureMin,
          sunrise: today.sunriseTime,
          sunset: today.sunsetTime
        }
        this.setState({dailyWeather: dailyWeather});
      })
      .catch();
    })
  }
  render() {
    return(
      <div>
        <BaseLayout dailyWeather={this.state.dailyWeather} handleWeather={this.handleWeather.bind(this)}>
          {this.props.children}
        </BaseLayout>
      </div>
    )
  }
}

ReactDOM.render(
  <App /> 
  , 
  document.getElementById('root'));
registerServiceWorker();
