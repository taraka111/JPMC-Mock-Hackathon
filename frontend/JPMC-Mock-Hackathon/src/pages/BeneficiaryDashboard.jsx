import React from "react";
import { useNavigate } from "react-router-dom";

function BeneficiaryDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/login/beneficiary");
  };

  const handleBookSession = () => {
    // Redirect to booking form
    navigate("/beneficiary/book-session");
  };

  const handleViewSessions = () => {
    // Redirect to session history
    navigate("/beneficiary/session-history");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2>Welcome, Beneficiary!</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleBookSession} style={buttonStyle}>
          📅 Book Counselling Session
        </button>

        <button onClick={handleViewSessions} style={buttonStyle}>
          📖 View Session History
        </button>

        <button onClick={handleLogout} style={{ ...buttonStyle, backgroundColor: "#d9534f" }}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  display: "block",
  margin: "15px 0",
  padding: "12px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  width: "300px",
};

export default BeneficiaryDashboard;
