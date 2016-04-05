import React from 'react';
import ReactDOM from 'react-dom';

var Counter = React.createClass({
  getInitialState: function(){
    return { count: 0 };
  },
  handleClick: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function(){
    return React.createElement(
      'h1',
      {
        onClick: this.handleClick
      },
      'You clicked ' + this.state.count + ' times'
    );
  }
});


ReactDOM.render(
  React.createFactory(Counter)(),
  document.getElementById('start')
);
