import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row g-5">

          {/* About Us */}
          <div className="col-md-4">
            <h4 className="mb-3 text-primary">About Us____</h4>
            <p className="footer-link">
              Blog Management is a platform that connects Publishers with
              Advertisers. It is a Publishing and Pay model that ensures regular
              guest posting orders for publishers.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4">
            <h4 className="mb-3 text-primary">Useful Links____</h4>

            <ul className="list-unstyled m-0 p-0">
              

              <li className="mb-2 footer-link">
                <Link to="/" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              

              <li className="mb-2 footer-link">
                <Link to="/" className="text-light text-decoration-none">
                  Feature
                </Link>
              </li>

              <li className="mb-2 footer-link">
                <Link to="/" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
              <li className="mb-2 footer-link">
                <Link to="" className="text-light text-decoration-none">
                  Help
                </Link>
              </li>

            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-4">
            <h4 className="mb-3 text-primary">Follow Us____</h4>

            <ul className="list-unstyled m-0 p-0">
              <li className="mb-2 footer-link">Facebook</li>
              <li className="mb-2 footer-link">Instagram</li>
              <li className="mb-2 footer-link">Twitter</li>
              <li className="mb-2 footer-link">LinkedIn</li>
              <li className="mb-2 footer-link">YouTube</li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary mt-4" />

        <div className="text-center pt-2">
          <p className="mb-0">
            © 2026 Your Company. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}