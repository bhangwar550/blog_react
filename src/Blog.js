import React from "react";
import Footer from "./Footer";

export default function Blog() {
  return (
    <>
    <div className="container-fluid bg-primary text-white py-5 px-3">

      <div className="container py-4">

        <div className="row align-items-center g-5">

          {/* Left Side Text */}
          <div className="col-md-6 px-3">
            <h1 className="fw-bold mb-3">
              Our Latest Blogs.
            </h1>

            <p className="mb-4">
              Explore latest updates, tips, and insights about blog management.
              Learn how to grow, manage, and improve your platform with ease.
            </p>

            <button className="btn btn-light text-primary fw-bold px-4 py-2">
              Read More
            </button>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 text-center px-3">
            <img
              src="/images/blog_bg.svg"
              alt="blog"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px" }}
            />
          </div>

        </div>
      </div>
 
    </div>
      <Footer/>
  </>
  );
}