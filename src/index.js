import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// Import Geocode Module
import geocoder from 'google-geocoder';
const GG_API = 'AIzaSyAkU61SJoxhqnZyY1lNi6GcQXzlGS-GaRU';

const geo = geocoder ({
  key: GG_API
})


class App extends Component {
  constructor(props) {
    super(props);
    this.handleWeather('Charleston');
  }
  handleWeather = (search_term) => {
    geo.find(search_term, function (err, res) {
    let location = res[0].location;
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


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
