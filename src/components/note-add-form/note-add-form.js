import React, {Component} from 'react';

import './note-add-form.css'

export default class NoteAddForm extends Component{

    state = {
        label: ''
    };

onLabelChange = (e) => {
    this.setState({
        label: e.target.value
    });
};

onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
        label: ''
    });
};

    render(){    
    return(
        <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
            
            <input 
                type="text"
                className = "form-control"
                onChange={this.onLabelChange}
                placeholder="Новая заметка"
                value={this.state.label}/>

            <button 
                className="btn btn-secondary">
                Добавить
            </button>

        </form>
    )};
};