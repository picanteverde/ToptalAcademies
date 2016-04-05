import React from 'react';
import ReactDOM from 'react-dom';

let Clickable = React.createClass({
  handleClick(e){
     console.log('Clicked!');
  },
  render(){
    return (
      <h1
        onClick={this.handleClick}
      >click me!</h1>);
  }
});


ReactDOM.render(<Clickable />, document.getElementById('start'));
