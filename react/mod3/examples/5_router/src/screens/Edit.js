import React, { PropTypes } from 'react';
import { PersonForm } from '../components/PersonForm';
import axios from 'axios';


const urls = {
  'list': '/api/persons',
  'edit': '/api/persons/edit'
};

let Add = React.createClass({

  propTypes: {
    params: PropTypes.object
  },

  fetch(action, data){
    return axios
      .post(urls[action], data);
  },

  componentDidMount(){
    this.fetch('list').then((res) => {
      var p = res.data[this.props.params.idx];
      this.form.setValues({
        'name': p.name,
        'lastName': p.lastName
      });
    });
  },

  edit(person){
    person.idx = this.props.params.idx;
    this.fetch('edit', person);
  },

  render(){
    return (
      <PersonForm
        onSubmit={this.edit}
        label="Edit"
        ref={(form) => {
          this.form = form;
        }}
      />
    );
  }
});

export default Add;
