import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from "@reach/router";
import { Provider } from 'react-redux';
import store from './redux/store'
import TabNavigation from './TabNavigation';
import Parent from './components/ParentComponent';
import Dropdown from './components/ButtonMenuDropdown'
import Snackbeer from './components/Snackbeer'

import * as serviceWorker from './serviceWorker';

import './index.css'


/*
  ``````````````````
  Font-family Global

  ``````````````````
*/
require('typeface-open-sans')

/*
  `````````````````````````````````````
  Theme of Material Design Color System
  
  `````````````````````````````````````
*/

const theme = createMuiTheme({
  

  palette: {
    primary: {      
      light:'#9b4dcb',
      main: '#6a1b9a',
      dark:'#37006a',
      contrastText:'#ffffff'

    },
    secondary: {
      light:'#ffe54c',
      main: '#ffb300',
      dark:'#c68400',
      // contrastText: 'black'
    },
  
    error: {
      light: '#bf334c',
      main:'#B00020',
      dark:'#7b0016',
      contrastText: 'white'
    },
    warning: {
      light:'#ffee33',
      main: '#ffea00',
      dark: '#b2a300',
      contrastText: 'white'

    },
    success: {
      light: '#91ff35',
      main: '#76ff03',
      dark: '#52b202',
      contrastText: 'white'
    },
    common: {
      white : '#ffffff',
      black: 'black',
      transparent: 'transparent',
      grey: 'grey'
    }
  },

  surface:{

    main: '#FFFFFF'  
  },
  background: {

    main:'#FFFFFF'
  },

});

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

ReactDOM.render(

  <React.StrictMode>    
    <ThemeProvider theme={theme}>  
      <Provider store={store}>    
        <Router>                
          <TabNavigation path="/">        
             <Parent  path="/Snackbar" />  
             <Dropdown path="/Dropdown" />             
          </TabNavigation>
        </Router>         

        <Snackbeer />                   
      </Provider>
    </ThemeProvider>    
  </React.StrictMode>,
  document.getElementById('root')

);

serviceWorker.unregister();


