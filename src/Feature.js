import React from "react";
import Footer from "./Footer";

export default function Feature() {
  return (
    <>
      <div
        className="container-fluid position-relative"
        style={{ minHeight: "100vh", overflow: "hidden" }}
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
              <p className="text-dark">
                A platform for publishers and bloggers to manage content and earn easily.
              </p>
            </div>

            <div className="col-md-7 text-center">
              <img
                src="/images/girl-showing-features.svg"
                alt="Feature illustration"
                className="img-fluid"
                style={{ maxWidth: "400px" }}
              />
            </div>

          </div>

          {/* TITLE */}
          <div className="text-center mt-5">
            <h2 className="fw-bold text-primary">Features</h2>
            <hr style={{ width: "80px", margin: "auto", border: "2px solid #0d6efd" }} />
          </div>

          {/* CARDS */}
          <div className="row mt-4 g-4">

            {[
              ["cup.png", "BM Score", "SEO based ranking system"],
              ["star.png", "Featured Listing", "More visibility for sites"],
              ["man.png", "Gray Niche", "Casino, Crypto, CBD support"],
              ["deal.png", "Offers & Bidding", "Publishers can bid offers"],
              ["realtime.png", "Real Time Metrics", "Live SEO data"],
              ["menu.png", "Auto Task Validation", "Auto content checks"],
              ["verify.png", "Domain Verification", "Real owner verification"],
              ["login.png", "Task Health Status", "Detects issues"],
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6">

                <div className="card text-center shadow-sm h-100 border-0 feature-card">

                  <img
                    src={process.env.PUBLIC_URL + "/images/" + item[0]}
                    alt={item[1]}
                    className="p-3 mx-auto"
                    style={{ height: "120px", objectFit: "contain" }}
                  />

                  <div className="card-body">
                    <h5 className="text-primary fw-bold">{item[1]}</h5>
                    <p className="text-muted small">{item[2]}</p>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      <Footer />

      {/* STYLE */}
      <style>{`
        @keyframes zoomMove {
          0% { transform: scale(1.03); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1.03); }
        }

        .feature-card {
          transition: 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 12px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </>
  );
}