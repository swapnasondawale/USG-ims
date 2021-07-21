import React from 'react';
import './rolesAndPrivileges.scss'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
/** This function will used to display User tab contents  */
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
export default function RolesAndPrivileges(props) {
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
          Create New Role
        </div>
        <div className="col-12 container-userInfo">
          <label>Role Name</label><br />
          <input type="text" />
        </div><br />
        <div className="col-12">
          <label>Select Privilege</label>
        </div>
        <div className="col-12 container-userInfo">
          <input type="checkbox" /> <label>Role Name</label><br />
        </div>
        <div className="col-12 container-userInfo">
          <input type="checkbox" /> <label>Role Name</label><br />
        </div>
        <div className="col-12 container-userInfo">
          <input type="checkbox" /> <label>Role Name</label><br />
        </div>
        <div className="col-12 container-userInfo">
          <input type="checkbox" /> <label>Role Name</label><br />
        </div>
        <div className="col-12 container-userInfo">
          <input type="checkbox" /> <label>Role Name</label><br />
        </div>
        <div className="col-12 container-userInfo">
          <input type="checkbox" /> <label>Role Name</label><br />
        </div>
        <div className="col-12 container-userInfo">
          <input type="checkbox" /> <label>Role Name</label><br />
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
              <div className="text-right">
                <Button onClick={toggleDrawer(anchor, true)}>Create Role</Button>
              </div>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-12">
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
      <div className="col-lg-6 col-md-12 col-12">
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
      <div className="col-lg-6 col-md-12 col-12">
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
      <div className="col-lg-6 col-md-12 col-12">
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
  );
}