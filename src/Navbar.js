import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm py-2"
      style={{ backgroundColor: "#e5f2fa" }}
    >
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.svg"}
            alt="Logo"
            style={{ height: "45px" }}
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-3 text-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/feature">Features</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/help">Help</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

          </ul>

          {/* Right Button */}
          <Link
            className="btn btn-primary px-4 rounded-pill ms-lg-3 mt-3 mt-lg-0"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}