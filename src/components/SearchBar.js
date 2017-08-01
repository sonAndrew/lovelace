import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      term: ""
    }
  }

  onInputChange(term) {
    this.setState({term});
    console.log(this.state.term);
  }

  onSubmitWeather(event) {
    event.preventDefault();
    this.props.handleWeather(this.state.term);
    this.state.term = "";
  }
  
  render(){
    return (
      <div className="container">
        <form className="center" onSubmit={this.onSubmitWeather.bind(this)}>
          <input className="white lighten-5 center" name="name" type="text" placeholder="Location" value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
          <button className="cyan lighten-3 white-text btn btn-large" type="submit"><i className="material-icons left white-text">cloud</i>Search</button>
        </form>
      </div>
    );
  }
}