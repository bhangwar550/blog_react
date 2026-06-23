import React from "react";
import Footer from "./Footer";

export default function About() {

  return (
    <>
      <div className="container py-5 position-relative overflow-hidden">

        {/* BACKGROUND */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/management.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            opacity: 0.2,
          }}
        />

        <div className="position-relative" style={{ zIndex: 1 }}>

          {/* TOP SECTION */}
          <div className="row align-items-center mb-5">

            <div className="col-md-6">
              <h1 className="fw-bold text-primary mb-3">About Us</h1>
              <p className="text-muted">
                Blog Management helps publishers earn money through content placement.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/images/sitting-women-with-analytics.svg"
                alt="about"
                className="img-fluid"
                style={{ maxWidth: "400px" }}
              />
            </div>

          </div>

          {/* TITLE */}
          <div className="text-center mb-4">
            <h3 className="fw-bold text-primary">
              A Real Platform for Publishers
            </h3>
          </div>

          <p className="text-dark">
            Built to solve trust issues in guest posting and ensure secure payments.
          </p>

          {/* COMPARISON */}
          <div className="row mt-4 g-4">

            {/* PROBLEM */}
            <div className="col-md-6">

              <h4 className="text-danger fw-bold mb-3">Problem</h4>

              <div className="p-3 bg-danger text-white rounded mb-3">
                Publishers struggle with traffic and marketing.
              </div>

              <div className="p-3 bg-danger text-white rounded mb-3">
                Many cases of unpaid work.
              </div>

              <div className="p-3 bg-danger text-white rounded">
                Low quality content issues.
              </div>

            </div>

            {/* SOLUTION */}
            <div className="col-md-6">

              <h4 className="text-success fw-bold mb-3">Solution</h4>

              <div className="p-3 bg-success text-white rounded mb-3">
                We handle marketing for publishers.
              </div>

              <div className="p-3 bg-success text-white rounded mb-3">
                Guaranteed payments.
              </div>

              <div className="p-3 bg-success text-white rounded">
                Content is verified before publishing.
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}