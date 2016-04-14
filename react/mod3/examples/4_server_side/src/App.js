import React from 'react';
import { Selectable } from './components/Selectable.js';
import { AddNewForm } from './components/AddNewForm';
import axios from 'axios';

const urls = {
  'list': '/api/persons',
  'add': '/api/persons/add',
  'del': '/api/persons/del',
  'edit': '/api/persons/edit'
};

let App = React.createClass({
  getInitialState(){
    return {
      data: [],
      selected: 0
    };
  },
  fetch(action, data){
    return axios
      .post(urls[action], data)
      .then((res) =>{
        this.setState({
          data: res.data
        });
      });
  },
  componentDidMount(){
    this.fetch('list');
  },
  select(idx){
    this.setState({
      selected: idx
    });
  },
  add(person){
    this.form.clear();
    this.fetch('add', person);
  },
  del(){
    this.fetch('del',{
      idx: this.state.selected
    });
  },
  render(){
    const { state } = this;
    return (
      <div>
        <button onClick={this.del}>Delete Selected</button>
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
