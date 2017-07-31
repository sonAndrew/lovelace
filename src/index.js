import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
// import BaseLayout from './components/BaseLayout';
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
    this.handleWeather('Charleston');
  }
  handleWeather = (search_term) => {
    geo.find(search_term, function (err, res) {
      let position = {
        latitude: res[0].location.lat,
        longitude: res[0].location.lng
      }
      darksky.loadCurrent(position)
      .then(result => console.log(result))
      .catch();
    })
  }
  render() {
    return(
      <div>
        Test
      </div>
    )
  }
}


ReactDOM.render(
  <App /> 
  , 
  document.getElementById('root'));
registerServiceWorker();
