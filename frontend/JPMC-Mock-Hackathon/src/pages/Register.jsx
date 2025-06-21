import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    phone: '', 
    password: '', 
    role: '' // Default role
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if (onRegister) {
      onRegister(formData);
    }
    console.log('Registering user: ', formData);
    alert(`Registered successfully as ${formData.role}`);
    navigate('/');
  };
  
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light p-4">
      <div className="bg-white rounded shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center fw-bold">Register</h2>
        <form onSubmit={handleSubmit} className="mt-3">
          
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="form-control"
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-control"
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input 
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="form-control"
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a strong password"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="form-select"
            >
                <option value=""></option>
              <option value="anganwadi">Anganwadi Worker</option>
              <option value="beneficiary">Beneficiary</option>
            </select>
          </div>
          
          <button 
            type="submit"
            className="btn btn-primary w-100"
          >
            Register
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
