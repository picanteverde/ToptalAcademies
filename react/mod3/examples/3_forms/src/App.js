import React from 'react';
import { Selectable } from './components/Selectable.js';
import { AddNewForm } from './components/AddNewForm';

let data = [
  { name: 'Alejandro', lastname: 'Hernández' },
  { name: 'Viktor', lastname: 'Zira' },
  { name: 'Eva', lastname: 'Vidal' }
];

let App = React.createClass({
  getInitialState(){
    return {
      data: data,
      selected: 0
    };
  },
  select(idx){
    this.setState({
      selected: idx
    });
  },
  add(person){
    let data = this.state.data.slice();
    data.push(person);
    this.setState({
      data: data
    }, () => {
      this.form.clear();
    });
  },
  render(){
    const { state } = this;
    return (
      <div>
        <Selectable
          rows={state.data}
          initialSelected={state.selected}
          onSelect={this.select}
        />
        <AddNewForm
          onAdd={this.add}
          ref={(form) => {
            this.form = form;
          }}
        />
      </div>
    );
  }
});

export default App;
