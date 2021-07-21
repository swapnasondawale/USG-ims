import React from 'react';
import './MyNotes.css';

export default function MyNotes() {
    return (
        <div className="my-notes-container">

            <div className="my-notes-content">
                <span className="my-notes-header">My Notes</span>
                <span className="number-indicator">17</span>

            </div>

            <div className="my-notes-content">
                <span className="my-notes-body">Testing My Notes</span>
                <span className="my-notes-body">12/22/2021</span>

            </div>

            <div className="my-notes-content">
                <span className="my-notes-body">Testing My Notes</span>
                <span className="my-notes-body">12/22/2021</span>

            </div>
        </div>
    )
}
