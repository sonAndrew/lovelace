import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="container">
        <form handleWeather={this.props.handleWeather} className="center">
          <input className="input-field" name="name" type="text" placeholder="Location" />
          <button className="cyan white-text" type="submit"><i className="material-icons left white-text">cloud</i>Search</button>
        </form>
      </div>
      
    );
  }
}