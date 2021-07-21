import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Alerts.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';


export default function Alerts() {
    return (
        <div>
            <span className="alert-main">Alerts <span className="number-indicator">7</span>
                <span className="alert-more-icon">
                    <MoreHorizIcon></MoreHorizIcon>
                </span>
            </span>

            <div className="alert-container">
                <div className="alert-main-container">
                    <span className="alert-main-content">
                        <span className="number-indicator">C</span>

                        <span style={{ 'padding-left': '0.3rem' }}>PA327462</span>
                        <span className="alert-content-right">
                            <span style={{ 'margin-top': '0.2rem' }}><LocationOnOutlinedIcon></LocationOnOutlinedIcon> </span>
                            <span>10028</span>
                        </span>
                    </span>
                    <div className="alert-main-content-body">
                        <span className="alert-main-content-body-span">Physical  $2,234 <FiberManualRecordIcon style={{ 'font-size': '0.5rem' }} /> 3 <AttachmentOutlinedIcon style={{ 'font-size': '1rem' }} /> <FiberManualRecordIcon style={{ 'font-size': '0.5rem' }} /> 12 <SmsOutlinedIcon style={{ 'font-size': '1rem' }} /></span>
                    </div>
                    <div className="alert-main-content-footer">
                        <span className="status-indicator">Overdue</span>
                        <span>Yesterday</span>
                    </div>
                </div>
                <div className="alert-main-container">
                    <span className="alert-main-content">
                        <span className="number-indicator">C</span>

                        <span style={{ 'padding-left': '0.3rem' }}>PA327462</span>
                        <span className="alert-content-right">
                            <span style={{ 'margin-top': '0.2rem' }}><LocationOnOutlinedIcon></LocationOnOutlinedIcon> </span>
                            <span>10028</span>
                        </span>
                    </span>
                    <div className="alert-main-content-body">
                        <span className="alert-main-content-body-span">Physical  $2,234 <FiberManualRecordIcon style={{ 'font-size': '0.5rem' }} /> 3 <AttachmentOutlinedIcon style={{ 'font-size': '1rem' }} /> <FiberManualRecordIcon style={{ 'font-size': '0.5rem' }} /> 12 <SmsOutlinedIcon style={{ 'font-size': '1rem' }} /></span>
                    </div>
                    <div className="alert-main-content-footer">
                        <span className="status-indicator">Overdue</span>
                        <span>Yesterday</span>
                    </div>
                </div>
                <div className="alert-main-container">
                    <span className="alert-main-content">
                        <span className="number-indicator">C</span>

                        <span style={{ 'padding-left': '0.3rem' }}>PA327462</span>
                        <span className="alert-content-right">
                            <span style={{ 'margin-top': '0.2rem' }}><LocationOnOutlinedIcon></LocationOnOutlinedIcon> </span>
                            <span>10028</span>
                        </span>
                    </span>
                    <div className="alert-main-content-body">
                        <span className="alert-main-content-body-span">Physical  $2,234 <FiberManualRecordIcon style={{ 'font-size': '0.5rem' }} /> 3 <AttachmentOutlinedIcon style={{ 'font-size': '1rem' }} /> <FiberManualRecordIcon style={{ 'font-size': '0.5rem' }} /> 12 <SmsOutlinedIcon style={{ 'font-size': '1rem' }} /></span>
                    </div>
                    <div className="alert-main-content-footer">
                        <span className="status-indicator">Overdue</span>
                        <span>Yesterday</span>
                    </div>
                </div>
                <div className="alert-main-container">
                    <span className="alert-main-content">
                        <span className="number-indicator">C</span>

                        <span style={{ 'padding-left': '0.3rem' }}>PA327462</span>
                        <span className="alert-content-right">
                            <span style={{ 'margin-top': '0.2rem' }}><LocationOnOutlinedIcon></LocationOnOutlinedIcon> </span>
                            <span>10028</span>
                        </span>
                    </span>
                    <div className="alert-main-content-body">
                        <span className="alert-main-content-body-span">Physical  $2,234 <FiberManualRecordIcon style={{ 'font-size': '0.5rem' }} /> 3 <AttachmentOutlinedIcon style={{ 'font-size': '1rem' }} /> <FiberManualRecordIcon style={{ 'font-size': '0.5rem' }} /> 12 <SmsOutlinedIcon style={{ 'font-size': '1rem' }} /></span>
                    </div>
                    <div className="alert-main-content-footer">
                        <span className="status-indicator">Overdue</span>
                        <span>Yesterday</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
