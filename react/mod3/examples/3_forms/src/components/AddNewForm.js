import React, { PropTypes } from 'react';

export let AddNewForm = React.createClass({

  propTypes: {
    onAdd: PropTypes.func.isRequired
  },

  getInitialState(){
    return {
      name: '',
      lastName: ''
    };
  },

  handleClick(){
    const { name, lastName } = this.state;
    this.props.onAdd({
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

  render(){
    const { state } = this;
    return (
      <div>
        <div>
          <span>Name:</span>
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
          <button onClick={this.handleClick}>Add</button>
        </div>
      </div>
    );
  }
});
