import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './tab.scss'
import RightDrawer from '../rightDrawer/RightDrawer';

/**
 * this function are used to open the tab 
 * @param {*} props to pass the value from parent component
 */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
 * To set the index value of tabs
 */

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
/**
 * Used for set index
 * @param {*} index 
 */
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
/**
 * @param{*} UseStyle used to set stylesheet to the tab component
 */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
/**
 * MAin function of tab to move the data from Tab1 to Tab2
 */
export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Roles And Privileges" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="row">
          <div className="col-12">
            <div className="cards searchContainerTab">
              <input type="text" placeholder="Search role" />
              <RightDrawer className="text-right" />
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="thumb">User</div>
                <div className="info">
                  <div><strong>David Jamesa</strong></div>
                  <div>United State</div>
                  <div>Mobile: 9898989898</div>
                </div>
              </div>
              <div><span className="icon-edit-1"></span> <strong>x</strong></div>
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="thumb">User</div>
                <div className="info">
                  <div><strong>David James</strong></div>
                  <div>United State</div>
                  <div>Mobile: 9898989898</div>
                </div>
              </div>
              <div><span className="icon-edit-1"></span> <strong>x</strong></div>
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="thumb">User</div>
                <div className="info">
                  <div><strong>David James</strong></div>
                  <div>United State</div>
                  <div>Mobile: 9898989898</div>
                </div>
              </div>
              <div><span className="icon-edit-1"></span> <strong>x</strong></div>
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="thumb">User</div>
                <div className="info">
                  <div><strong>David James</strong></div>
                  <div>United State</div>
                  <div>Mobile: 9898989898</div>
                </div>
              </div>
              <div><span className="icon-edit-1"></span> <strong>x</strong></div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="row">
          <div className="col-12">
            <div className="cards searchContainerTab">
              <input type="text" placeholder="Search role" />
              <div className="row">
                <div className="col-12 text-right searchContainerTab-drawer">
                  <RightDrawer />
                  <RightDrawer />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="info">
                  <div><strong>Super Admin</strong></div>
                  <div>United State United State United State United State United State United State United State</div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 searchContainerTab-cardIcons">
                  <span className="icon-edit-1"></span>
                  <strong>x</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="info">
                  <div><strong>Super Admin</strong></div>
                  <div>United State United State United State United State United State United State United State</div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 searchContainerTab-cardIcons">
                  <span className="icon-edit-1"></span>
                  <strong>x</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="info">
                  <div><strong>Super Admin</strong></div>
                  <div>United State United State United State United State United State United State United State</div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 searchContainerTab-cardIcons">
                  <span className="icon-edit-1"></span>
                  <strong>x</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="info">
                  <div><strong>Super Admin</strong></div>
                  <div>United State United State United State United State United State United State United State</div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 searchContainerTab-cardIcons">
                  <span className="icon-edit-1"></span>
                  <strong>x</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="info">
                  <div><strong>Super Admin</strong></div>
                  <div>United State United State United State United State United State United State United State</div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 searchContainerTab-cardIcons">
                  <span className="icon-edit-1"></span>
                  <strong>x</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="cards">
              <div>
                <div className="info">
                  <div><strong>Super Admin</strong></div>
                  <div>United State United State United State United State United State United State United State</div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 searchContainerTab-cardIcons">
                  <span className="icon-edit-1"></span>
                  <strong>x</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}