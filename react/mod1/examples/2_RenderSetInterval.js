import React from 'react';
import ReactDOM from 'react-dom';

setInterval(function(){
  ReactDOM.render(
    <h1>Hello, world! {(new Date()).toTimeString()}</h1>,
    document.getElementById('start')
  );
},1000);
