import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// Import Geocode Module
import GG_Geocode from 'node-geocoder';
const GG_API = 'AIzaSyAkU61SJoxhqnZyY1lNi6GcQXzlGS-GaRU';

//  Geocode Settings
const options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: GG_API, 
  formatter: null
}; 
const geocoder = GG_Geocode(options);


class App extends Component {
  constructor(props) {
    super(props);
    this.handleLocation('Charleston');
  }
  handleLocation = (search_term) => {
    geocoder.geocode(search_term)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
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
