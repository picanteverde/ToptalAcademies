import React from 'react';
import ReactDOM from 'react-dom';

let Clickable = React.createClass({
  getInitialState(){
    return {
      count: 0
    }
  },
  handleClick(e){
     this.setState({
       count: this.state.count + 1
     });
  },
  render(){
    return (
      <h1
        onClick={this.handleClick}
      >
        You clicked {this.state.count} times!
      </h1>);
  }
});


ReactDOM.render(<Clickable />, document.getElementById('start'));
