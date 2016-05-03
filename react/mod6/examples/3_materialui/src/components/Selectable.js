import React, { PropTypes } from 'react';
import Table from 'material-ui/lib/table/table';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';


export let Selectable = React.createClass({
  porpTypes: {
    rows: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    initialSelected: PropTypes.number.isRequired
  },

  render(){
    const { props } = this;
    return (
      <Table
        onRowSelection={(arrSelected) => {
          if(arrSelected.length){
            props.onSelect(arrSelected[0]);
          }
        }}
      >
        <TableBody>
          {props.rows.map((r, idx) => {
            return (
              <TableRow
                key={idx}
                selected={idx === props.initialSelected}
              >
              {Object.keys(r).map((key, idx) => {
                return (
                  <TableRowColumn
                    key={idx}
                  >
                    {r[key]}
                  </TableRowColumn>
                );
              })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
});
