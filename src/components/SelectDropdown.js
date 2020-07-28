import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { MenuItem,  Menu  } from '@material-ui/core';

/*
    ```````````````````````````````````````````````````````````````````````````````````````````````````
    Link untuk main- mian with Anchor : "https://material-ui.com/components/popover/#anchor-playground"

    ```````````````````````````````````````````````````````````````````````````````````````````````````
*/

export const SelectMenu = withStyles({

    paper: {
      border: '1px solid #d3d4d5',
    },

  })(props => (

    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        // transitionDuration
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      {...props}
    />
  ));
  
export const SelectMenuItem = withStyles(theme => ({

    root: {
      '&:focus': {                
        color: 'white',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      }
    
    },
  }))(MenuItem);