import React from "react";
import Footer from "./Footer";

export default function Feature() {
  return (
    <>
      <div
        className="container-fluid position-relative"
        style={{
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(243,244,248,0.4), rgba(226,221,221,0.6)), url('/images/management.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            animation: "zoomMove 2s ease-in-out infinite",
          }}
        />

        {/* CONTENT */}
        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>

          {/* HERO */}
          <div className="row align-items-center">
            <div className="col-md-5">
              <h1 className="fw-bold text-primary">Our Features</h1>
              <p className="text-dark lh-lg">
               Are you a Publisher or a Blogger who would want to be a part of the Blog Management platform? If you want to know more about how you can join the platform, list your websites, fix prices for the various services you offer, please fill in the Contact Form below. Our Support Team will reach out to you and help you with the onboarding process.
              </p>
            </div>

            <div className="col-md-7 text-center">
              <img
                src="/images/girl-showing-features.svg"
                alt="Feature"
                className="img-fluid"
                style={{
                  maxWidth: "400px",
                  filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.15))",
                }}
              />
            </div>
          </div>

          {/* TITLE */}
          <div className="mt-5 text-center">
            <h2 className="fw-bold text-primary">Features</h2>
            <hr
              style={{
                width: "80px",
                margin: "10px auto",
                border: "2px solid #0d6efd",
              }}
            />
          </div>

          {/* CARDS */}
          <div className="row mt-4 g-4">

            {/* CARD 1 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center shadow-sm h-100 border-0 feature-card">
                <img
                  src="/images/cup.png"
                  className="card-img-top p-3 mx-auto"
                  style={{ height: "120px", objectFit: "contain" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="text-primary fw-bold">BM Score</h5>
                  <p className="text-muted small">
                    Internal ranking system based on SEO metrics like DA, PA, DR, traffic etc.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center shadow-sm h-100 border-0 feature-card">
                <img
                  src="/images/star.png"
                  className="card-img-top p-3 mx-auto"
                  style={{ height: "120px", objectFit: "contain" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="text-primary fw-bold">Featured Listing</h5>
                  <p className="text-muted small">
                    Top featured sites shown to advertisers for more visibility and orders.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center shadow-sm h-100 border-0 feature-card">
                <img
                  src="/images/man.png"
                  className="card-img-top p-3 mx-auto"
                  style={{ height: "120px", objectFit: "contain" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="text-primary fw-bold">Gray Niche</h5>
                  <p className="text-muted small">
                    Casino, CBD, Adult, Crypto niches supported with separate pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center shadow-sm h-100 border-0 feature-card">
                <img
                  src="/images/deal.png"
                  className="card-img-top p-3 mx-auto"
                  style={{ height: "120px", objectFit: "contain" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="text-primary fw-bold">Offers & Bidding</h5>
                  <p className="text-muted small">
                    Publishers can bid on bulk offers to get more orders.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center shadow-sm h-100 border-0 feature-card">
                <img
                  src="/images/realtime.png"
                  className="card-img-top p-3 mx-auto"
                  style={{ height: "120px", objectFit: "contain" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="text-primary fw-bold">Real Time Metrics</h5>
                  <p className="text-muted small">
                    Live SEO metrics using MOZ and AHREFS APIs.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center shadow-sm h-100 border-0 feature-card">
                <img
                  src="/images/menu.png"
                  className="card-img-top p-3 mx-auto"
                  style={{ height: "120px", objectFit: "contain" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="text-primary fw-bold">Auto Task Validation</h5>
                  <p className="text-muted small">
                    Automatically checks keyword and landing page before approval.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 7 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center shadow-sm h-100 border-0 feature-card">
                <img
                  src="/images/verify.png"
                  className="card-img-top p-3 mx-auto"
                  style={{ height: "120px", objectFit: "contain" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="text-primary fw-bold">Domain Verification</h5>
                  <p className="text-muted small">
                    Ensures transparency by verifying real site owners.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 8 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center shadow-sm h-100 border-0 feature-card">
                <img
                  src="/images/login.png"
                  className="card-img-top p-3 mx-auto"
                  style={{ height: "120px", objectFit: "contain" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="text-primary fw-bold">Task Health Status</h5>
                  <p className="text-muted small">
                    Detects issues in links, anchors, and indexing problems.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />

      {/* ANIMATION + EFFECTS */}
      <style>
        {`
          @keyframes zoomMove {
            0% { transform: scale(1.03); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1.03); }
          }

          .feature-card {
            transition: 0.1s ease;
          }

          .feature-card:hover {
            transform: translateY(-6px);
            box-shadow: 0px 12px 25px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </>
  );
}