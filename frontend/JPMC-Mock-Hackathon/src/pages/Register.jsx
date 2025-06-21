import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function Register() {
  const { role } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    contact: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (role === "admin") {
    alert("Admin registration is not allowed.");
    return;
  }

    try {
      const res = await fetch(`http://localhost:5000/api/${role}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful");
        navigate(`/login/${role}`);
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred during registration");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>{role?.toUpperCase() || "USER"} Registration</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Register
        </button>
      </form>

      <p style={{ marginTop: 20, fontSize: 14 }}>
        Already have an account?{" "}
        <Link to={`/login/${role || "user"}`} style={{ color: "blue" }}>
          Login here
        </Link>
      </p>
    </div>
  );
}

export default Register;
