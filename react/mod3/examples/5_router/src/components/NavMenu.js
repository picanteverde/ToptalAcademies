import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export let NavMenu = React.createClass({

  propTypes: {
    options: PropTypes.array.isRequired
  },

  render(){
    const { props } = this;
    return (
      <ul>
        {props.options.map((op, idx) => {
          return (
            <li key={idx}>
              <Link
                to={op.url}
                activeStyle={{ color: 'red' }}
              >
                {op.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
});
