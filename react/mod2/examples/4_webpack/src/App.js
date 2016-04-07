import React from 'react';
import Clickable from './Clickable';
import Item from './Item';

let names = ['Hector', 'Tom', 'Veronika', 'Erik', 'Sam'];

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
            age: parseInt(Math.random()*5, 10) + 20
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

export default App;
