import React from 'react';
import ReactDOM from 'react-dom';

let Item = React.createClass({
  render(){
    return (<div>This is an Item</div>);
  }
});

let List = React.createClass({
  render(){
    return (
      <div>
        <h1>This is a list with Items</h1>
        <div>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<List />, document.getElementById('start'));
