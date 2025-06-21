import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function Login() {
  const { role } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/auth/login/${role}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful");
        navigate(`/${role}/dashboard`);
      } else {
        if (res.status === 404) {
          alert("User not found! Redirecting to register...");
          navigate(`/register/${role}`);
        } else {
          alert(data.message || "Login failed");
        }
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>{role?.toUpperCase() || "USER"} Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />
        <div style={{ textAlign: "right", marginBottom: 12 }}>
          <Link to="/forgot-password" style={{ fontSize: 14, color: "blue" }}>
            Forgot password?
          </Link>
        </div>
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Login
        </button>
      </form>

      <p style={{ marginTop: 20, fontSize: 14 }}>
        Don’t have an account?{" "}
        <Link to={`/register/${role || "user"}`} style={{ color: "blue" }}>
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;
