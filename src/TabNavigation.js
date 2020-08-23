import React, { useState } from 'react';
import { Link } from "@reach/router";
import { Button, Tabs, Tab, makeStyles, Box, useTheme} from '@material-ui/core'
import Parent from './components/ParentComponent'
import Snackbeer from './components/Snackbeer'
import ButtonMenuDropdown from './components/ButtonMenuDropdown'
import ButtonMenuDropdownWithNestedItem from './components/ButtonMenuDropdownWithNestedItem';


const _ = require("lodash")


const useStyle = makeStyles(theme => ({
  navigation: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    backgroundColor: 'transparent',
    borderRadius: 3,
    border: 0,
    color: theme.palette.primary.main,
    height: 32,
    padding: '0 30px',    
    // boxShadow: `0 3px 5px 2px ${theme.palette.common.grey}`
  }
}))

const TabNavigation = props => {  

  const classes = useStyle();
  const theme = useTheme()  

  const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
                        
        return {
          style: {            
            borderBottom: isCurrent ? `2px solid #6a1b9a` : "0px solid grey",
            textDecoration: 'none'
          }
        };
      }}
    />
  );
  

  return (
    <div>   
      <nav>         
        <Box display='flex' flexDirection='row' >
          {
            dummy.length > 0 && dummy.map((item, i) => (

              <NavLink to={item.name} key={i} theme={theme} >
                  <Box className={classes.navigation}>
                    <Button color='primary'>
                      {item.name}
                    </Button>
                  </Box>
              </NavLink>             
            ))
          }
        </Box>      
      </nav>
        {props.children}
  
    </div>
    
  );
}

export default TabNavigation;





const dummy = [ 
  {
    id: 1, 
    name : "Snackbar"
  },
  {
    id: 2, 
    name : "Dropdown"
  },
  {
    id: 3, 
    name : "Table"
  },
]