import Radium from 'radium';
import color from 'color';
import React, { PropTypes } from 'react';

let styles = {
  'base': {
    fontFamily: 'sans-serif',
    button: {
      fontSize: 18,
      borderStyle: 'solid',
      padding: 10
    },
    fields: {
      paddingTop: 10,
      label: {
        display: 'inline-block',
        width: 200
      }
    }
  },
  'add': {
    button: {
      backgroundColor: '#27AE60',
      ':hover': {
        backgroundColor: color('#27AE60').lighten(0.2).hexString()
      }
    }
  },
  'edit': {
    button: {
      backgroundColor: '#2980B8',
      ':hover': {
        backgroundColor: color('#2980B8').lighten(0.2).hexString()
      }
    }
  }
};

let PersonForm = React.createClass({

  propTypes: {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    kind: React.PropTypes.oneOf(['add', 'edit']).isRequired
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
      <div
        style={styles.base}
      >
        <div
          style={styles.base.fields}
        >
          <span
          style={styles.base.fields.label}
          >Name:</span>
          <input type="text"
          value={state.name}
          onChange={this.handleNameChange}
          />
        </div>
        <div
          style={styles.base.fields}
        >
          <span
          style={styles.base.fields.label}
          >Last Name:</span>
          <input type="text"
          value={state.lastName}
          onChange={this.handleLastNameChange}
          />
        </div>
        <div
        style={styles.base.fields}
        >
          <button
            style={[
              styles.base.button,
              styles[props.kind].button
            ]}
            onClick={this.handleClick}
          >
            {props.label}
          </button>
        </div>
      </div>
    );
  }
});

PersonForm = Radium(PersonForm);

export { PersonForm } ;
