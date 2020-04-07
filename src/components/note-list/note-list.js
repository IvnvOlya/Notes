import React from 'react';

import NoteListItem from '../note-list-item';
import './note-list.css';

const NoteList = ({notedate, onDelete}) => {

  const elements = notedate.map((item) => {

    const {id, ...itemProps} = item;

    return (
        <li key={id} className="list-group-item">
          <NoteListItem 
            //label={item.label}
            //important={item.important}
            {...itemProps}
            onDelete ={() => onDelete(id)}/>
        </li>
    );
  });
    return (
      <ul className='list-group'>
        {elements}
      </ul>
    );
  };

export default NoteList;