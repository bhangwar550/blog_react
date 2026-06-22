import React from "react";
import { useNavigate } from "react-router-dom";
export default function Management() {
  const navigate = useNavigate();
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center text-white"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background layer */}
      <div
         style={{
    position: "absolute",
    inset: 0,
    backgroundImage: `linear-gradient(
      rgba(220, 224, 234, 0.3),
      rgba(241, 231, 231, 0.4)
    ), url(${process.env.PUBLIC_URL}/images/management.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    animation: "zoomMove 1s ease-in-out infinite",
    transform: "skewY(-5deg) scale(1.1)",
    zIndex: -1,
  }}/>

      <div className="container py-5">

  <div className="row align-items-center ">

    {/* Left Side Content */}
    <div className="col-md-4">
      <h1 className="fw-bold text-primary mb-3 single-line-heading">What Is Blog Management?</h1>

      <p className="text-muted lh-lg">
        Blog Management is a platform that helps publishers, bloggers, and website owners monetize their blogs.
        It allows earning through guest posts with high-quality content and instant payments after publishing.
        Over the last two years, it has paid 40,000+ publishers more than $2 Million.
      </p>

      {/* Buttons */}
      <div className="d-flex gap-3 mt-4 flex-wrap">
        <button className="btn btn-primary px-4 rounded-pill shadow-sm" onClick={()=>navigate("/contact")}>
          Contact Us
        </button>

        <button className="btn btn-outline-primary px-4 rounded-pill" onClick={()=>navigate("/about")}>
          About Us
        </button>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="col-md-7 text-center mt-4 mt-md-2 ps-md-5">
  <img
    src={process.env.PUBLIC_URL + "/images/person-reading-documents.svg"}
    alt="Profile"
    className="img-fluid blog-img"
  />
</div>

  </div>
</div>
      <style>
        {`
          @keyframes zoomMove {
            0% { transform: skewY(-6deg) scale(1.1); }
            50% { transform: skewY(-6deg) scale(1.15); }
            100% { transform: skewY(-6deg) scale(1.1); }
          }
        `}
      </style>
    </div>
  );
}