import React from 'react';

let Clickable = React.createClass({
    handleClick(e){
        this.props.handleClick(e);
    },
    render(){
        return (
      <div onClick={this.handleClick}>{this.props.label}</div>
    );
    }
});

export default Clickable;
