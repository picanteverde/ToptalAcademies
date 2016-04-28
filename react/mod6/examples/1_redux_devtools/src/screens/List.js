import React, { PropTypes } from 'react';
import { Selectable } from '../components/Selectable.js';


let List = React.createClass({

  propTypes: {
    onInit: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired,
    persons: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired
  },

  getInitialState(){
    const { props } = this;
    return {
      data: props.persons,
      selected: 0
    };
  },

  componentDidMount(){
    this.props.onInit();
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
    const { props, state } = this;
    return (
      <div>
        <button onClick={this.del}>Delete Selected</button>
        <button onClick={this.edit}>Edit Selected</button>
        <Selectable
          rows={state.data}
          initialSelected={state.selected}
          onSelect={this.select}
        />
        <div>{props.error}</div>
      </div>
    );
  }
});

export default List;
