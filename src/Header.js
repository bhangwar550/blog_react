import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
   
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage: "url('/images/1.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >
     
      <div className="container" id="header">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-6">

            <h1 className="fw-bold text-primary">
              Get Paid_____
            </h1>

            <h1 className="text-secondary mb-3">
              by Selling Guest Posts &
            </h1>

            <h1 className="text-secondary mb-3">
              Publishing Content
            </h1>

            <p className="text-muted">
              I specialize in building modern, responsive and user-friendly web applications using React.js, Bootstrap and clean UI design.
            </p>

            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />

              <button
                className="btn btn-primary"
                type="button"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>

          </div>

          {/* Right Side */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={process.env.PUBLIC_URL + "/images/person-with-laptop.svg"}
              alt="Profile"
              className="img-fluid"
              style={{
                maxWidth: "350px",
                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.15))"
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}