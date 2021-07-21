import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DashboardOutlinedIcon from '../../../assets/images/alert-circle.svg';
import AssignmentOutlinedIcon from '../../../assets/images/alert-circle-1.svg';
import HomeWorkOutlinedIcon from '../../../assets/images/alert-circle-3.svg';
import ContactMailOutlinedIcon from '../../../assets/images/alert-circle-2.svg';
import ReceiptOutlinedIcon from '../../../assets/images/receipt-long-outlined-24px.svg';
import BarChartOutlinedIcon from '../../../assets/images/bar-chart-copy.svg';
import SettingsIcon from '../../../assets/images/alert-circle-4.svg';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import MarkunreadMailboxTwoToneIcon from '@material-ui/icons/MarkunreadMailboxTwoTone';
import { InputField, MaterialCard, SelectorButton, ButtonComponent } from '../../../shared';
import { StepOne, StepThree, StepTwo, StepFour, StepFive, StepSix, StepSeven, StepEight, StepNine } from '..';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CaseDetailsSvg from '../../../assets/images/Group 27.svg';
import InsuredSvg from '../../../assets/images/Shape.svg';
import InsuredSvgOn from '../../../assets/images/Shape2.svg';
import AddBoxIcon from '@material-ui/icons/AddBox';
import history from '../../../History';
import AllCases from './allCases/AllCases';
import InvoicesDashboard from './invoices/Invoices.dashboard';
import OpenCases from './openCases/OpenCases.dashboard';
import Onboarding from './onboarding/Onboarding';
import IMSLogoSvg from '../../../assets/images/IMSLogo.svg';



class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerMenuList: [{
                name: 'Dashboard',
                icon: <img src={DashboardOutlinedIcon} className="drawer-icon" />,
                link: 'create-case'
            },
            {
                name: 'Case',
                icon: <img src={AssignmentOutlinedIcon} className="drawer-icon" />,
                link: 'create-case'
            },
            {
                name: 'Home',
                icon: <img src={HomeWorkOutlinedIcon} className="drawer-icon" />,
                link: 'create-case'
            },
            {
                name: 'Contact',
                icon: <img src={ContactMailOutlinedIcon} className="drawer-icon" />,
                link: 'create-case'
            },
            {
                name: 'Receipt',
                icon: <img src={ReceiptOutlinedIcon} className="drawer-icon" />,
                link: 'create-case'
            },
            {
                name: 'Barchart',
                icon: <img src={BarChartOutlinedIcon} className="drawer-icon" />,
                link: 'create-case'
            },
            {
                name: 'Setting',
                icon: <img src={SettingsIcon} className="drawer-icon" />,
                link: 'create-case'
            }],
            stepNumber: 1,
            stepValue:
                [{
                    label: 'Case Details',
                    id: 1
                },
                {
                    label: 'Insured Details',
                    id: 2
                }]

        }
    }




    navigateToNext = (value) => {
        this.setState({ stepNumber: value });
        window.scrollTo(0, 0);
    }

    iconForStepper = () => {

        return <div className="circle">
            <div className="icon-class-step">
                <img src={CaseDetailsSvg} />
                {/* <SaveOutlinedIcon /> */}
            </div>
        </div>

    }

    iconForStepper2 = () => {

        return <div className={this.state.stepNumber == 2 ? "circle" : "circle-off"}>
            <div className={this.state.stepNumber == 2 ? "icon-class-step" : "icon-class-step-off"}>
                <img src={this.state.stepNumber == 2 ? InsuredSvgOn : InsuredSvg} />
                {/* <SaveOutlinedIcon /> */}
            </div>
        </div>

    }

    render() {
        return (
            <div className="root">
                <CssBaseline />
                <AppBar position="fixed" className="appBar">
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            <div className="container-header">

                                <div className="titleHeader">
                                    <div className="titleName"> Hello</div>
                                    <div className="titleSubName"> Tokio Insurnce Group</div>
                                </div>

                                <div className="monthFilter">
                                    <table className="filterTable">
                                        <tr>
                                            <td className="tdCss">Week</td>
                                            <td className="tdCss">Month</td>
                                            <td className="tdCss">Quarter</td>
                                            <td className="tdCss">Year</td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="backArrowDash" style={{ 'margin-right': '6rem' }}>

                                    {/* <div className="verticleLine"></div> */}
                                    <AddBoxIcon className="headerTextDashboard" />
                                    <span className="headerTextDashboard" onClick={() => this.setState({ stepNumber: this.state.stepNumber + 1 })}>
                                        NEW
                                    </span>
                                    {/* <ExpandMoreOutlinedIcon  /> */}
                                </div>

                            </div>

                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className="drawer"
                    variant="permanent"
                    classes={{
                        paper: "drawerPaper"
                    }}
                >

                    <Toolbar>
                        <div className="logo"> <img src={IMSLogoSvg} className="logo-icon" />  </div>
                    </Toolbar>
                    <div className="drawerContainer">
                        <List>
                            {this.state.drawerMenuList.map((text, index) => (
                                <ListItem button onClick={() => this.props.history.push(text.link)} key={text}>
                                    {text.icon}
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
                <main className="content">
                    <Typography>

                        <div className="createCaseBody">

                            <div className="formContainer">

                                <div className="dashboard-header">
                                    <AllCases></AllCases>

                                    <AllCases></AllCases>

                                    <AllCases></AllCases>
                                    <Onboarding></Onboarding>
                                    {/* <AllCases></AllCases> */}
                                </div>
                                <div className="dashboard-body">
                                    <OpenCases></OpenCases>
                                </div>
                                {this.state.stepNumber == 1 ?
                                    <div>
                                        {/* <StepOne></StepOne> */}
                                        {/* <div className="addPolicyDetailsFooter">
                                            <ButtonComponent
                                                onClickFun={() => this.navigateToNext(2)}
                                                width={121}
                                                height={48}
                                                fontSize={16}
                                                borderColor='rgba(255,236,192,0.79)'
                                                backgroudColor='#43A1F6'
                                                value='Next'
                                                border='1'
                                                textColor="white"
                                                rightIcon='rightArrow'
                                                borderShadow={`0 12px 11px -10px #43A1F6`}
                                            ></ButtonComponent>
                                        </div> */}
                                    </div> :
                                    this.state.stepNumber == 2 ?
                                        <div>
                                            {/* <StepTwo></StepTwo> */}

                                        </div>

                                        :
                                        <div>
                                            {/* <StepTwo></StepTwo> */}

                                        </div>
                                    // </div>
                                }

                            </div>

                        </div>
                    </Typography>
                    {/* <Toolbar /> */}
                    {/* <Typography paragraph>
                        
                    </Typography> */}
                    {/*
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
                </main>
            </div>
        );
    }
}

Dashboard.propTypes = {

};

export default Dashboard;