// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Importing CSS for styling

function Dashboard() {
    return (
        <div className="dashboard">
           
            <div className="button-container">
                <Link to="/game-setup" className="dashboard-button">Game Setup</Link>
                <Link to="/missionboard" className="dashboard-button">Missions Board</Link>
                <Link to="/shadow-ledger" className="dashboard-button">Shadow Ledger</Link>
                <Link to="/rule-book" className="dashboard-button">Rule Book</Link>
                <Link to="/contractprofileform" className="dashboard-button">The Vault Keeper</Link>
            </div>
        </div>
    );
}

export default Dashboard;
