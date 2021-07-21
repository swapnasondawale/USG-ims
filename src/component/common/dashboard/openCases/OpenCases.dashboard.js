import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';
import './OpenCases.dashboard.css';
import { InputField, MaterialTables, MaterialActionTable } from '../../../../shared';
import TuneIcon from '@material-ui/icons/Tune';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { responseList } from './mock';
import Alerts from '../alerts/Alerts';
import MyNotes from '../myNotes/MyNotes';
import MyOffers from '../myOffers/MyOffers';
import CaseVolume from '../caseVolume/CaseVolume';


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
                <Box p={4}>
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
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

function numberIndicator() {
    return (
        <div>
            124
        </div>
    );
}

export default function OpenCases() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const titleList = [{
        title: 'ID',
        field: 'id',
        width: '0.5rem'
    }, {
        title: 'DUE DATE',
        field: 'createdDate',
        width: '2rem'
    },
    {
        title: 'STATUS',
        field: 'isValid',
        width: '1rem'
    },
    {
        title: 'ZIP',
        field: 'zipCode',
        width: '1rem'
    },
    {
        title: 'COVERGAE',
        field: 'coverageId',
        width: '1rem'
    },
    {
        title: 'TYPE',
        field: 'policyType',
        width: '2rem'
    },
    {
        title: 'VALUE',
        field: 'policySubType',
        width: '1rem'
    },
    {
        title: 'LATEST ACTIVITY',
        field: 'policyNumber',
        width: '4rem'
    },
    {
        title: 'VENDOR',
        field: 'tenantId',
        width: '2rem'
    }]

    console.log(responseList);
    const tableData = responseList;


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div style={{
            'display': 'flex',
            'flex-direction': 'column'
        }}>
            <div style={{
                'display': 'flex',
                'flex-direction': 'row'
            }}>
                <div className='main-grid'>
                    <AppBar position="static" color="default">
                        <div className="grid-header">
                            <div className="grid-header-name">Open Cases</div>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label={<React.Fragment>
                                    <div className="tab-label">
                                        Overdue
                                        <span className="number-indicator">124</span>
                                    </div>
                                </React.Fragment>} {...a11yProps(0)} />
                                <Tab label={<React.Fragment>
                                    <div className="tab-label">
                                        Unproductive
                                        <span className="number-indicator">124</span>
                                    </div>
                                </React.Fragment>} {...a11yProps(1)} />
                                <Tab label={<React.Fragment>
                                    <div className="tab-label">
                                        New
                                        <span className="number-indicator">124</span>
                                    </div>
                                </React.Fragment>} {...a11yProps(2)} />
                                <Tab label={<React.Fragment>
                                    <div className="tab-label">
                                        Open
                                        <span className="number-indicator">124</span>
                                    </div>
                                </React.Fragment>} {...a11yProps(3)} />
                            </Tabs>
                            <div className="search-box">
                                <InputField width={16} label='Search by Name, Type etc.' inputType='' inputIcon='search-box' inputPlaceholder='Search by Name, Type etc.'></InputField>
                            </div>
                            <div className="search-box-more-icon">
                                <TuneIcon></TuneIcon>
                            </div>
                            <div className="search-box-more-icon">
                                <MoreHorizIcon></MoreHorizIcon>
                            </div>
                        </div>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>

                            <MaterialTables title={'Cases'} columns={titleList} data={tableData}></MaterialTables>

                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <MaterialTables title={'Cases'} columns={titleList} data={tableData}></MaterialTables>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <MaterialTables title={'Cases'} columns={titleList} data={tableData}></MaterialTables>
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <MaterialTables title={'Cases'} columns={titleList} data={tableData}></MaterialTables>
                        </TabPanel>
                    </SwipeableViews>
                </div>
                <div className='alert-grid'>
                    <Alerts></Alerts>
                </div>
            </div>
            <div style={{
                'display': 'flex',
                'flex-direction': 'row'
            }}>
                <MyNotes></MyNotes>
                <CaseVolume></CaseVolume>
                <MyOffers></MyOffers>
            </div>
        </div>
    );
}
