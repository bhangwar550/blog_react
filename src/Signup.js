import React, { useState } from "react";

export default function Signup() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !state.name ||
      !state.email ||
      !state.password ||
      !state.confirmPassword
    ) {
      alert("Please put your data");
      return;
    }

    if (state.password !== state.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Form successfully submitted");

    setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "450px" }}>
        <h2 className="text-center fw-bold text-primary mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text"className="form-control form-control-lg"placeholder="Enter your name"name="name"value={state.name}onChange={handleChange}required/>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email"className="form-control form-control-lg"placeholder="Enter your email"name="email"value={state.email}onChange={handleChange} required/>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password"className="form-control form-control-lg"placeholder="Create password"name="password"value={state.password}onChange={handleChange} required/>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password"className="form-control form-control-lg"placeholder="Confirm password"name="confirmPassword"value={state.confirmPassword}onChange={handleChange}required/>
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-success btn-lg w-100">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}