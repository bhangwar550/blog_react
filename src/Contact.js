import React from "react";
import Footer from "./Footer";

export default function Contact() {

  return (
    <>
      <div className="container-fluid py-5">

        {/* HERO */}
        <div
          className="row align-items-center p-4 p-md-5 rounded"
          style={{
            backgroundImage: "url('/images/management.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          {/* LEFT */}
          <div className="col-md-6 text-dark">

            <h1 className="fw-bold">Consult</h1>
            <h1 className="fw-bold text-primary mb-3">
              Our Experts
            </h1>

            <p>
              Publishers can contact support for account setup, site management and payments.
              Our team responds within 24–48 hours.
            </p>

          </div>

          {/* RIGHT */}
          <div className="col-md-6 text-center">

            <img
              src="/images/women-messaging-with-tab.svg"
              alt="contact"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />

          </div>

        </div>

        {/* FORM */}
        <div className="row mt-5">

          <div className="col-md-6 mx-auto">

            <div className="card shadow p-4">

              <h3 className="text-center text-primary fw-bold mb-4">
                Contact Us
              </h3>

              <form onSubmit={(e) => e.preventDefault()}>

                <input
                  className="form-control mb-3"
                  placeholder="Your Name"
                />

                <input
                  className="form-control mb-3"
                  type="email"
                  placeholder="Your Email"
                />

                <textarea
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Your Message"
                />

                <button className="btn btn-primary w-100">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}