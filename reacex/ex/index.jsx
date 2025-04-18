import React from 'react';
import ReactDOM from 'react-dom';
import Family from './familly';
import Member from './member';

ReactDOM.render(
    <Family lastName='Silva'>
      <Member name='Guilherme'/>
      <Member name='edk'/>
      <Member name='marcelo'/>
    </Family>,
    document.getElementById('app')
  );
  