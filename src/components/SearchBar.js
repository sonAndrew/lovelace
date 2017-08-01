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
      <form onSubmit={this.handleWeather}>
        <label>
          Location:
          <input name="name" type="text"/>
        </label>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}