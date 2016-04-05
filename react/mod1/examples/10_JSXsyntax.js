import React from 'react';
import ReactDOM from 'react-dom';

let Item = React.createClass({
  render(){
    return (<div>{this.props.content}</div>);
  }
});

let List = React.createClass({
  render(){
    return (
      <div>
        <h1>This is a list with Items</h1>
        <div>
          <Item content="Item1"/>
          <Item content="Item2"/>
          <Item content="Item3"/>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<List />, document.getElementById('start'));
