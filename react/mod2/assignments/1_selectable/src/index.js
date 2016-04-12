import React from 'react';
import ReactDom from 'react-dom';
import { Selectable } from './components/Selectable';

let data = [
  { name: 'Alejandro', lastname: 'Hernández' },
  { name: 'Viktor', lastname: 'Zira' },
  { name: 'Eva', lastname: 'Vidal' }
];

ReactDom.render(
  <Selectable
    rows={data}
  />, document.getElementById('start'));
