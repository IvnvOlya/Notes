import React, {Component} from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearch = (e) => {
    const term = e.target.value;
    this.setState ({term});
    this.props.onSearch(term);
  }

  render(){
    return(
      <input 
      type="text"
      placeholder='Поиск заметок'
      className="form-control search-panel"
      onChange={this.onSearch}
      value={this.state.term}></input>
    );
  };
};
