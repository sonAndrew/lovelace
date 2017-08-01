import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
      term: "",
      dailyWeather: {}
    }
    this.handleWeather('Charleston');
  }

  handleWeather(search_term) {
    geo.find(search_term, (err, res) => {
      let position = {
        latitude: res[0].location.lat,
        longitude: res[0].location.lng
      }
      darksky.loadCurrent(position)
      .then(result => {
        let dailyWeather = {
          date: result.dateTime._d,
          icon: result.icon,
          humidity: result.humidity,
          summary: result.summary,
          temperature: result.temperature
        }
        this.setState({dailyWeather: dailyWeather});
        console.log(this.state.dailyWeather);
      })
      .catch();
    })
  }
 
  render() {
    return(
      <div>
        <BaseLayout dailyWeather={this.state.dailyWeather}>
          <h1 className="white-text center">
            Today's Place
          </h1>
          <SearchBar handleWeather={this.handleWeather}/>
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
