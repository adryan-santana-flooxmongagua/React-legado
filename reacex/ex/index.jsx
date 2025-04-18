import React from 'react';
import ReactDOM from 'react-dom';
import Family from './familly';
import Member from './member';

ReactDOM.render(
    <Family lastName='Silva'>
      <Member name='Guilherme'></Member>
    </Family>,
    document.getElementById('app')
  );
  