import React from 'react';
import './Onboarding.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function Onboarding() {
    return (
        <div>
            <div className="onboarding-cases-card2">
                <div>
                    <div className="onboarding-cases-lable">ONBOARDED: 7</div>
                    <div className="onboarding-cases-number">4 Vendors, 3 Carriers</div>
                </div>
                <div>
                    <div className="view-button">View</div>
                </div>
            </div>
            <div className="onboarding-cases-card2">
                <div>
                    <div className="onboarding-cases-lable">INVOICES: 34</div>
                    <div className="onboarding-cases-number">30 Paid, 4 Overdue</div>
                </div>
                <div style={{ 'margin-left': '0.6rem' }}>
                    <div className="view-button">View</div>
                </div>
            </div>
        </div>
    )
}
