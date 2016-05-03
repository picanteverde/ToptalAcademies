import React, { PropTypes } from 'react';
import { NavMenu } from './components/NavMenu';

let App = React.createClass({
  propTypes: {
    children: PropTypes.node
  },
  render(){
    return (
      <div>
        <NavMenu
          options={[
            {url: '/list', label: 'List'},
            {url: '/add', label: 'Add'}
          ]}
        />
       {this.props.children}
      </div>
    );
  }
});

export default App;
