import React from "react";
import Footer from "./Footer";
import { useState } from "react";
export default function Login() {
  const [state, setState] = useState({
    email:"",
    password:""
  });
  const handleChange=(e)=>{setState({
state,
[e.target.name]: e.target.value,
  });};
  const handleSubmit=(e)=>{
e.preventDefault();
 
  if (!state.name||!state.password)  {
    alert("please put your correct  data");
    return;
  }
  alert("submit successfull");
  setState({
      email: "",
      password: "",
    });
};
  return (
    <>
      {/* LOGIN SECTION */}
      <div className="container d-flex justify-content-center align-items-center min-vh-100">

        <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "420px" }}>

          <h2 className="text-center fw-bold text-primary mb-4">
            Login
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email"className="form-control form-control-lg"placeholder="Enter your email"required name="email" value={state.email} onChange={handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password"className="form-control form-control-lg"placeholder="Enter your password"required name="password" value={state.password} onChange={handleChange}/>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label className="form-check-label" htmlFor="remember">
                  Remember me
                </label>
              </div>

              <a href="#" className="text-decoration-none">
                Forgot?
              </a>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100">
              Login
            </button>

          </form>
        </div>

      </div>

      {/* FOOTER OUTSIDE */}
      <Footer />
    </>
  );
}