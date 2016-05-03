import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';


export let NavMenu = React.createClass({

  propTypes: {
    options: PropTypes.array.isRequired
  },

  contextTypes: {
    router: PropTypes.object.isRequired
  },

  goTo(url){
    this.context.router.push(url);
  },

  render(){
    const { props } = this;
    return (
      <AppBar
        title="Sample"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            {props.options.map((op, idx) => {
              return (
                <MenuItem
                  key={idx}
                  primaryText={op.label}
                  onClick={()=>this.goTo(op.url)}
                />
              );
            })}
          </IconMenu>
        }
      />
    );
  }
});
