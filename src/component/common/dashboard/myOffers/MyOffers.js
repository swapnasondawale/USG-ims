import React from 'react';
import './MyOffers.css';

export default function MyOffers() {
    return (
        <div className="my-offers-container">
            <div className="my-offers-content">
                <span className="my-notes-header">My Offers</span>
                <span className="number-indicator">Avail Benefits</span>

            </div>

            <div className="my-offers-content">
                <span className="my-notes-body">Testing My Notes</span>
                <span className="my-notes-body">
                    <div className="offers-title">Projected Savings: $23.8K</div>
                    <div className="offers-indicator"><div className="offers-indicator-color"></div></div>
                    <div className="offers-title">75% Claimed</div>
                </span>

            </div>

            <div className="my-offers-content">
                <span className="my-notes-body">Testing My Notes</span>
                <span className="my-notes-body">
                    <div className="offers-title">Projected Savings: $23.8K</div>
                    <div className="offers-indicator"><div className="offers-indicator-color"></div></div>
                    <div className="offers-title">75% Claimed</div>
                </span>

            </div>
        </div>
    )
}
