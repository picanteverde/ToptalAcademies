import React from 'react';
import ReactDOM from 'react-dom';

let Item = React.createClass({
  render(){
    return (<div>{this.props.content}</div>);
  }
});

let List = React.createClass({
  render(){
    let strValue = "Item1",
      intVal = 42;
    return (
      <div>
        <h1>This is a list with Items</h1>
        <div>
          <Item content={strValue}/>
          <Item content="Item{intVal}"/>
          {['hello', <span>Wolrd</span>, '!!']}
          {[1,2,3,4].map(num=><Item key={num} content={'Item' + num} />)}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<List />, document.getElementById('start'));
