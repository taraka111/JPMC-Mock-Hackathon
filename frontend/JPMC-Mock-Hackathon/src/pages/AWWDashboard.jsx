import React from "react";
import { Link } from "react-router-dom";
import "../styles/AWWDashboard.css"; // Adjust the path as necessary

function AWWDashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Anganwadi Dashboard</h1>

      <div className="cards-grid">
        <div className="card">
          <h3>View Beneficiaries</h3>
          <p>See the list of registered beneficiaries and their details.</p>
          <Link to="/anganwadi/beneficiaries" className="card-button">Go</Link>
        </div>

        <div className="card">
          <h3>Schedule Counseling</h3>
          <p>Create or view upcoming counseling sessions.</p>
          <Link to="/anganwadi/sessions" className="card-button">Schedule</Link>
        </div>

        <div className="card">
          <h3>Sync with Admin</h3>
          <p>Report data or updates to the Admin team.</p>
          <Link to="/anganwadi/sync" className="card-button">Sync Now</Link>
        </div>
      </div>
    </div>
  );
}

export default AWWDashboard;
