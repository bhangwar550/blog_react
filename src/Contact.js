import React from "react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
    <style>{`
        .hero-bg {
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;

          animation: zoomMove 6s ease-in-out infinite alternate;
        }

        @keyframes zoomMove {
          0% {
            background-size: 100%;
            background-position: center;
          }

          100% {
            background-size: 115%;
            background-position: 60% 40%;
          }
        }
      `}</style>
      <div className="container-fluid py-5">
        
        {/* HERO SECTION: TEXT & IMAGE */}
        <div 
          className="row align-items-center g-5 rounded-3 p-4 p-md-5" 
          style={{ 
            backgroundImage:" url('/images/management.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
           animation: "zoomMove 2s ease-in-out infinite",
          
          zIndex: -1
          }}
        >
          {/* LEFT SIDE: TEXT */}
          <div className="col-md-6 text-white text-md-start">
            <h1 className="fw-bold mb-1 text-dark" style={{ fontSize: "2.5rem" }}>
              Consult
            </h1>
            <h1 className="fw-bold mb-4 text-primary" style={{ fontSize: "2.5rem" }}>
              Our Experts_____
            </h1>

            <p className="fs-5 opacity-90 text-dark">
              Publishers might have detailed questions on areas like creating their account, 
              adding their sites and accessing money from their wallets. Our experts and 
              support teams are always ready and available to help them with any of the 
              above concerns. All you need to do is fill in the Contact Form below, write 
              down the details that are asked for and wait for our support team to get in 
              touch with you. We try to address all the concerns of our publishers within 
              24-48 hours.
            </p>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src="/images/women-messaging-with-tab.svg"
              alt="Contact Support Team"
              className="img-fluid"
              style={{ maxHeight: "420px", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <div 
              className="card shadow-sm border-0 p-4 p-md-5" 
              style={{ maxWidth: "600px", width: "100%" }}
            >
              <h2 className="mb-4 fw-bold text-center text-primary border-bottom pb-2">
                Connect With Us
              </h2>
              
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label d-none">Your Name</label>
                  <input 
                    id="name"
                    type="text"
                    className="form-control form-control-lg" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label d-none">Your Email</label>
                  <input 
                    id="email"
                    type="email" 
                    className="form-control form-control-lg" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label d-none">Your Message</label>
                  <textarea 
                    id="message"
                    className="form-control form-control-lg" 
                    rows="4" 
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm">
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