
import React, { PropTypes } from 'react';
import { PersonForm } from '../components/PersonForm';

let Add = React.createClass({

  propTypes: {
    onAdd: PropTypes.func.isRequired
  },

  add(person){
    this.props.onAdd(person);
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
