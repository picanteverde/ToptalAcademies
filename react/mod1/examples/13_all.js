import React from 'react';
import ReactDOM from 'react-dom';

let names = ['Hector', 'Tom', 'Veronika', 'Erik', 'Sam'];

let Item = React.createClass({
  render(){
    return (
      <div>
        <span>{this.props.content.name}</span>
        <span>{this.props.content.age}</span>
      </div>
    );
  }
});
let Clickable = React.createClass({
  handleClick(e){
    this.props.handleClick(e);
  },
  render(){
    return (
      <div onClick={this.handleClick}>{this.props.label}</div>
    );
  }
});
let App = React.createClass({
  getInitialState(){
    return {
      data: []
    };
  },
  addPerson(){
    let newData = this.state.data.slice();
    newData.push({
      name: names[parseInt(Math.random()*5, 10)],
      age: parseInt(Math.random()*5, 10) + 20,
    });
    this.setState({
      data: newData
    });
  },
  render(){

    return (
      <div>
        <h1>List of Items</h1>
        <Clickable
          handleClick={this.addPerson}
          label="Add"
        />
        <div>
        {this.state.data.map((person, idx)=><Item key={idx} content={person} />)}
        </div>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('start'));
