import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabComponentGenerator from '../tabComponents/tabComponentGenerator/TabComponentGenerator'
/**
 * This componet are used Tabs make it easy to explore and switch between different views.

 * @param {value} props used to set the Tab one name
 * @param {title} props used to set the name of second tab
 */
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
/**
 * use a special property named propTypes to set up type checking.
 * @param {children} props propTypes to set up type checking for children
 * @param {index} props  propTypes to set up type checking for index
 * @param {value} props  propTypes to set up type checking for value
 * 
 */

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

/***
 * function are used to set the value of tab
 * @param {*} index set value of tab
 */

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
/**
 * function is used set the width of tab 
 */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

/**
 * This is the main function class that we are excute the tab panel
 * @param {value} props value of tabs
 * @param {theme} props to set the width 
 * @param {classes} props to set css styling
 * 
 */
export default function TabPanelComponent(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  /**
   * this function are used to move tab1 to tab 2
   * 
   * @param {*} newValue  change the tab 1 to tab 2 onclick
   */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /**
   * function are used to set index
   * @param {*} index set value of index
   */
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {props.tabData.map((tabValue,index) => (
            <Tab label={tabValue.name} {...a11yProps(index)} />
            ))}
      }
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
         {props.tabData.map((tabValue,index) => (
          <TabPanel value={value} index={index} dir={theme.direction}>
             <TabComponentGenerator type={tabValue.type}  />
          </TabPanel>
             ))}

      </SwipeableViews>
    </div>
  );
}
