import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro, { Segundo } from './component'; // se estiver em ./component.jsx

ReactDOM.render(
  <div>
    <Primeiro />
    <Segundo />
  </div>,
  document.getElementById('app')
);
