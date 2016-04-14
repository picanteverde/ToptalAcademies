import React, { PropTypes } from 'react';
import axios from 'axios';
import { Selectable } from '../components/Selectable.js';

const urls = {
  'list': '/api/persons',
  'del': '/api/persons/del'
};


let List = React.createClass({

  getInitialState(){
    return {
      data: [],
      selected: 0
    };
  },

  fetch(action, data){
    return axios
      .post(urls[action], data)
      .then((res) =>{
        this.setState({
          data: res.data
        });
      });
  },

  componentDidMount(){
    this.fetch('list');
  },

  select(idx){
    this.setState({
      selected: idx
    });
  },

  del(){
    this.fetch('del',{
      idx: this.state.selected
    });
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
