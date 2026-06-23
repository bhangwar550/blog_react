import React from "react";
import Footer from "./Footer";

export default function Blog() {

  return (
    <>
      <div className="container-fluid bg-primary text-white py-5">

        <div className="container">

          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-md-6">

              <h1 className="fw-bold mb-3">
                Our Latest Blogs
              </h1>

              <p className="mb-4">
                Explore latest updates, tips, and insights about blog management and growth strategies.
              </p>

              <button className="btn btn-light text-primary fw-bold">
                Read More
              </button>

            </div>

            {/* RIGHT */}
            <div className="col-md-6 text-center">

              <img
                src="/images/blog_bg.svg"
                alt="blog"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}