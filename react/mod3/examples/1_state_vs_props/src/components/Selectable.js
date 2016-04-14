import React, { PropTypes } from 'react';

export let Selectable = React.createClass({
  porpTypes: {
    rows: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired
  },
  /*
  shouldComponentUpdate(nextProps, nextState){
    const { props } = this;
    if(props.selected === nextProps.selected){
      return false;
    }else{
      return true;
    }
  },
  */
  render(){
    const { props } = this;
    console.log('Rendering');
    return (
      <table>
        <tbody>
          {props.rows.map((r, idx) => {
            return (
              <tr
                key={idx}
                style={(props.selected === idx)?{backgroundColor:'black', color:'white'}:null}
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
