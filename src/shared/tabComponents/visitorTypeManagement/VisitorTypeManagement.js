import React from 'react';
import './visitorTypeManagement.scss'
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
export default function VisitorTypeManagement(props) {
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
          Create New Visitor Type
        </div>
        <div className="col-12 container-userInfo">
          <label>Visitor Type</label><br />
          <input type="text" />
        </div><br />
        <div className="col-12">
          <label>Description</label>
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
              <div className="text-right">
                <Button onClick={toggleDrawer(anchor, true)}>Create Visitor Type</Button>
              </div>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <div className="col-12 user-internal">
          <div className="col-6">
            <h5>External</h5>
          </div>
          <div className="col-6">
            <h5>Internal</h5>
          </div>
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