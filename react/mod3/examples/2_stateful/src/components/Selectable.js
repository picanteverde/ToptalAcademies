import React, { PropTypes } from 'react';

export let Selectable = React.createClass({
  porpTypes: {
    rows: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    initialSelected: PropTypes.number.isRequired
  },
  getInitialState(){
    const { props } = this;
    return {
      selected: props.initialSelected
    };
  },
  
  componentWillReceiveProps(next){
    this.setState({
      selected: next.initialSelected
    });
  },
  shouldComponentUpdate(nextProps, nextState){
    const { state } = this;
    if(nextState.selected === state.selected){
      return false;
    }else{
      return true;
    }
  },

  render(){
    const { props, state } = this;
    console.log('Rendering');
    return (
      <table>
        <tbody>
          {props.rows.map((r, idx) => {
            return (
              <tr
                key={idx}
                style={(state.selected === idx)?{backgroundColor:'black', color:'white'}:null}
                onClick={() => {
                  props.onSelect(idx);
                }}
              >
              {Object.keys(r).map((key, idx) => {
                return (
                  <td
                    key={idx}
                  >
                    {r[key]}
                  </td>
                );
              })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
});
