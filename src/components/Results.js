import React, {Component} from 'react';

export default class Results extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <div className="card">
            <div className="card-block">
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><canvas id="icon" width="20" height="20"></canvas></li>
                <li className="list-group-item">City: {this.props.dailyWeather.city}</li>
                <li className="list-group-item">Summary: {this.props.dailyWeather.summary}</li>
                <li className="list-group-item">Temperature: {this.props.dailyWeather.temperature}</li>
                <li className="list-group-item">Humidity: {this.props.dailyWeather.humidity}</li>
            </ul>
          </div>
        </div>
    );
  }
}

