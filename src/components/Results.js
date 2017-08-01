import React, {Component} from 'react';

export default class Results extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <div className="card">
        <div className="card-header">
            City Name
          </div>
            <div className="card-block">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Temp</li>
                <li className="list-group-item">Humidity</li>
                <li className="list-group-item">Precipitation</li>
            </ul>
          </div>
        </div>
    );
  }
}

