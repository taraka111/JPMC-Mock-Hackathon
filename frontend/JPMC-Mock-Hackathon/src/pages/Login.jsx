import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../styles/login.css"; // Adjust the path if needed


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
  <div className="login-container">
    <h2>{role?.toUpperCase() || "USER"} Login</h2>
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="forgot-link">
        <Link to="/forgot-password">Forgot password?</Link>
      </div>
      <button type="submit">Login</button>
    </form>
    <p>
      Don’t have an account?{" "}
      <Link to={`/register/${role || "user"}`}>Register here</Link>
    </p>
  </div>
);

}

export default Login;