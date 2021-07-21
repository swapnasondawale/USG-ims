import React from 'react';
import './allVisitors.scss'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { ComponentGenerator } from '../../componentGenrator/ComponentGenerator';
/** This function will used to display User tab contents  */
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
const data = [
  {
    srNo: '1',
    name: "Marty",
    organization: "Bajaj",
    _id: "1",
    mobile: "9503577602",
    email: 'a@gmail.com',
    createdAt: '15/06/2020'
  },
  {
    srNo: '2',
    name: "mayur",
    organization: "Apptware",
    _id: "2",
    mobile: "12345678",
    email: 'm@gmail.com',
    createdAt: '12/06/2020'
  },
  {
    srNo: '3',
    name: "vimit",
    organization: "icici",
    _id: "3",
    mobile: "12345678",
    email: 'v@gmail.com',
    createdAt: '11/06/2020'
  },
  {
    srNo: '4',
    name: "Salman",
    organization: "Bajaj Finserv",
    _id: "4",
    mobile: "12345678",
    email: 's@gmail.com',
    createdAt: '14/06/2020'
  },
  {
    srNo: '5',
    name: "Neha",
    organization: "Bajaj",
    _id: "5",
    mobile: "12345678",
    email: 'N@gmail.com',
    createdAt: '15/06/2020'
  },
  {
    srNo: '6',
    name: "Sayali",
    organization: "Bajaj",
    _id: "6",
    mobile: "12345678",
    email: 'sayali@gmail.com',
    createdAt: '15/06/2020'
  },
]
/**
* @param {*} columns contains table column name
*/
const columns = [
  { title: "Sr.No", field: "srNo" },
  { title: "Name", field: "name" },
  { title: "Organisation", field: "organization" },
  { title: "Visitor Id", field: '_id' },
  { title: "Contact", field: 'mobile' },
  { title: "Email Id", field: 'email' },
  { title: "Date", field: 'createdAt' },
]
export default function AllVisitors(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const dropDownData = ['option1', 'option2', 'option3'];
  /**
   * function are used to add drawer on right side of the browser
   * @param{*} toggleDrawer are used to open side drawer
   * 
   */
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  /**
   * Function are used to list out the element in the drawer
   * @param {*} anchor 
   */
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <div className="container">
        <div className="col-12 container-newUser">
          Add New User
        </div>
        <div className="col-12 container-userInfo">
          <label>Name</label><br />
          <input type="text" />
        </div>
        <div className="col-12">
          <label>Organization</label><br />
          <input type="text" />
        </div>
        <div className="col-12">
          <label>Visitor ID</label><br />
          <input type="text" />
        </div>
        <div className="col-12">
          <label>Visitor Type</label><br />
          <input type="text" />
        </div>
        <div className="col-12">
          <label>Contact</label><br />
          <input type="text" />
        </div>
        <div className="col-12">
          <label>Email ID</label><br />
          <input type="text" />
        </div><br />
        <div className="col-12">
          <button onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>Apply</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-12">
        <div className=" cards searchContainerTab">
          <input type="text" placeholder="Search role" />
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>Add Visitor</Button>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="col-12">
        <ComponentGenerator type="actionTable" data={data} columns={columns} />
      </div>
    </div>
  );
}