import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import cartwidjet from './Components/cartwidget.js/cartwidjet';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="INICIO" {...a11yProps(0)} />
          <Tab label="EXPLORAR" {...a11yProps(1)} />
          <Tab label="FAQ" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}


function Cartwidjet() {
     return (
      <div class="fas fa-shopping-cart">
       </div>
     );
   }
  
 
function ListContainer() {
  return (
    <div>
      <ul>
        <li greeting ="Bienvenidos a nuestra pagina">Bienvenidos a nuestra pagina</li>
      </ul>
    </div>
  );

  }
  

   export {SimpleTabs, ListContainer, cartwidjet}; //como hago para exportar multiples funciones??? 
   
