import React from 'react';
import './app-header.css';

const AppHeader = ({notes}) => {
    return (
      <div className='app-header d-flex'>
        <h1>Мои заметки</h1>
        <h2> всего: {notes} </h2>
      </div>
    );
  };

  export default AppHeader;