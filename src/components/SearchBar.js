import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
      event.preventDefault();
  }
  render(){
    return (
      <div className="container">
        <form className="center" onSubmit={this.handleWeather}>
          <input className="input-field" name="name" type="text" placeholder="Location" />
        
          <button className="cyan white-text" type="submit"><i className="material-icons left white-text">cloud</i>Search</button>
        </form>
      </div>
      
    );
  }
}