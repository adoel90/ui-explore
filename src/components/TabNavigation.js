import React, { useState } from 'react';
import { Link } from '@reach/router'

const TabNavigation = props => {  


    return (
        <>
            
            <nav>
                <NavLink to="/">Button Snackbar</NavLink> 
                <NavLink to="/button-menu-dropdown">Button Menu Dropdown</NavLink>
            </nav>            
            {props.children}
        </>

    )
};

export default TabNavigation;

const NavLink = props => (
    
    <Link 
        getProps={({ isCurrent }) => {
            
            return {
                style: {
                    color: isCurrent ? "red" : "blue"
                }
            };
        }}
        {...props}  
    />
  );
  