import React, {Component} from 'react';

import './note-list-item.css';

export default class NoteListItem extends Component {

    state = {
        done: false
    };

    onDone = () => {
        this.setState((state) => {
            return{
                done: !state.done
            };
        });
            };

    onImportant = () => {
        this.setState((state) => {
            return { 
                important: !state.important
            };
       });
    };

    render() {

        const { label, onDelete} = this.props;

        const {done, important} = this.state;

        let classNames = 'note-list-item';
        if (done) {
            classNames += ' done';
        } 
        if(important) {
            classNames += ' important';
        };

        return (
        <span className={classNames}>
            <span className= "note-list-item-label"
                  onClick={this.onDone}>
                {label}
            </span>   
    
                <button type="button" 
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick = {onDelete}>
                    <i className='fa fa-trash-o'></i>
                </button>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"
                    onClick={this.onImportant}></i>
                </button>
    

            </span>   
        );
    };
};
