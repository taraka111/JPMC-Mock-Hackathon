import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function RoleSelector() {
  const navigate = useNavigate();

  const roles = [
    { name: "Admin", path: "/login/admin", variant: "primary" },
    { name: "Anganwadi Worker", path: "/login/anganwadi", variant: "success" },
    { name: "Beneficiary", path: "/login/beneficiary", variant: "warning" },
  ];

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h2 className="mb-4">Select Role</h2>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {roles.map((role) => (
          <div
            key={role.name}
            className={`card shadow-sm rounded text-center border-${role.variant}`}
            style={{ width: "220px", cursor: "pointer", transition: "transform 0.2s" }}
            onClick={() => navigate(role.path)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div className="card-body p-4">
              <h5 className={`card-title text-${role.variant}`} style={{ fontWeight: "600" }}>
                {role.name}
              </h5>
              <p className="card-text text-muted">
                Click to proceed as {role.name}.
              </p>
              <button className={`btn btn-${role.variant}`} onClick={(e) => { e.stopPropagation(); navigate(role.path); }}>
                Continue
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoleSelector;
