import React from 'react';
import './AllCases.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function AllCases() {
    return (
        <div className="all-cases-card">
            <div className="all-cases-lable">All Cases</div>
            <div className="all-cases-number">176</div>
            <div className="all-cases-range">
                <div className="all-cases-range-blue" style={{ 'width': '90px', 'background-color': '#43A1F6' }}></div>
                <div className="all-cases-range-blue" style={{ 'width': '180px', 'background-color': '#53C07B' }}></div>
                <div className="all-cases-range-blue" style={{ 'width': '40px', 'background-color': '#F9698C' }}></div>
            </div>
            <div className="all-cases-bullets">
                <div className="all-cases-bullets-open"><FiberManualRecordIcon style={{ 'color': '#43A1F6' }} fontSize='small'></FiberManualRecordIcon>Open</div>
                <div className="all-cases-bullets-open"><FiberManualRecordIcon style={{ 'color': '#53C07B' }} fontColor="#53C07B" fontSize='small'></FiberManualRecordIcon>Closed</div>
                <div className="all-cases-bullets-open"><FiberManualRecordIcon style={{ 'color': '#F9698C' }} fontColor="#F9698C" fontSize='small'></FiberManualRecordIcon>Overdue</div>
            </div>
        </div>
    )
}
