import React, { Component } from 'react'
import Overview from '../../overview/Overview'
import InternalUserManagement from '../../internalUserManagement/InternalUserManagement'
import VisitorManagement from '../../visitorManagement/VisitorManagement'
import Reports from '../../reports/Reports'
import AppointmentManagement from '../../appointmentManagement/AppointmentManagement'
import Notification from '../../notification/Notification'

/**
 * returns perticular component for navigation and common components
 */
export class Content extends Component {
    render() {
        return (
            <div>
                {this.props.content === "overview" ? <Overview /> : ""}
                {this.props.content === "internalUserManagement" ? <InternalUserManagement /> : ""}
                {this.props.content === "visitorManagement" ? <VisitorManagement /> : ""}
                {this.props.content === "reports" ? <Reports /> : ""}
                {this.props.content === "appointmentManagement" ? <AppointmentManagement /> : ""}
                {this.props.content === "notification" ? <Notification /> : ""}
                
            </div>
        )
    }
}

export default Content
