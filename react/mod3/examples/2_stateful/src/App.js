import React from 'react';
import { Selectable } from './components/Selectable.js';

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
  render(){
    const { state } = this;
    return (
      <Selectable
        rows={state.data}
        initialSelected={state.selected}
        onSelect={this.select}
      />
    );
  }
});

export default App;
