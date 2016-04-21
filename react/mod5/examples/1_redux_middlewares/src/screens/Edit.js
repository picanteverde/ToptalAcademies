import React, { PropTypes } from 'react';
import { PersonForm } from '../components/PersonForm';

let Edit = React.createClass({

  propTypes: {
    params: PropTypes.object,
    onEdit: PropTypes.func.isRequired,
    persons: PropTypes.array.isRequired
  },

  componentDidMount(){
    const { props } = this;
    const p = props.persons[props.params.idx];
    this.form.setValues({
      'name': p.name,
      'lastName': p.lastName
    });
  },

  edit(person){
    const { props } = this;
    props.onEdit(props.params.idx, person);
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

export default Edit;
