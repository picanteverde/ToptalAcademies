import React, { PropTypes } from 'react';
import { Selectable } from '../components/Selectable.js';


let List = React.createClass({

  propTypes: {
    onDel: PropTypes.func.isRequired,
    persons: PropTypes.array.isRequired
  },

  getInitialState(){
    const { props } = this;
    return {
      data: props.persons,
      selected: 0
    };
  },

  componentWillReceiveProps(next){
    this.setState({
      data: next.persons
    });
  },

  select(idx){
    this.setState({
      selected: idx
    });
  },

  del(){
    this.props.onDel(this.state.selected);
  },

  contextTypes: {
    router: PropTypes.object.isRequired
  },

  edit: function () {
    let route = '/edit/' + this.state.selected;
    this.context.router.push(route);
  },

  render(){
    const { state } = this;
    return (
      <div>
        <button onClick={this.del}>Delete Selected</button>
        <button onClick={this.edit}>Edit Selected</button>
        <Selectable
          rows={state.data}
          initialSelected={state.selected}
          onSelect={this.select}
        />
      </div>
    );
  }
});

export default List;
