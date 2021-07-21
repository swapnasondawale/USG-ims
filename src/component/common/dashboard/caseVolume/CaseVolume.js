import React from 'react';
import './CaseVolume.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function CaseVolume() {
    return (
        <div className="my-case-volume-container">
            <div className="my-notes-content">
                <span className="my-notes-header">Case Volume</span>
                <span><MoreHorizIcon></MoreHorizIcon></span>

            </div>
        </div>
    )
}
