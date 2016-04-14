import React from 'react';
import { PersonForm } from '../components/PersonForm';
import axios from 'axios';


const urls = {
  'add': '/api/persons/add'
};

let Add = React.createClass({

  fetch(action, data){
    return axios
      .post(urls[action], data)
      .then(() =>{
        this.form.clear();
      });
  },

  add(person){
    this.fetch('add', person);
  },

  render(){
    return (
      <PersonForm
        onSubmit={this.add}
        label="Add"
        ref={(form) => {
          this.form = form;
        }}
      />
    );
  }
});

export default Add;
