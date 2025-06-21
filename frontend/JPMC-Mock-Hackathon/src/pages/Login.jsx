import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Login() {
  const { role } = useParams();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/auth/login/${role}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Login successful");
        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "anganwadi") {
          navigate("/anganwadi/dashboard");
        } else {
          navigate("/beneficiary/dashboard");
        }
      } else {
        if (data.message === "User not found") {
          alert("User not found! Redirecting to register...");
          navigate("/register");
        } else {
          alert(data.message || "Login failed");
        }
      }
    } catch (error) {
      alert("An error occurred. Try later.");
      console.error(error);
    }
  };
  
  return (
    <div style={{ maxWidth: "300px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>{role?.toUpperCase()} Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "12px" }}>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "12px", textAlign: "right" }}>
          <a href="/forgot-password" style={{ fontSize: "14px", color: "blue" }}>
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
