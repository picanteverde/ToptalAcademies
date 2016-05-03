import React, { PropTypes } from 'react';
import { Selectable } from '../components/Selectable.js';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  margin: 12
};

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
      <RaisedButton
        label="Delete Selected"
        primary={true}
        style={style}
        onClick={this.del}
      />
      <RaisedButton
        label="Edit Selected"
        secondary={true}
        style={style}
        onClick={this.edit}
      />
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
