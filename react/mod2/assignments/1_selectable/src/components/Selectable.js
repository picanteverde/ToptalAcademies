import React from 'react';

export let Selectable = React.createClass({
  getInitialState(){
    return {
      selected: -1
    };
  },
  select(idx){
    //if(this.state.selected !== idx){
      this.setState({
        selected: idx
      });
    //}
  },
  render(){
    const { props, state } = this;
    //console.log('rendering');
    return (
      <table>
        {props.rows.map((r, idx) => {
          return (
            <tr
              key={idx}
              style={(state.selected === idx)?{backgroundColor:'black', color:'white'}:null}
              onClick={() => {
                this.select(idx);
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
      </table>
    );
  }
});
