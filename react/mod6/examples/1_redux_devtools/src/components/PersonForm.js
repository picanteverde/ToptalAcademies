import React, { PropTypes } from 'react';

export let PersonForm = React.createClass({

  propTypes: {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  },

  getInitialState(){
    return {
      name: '',
      lastName: ''
    };
  },

  handleClick(){
    const { name, lastName } = this.state;
    this.props.onSubmit({
      name,
      lastName
    });
  },

  handleNameChange(e){
    //debugger;
    this.setState({
      name: e.target.value//.toLowerCase()
    });
  },

  handleLastNameChange(e){
    //debugger;
    this.setState({
      lastName: e.target.value//.toLowerCase()
    });
  },

  clear(){
    this.setState({
      name: '',
      lastName: ''
    });
  },

  setValues(vals){
    this.setState({
      name: vals.name,
      lastName: vals.lastName
    });
  },

  render(){
    const { state, props } = this;
    return (
      <div>
        <div>
          <span>First Name:</span>
          <input type="text"
          value={state.name}
          onChange={this.handleNameChange}
          />
        </div>
        <div>
          <span>Last Name:</span>
          <input type="text"
          value={state.lastName}
          onChange={this.handleLastNameChange}
          />
        </div>
        <div>
          <button onClick={this.handleClick}>{props.label}</button>
        </div>
      </div>
    );
  }
});
