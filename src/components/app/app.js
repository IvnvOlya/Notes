import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import NoteList from '../note-list';
import NoteAddForm from '../note-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
      data: [
        this.createItem('Купить хлеб'),
        this.createItem('Врач в четверг в 14')
  ],
    term: ' '
};

createItem(label){
  return{
    label, 
    important: false,
    id: this.maxId++
  }
}


deleteItem = (id) => {

  this.setState(({data}) => {
  const index = data.findIndex((el) => el.id === id);
  //console.log(index);

  const before = data.slice(0, index);
  const after = data.slice(index+1);

  const newArr = [
    ...before,
    ...after
  ];
  return{
    data: newArr
  };
  });
};

addItem = (text) => {
  const newItem = this.createItem(text);

  this.setState(({data})=>{
    const newArr = [
      ...data,
      newItem
    ];
    return {
      data: newArr
    }
  });

  //console.log('add', text)
  };
onSearch = (term) => {
  this.setState({term});
};

search(items, term) {
  if(term === 0) {
    return items;
  }

  return items.filter((item) =>{
    return item.label.indexOf(term) > -1;
  });
}

  render() {
    const {data, term} =this.state;

    const noteCount = this.state.data.length;

    const visibleItem = this.search(data, term);

    return(
      <div className="app-note">
        <AppHeader notes = {noteCount}/>
        <SearchPanel 
          onSearch={this.onSearch}/>
        <NoteList 
          notedate= {visibleItem}
          onDelete = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}/> 
        <NoteAddForm onAddItem = {this.addItem}/>     
      </div>
    )
  }
  };
