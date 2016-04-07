import React from 'react';

let Item = React.createClass({
    render(){
        return (
      <div>
        <span>{this.props.content.name}</span>
        <span>{this.props.content.age}</span>
      </div>
    );
    }
});

export default Item;
