import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement('div', null, [
    React.createElement('h1', null, 'Title'),
    React.createElement('div', null,[
      React.createElement('a', { href: '#'}, 'Link 1'),
      React.createElement('a', { href: '#'}, 'Link 2'),
      React.createElement('a', { href: '#'}, 'Link 3'),
      React.createElement('a', { href: '#'}, 'Link 4'),
      React.createElement('a', { href: '#'}, 'Link 5')
    ])
  ]),
  document.getElementById('start')
);
