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

  render(){
    return (
      <div className="container">
        <form className="center">
          <input className="input-field" name="name" type="text" placeholder="Location" value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
          <button className="cyan white-text" type="submit"><i className="material-icons left white-text">cloud</i>Search</button>
        </form>
      </div>
    );
  }
}