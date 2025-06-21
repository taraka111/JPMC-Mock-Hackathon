import React from "react";
import { Link } from "react-router-dom";

function AWWDashboard() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#4CAF50" }}>Welcome to Anganwadi Dashboard</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "30px"
      }}>
        <div style={cardStyle}>
          <h3>View Beneficiaries</h3>
          <p>See the list of registered beneficiaries and their details.</p>
          <Link to="/anganwadi/beneficiaries">Go</Link>
        </div>

        <div style={cardStyle}>
          <h3>Schedule Counseling</h3>
          <p>Create or view upcoming counseling sessions.</p>
          <Link to="/anganwadi/sessions">Schedule</Link>
        </div>

        <div style={cardStyle}>
          <h3>Sync with Admin</h3>
          <p>Report data or updates to the Admin team.</p>
          <Link to="/anganwadi/sync">Sync Now</Link>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "20px",
  width: "250px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
};

export default AWWDashboard;
