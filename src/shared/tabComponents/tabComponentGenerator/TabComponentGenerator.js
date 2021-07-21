import React, { Component } from 'react'
import AllVisitors from '../allVisitors/AllVisitors'
import VisitorTypeManagement from '../visitorTypeManagement/VisitorTypeManagement'
import VisitorPurposeManagement from '../visitorPurposeManagement/VisitorPurposeManagement'
import VisitorReport from '../visitorReport/VisitorReport'
import EventReport from '../eventReport/EventReport'
import User from '../user/User'
import RolesAndPrivileges from '../rolesAndPrivileges/RolesAndPrivileges'
/** TabComponentGenerator will used to get the type of from props and navigate to that perticular component */
export class TabComponentGenerator extends Component {
    render() {

        switch (this.props.type) {
            case "users":
                return <User />
            case "rolesAndPrivileges":
                return <RolesAndPrivileges />
            case "allVisitors":
                return <AllVisitors />
            case "visitorTypeManagement":
                return <VisitorTypeManagement />
            case "visitorPurposeManagement":
                return <VisitorPurposeManagement />
            case "visitorReport":
                return <VisitorReport />
            case "eventReport":
                return <EventReport />
            default:
                return ""
        }
    }
}

export default TabComponentGenerator
