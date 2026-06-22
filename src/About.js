import React from "react";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <div className="container py-5 position-relative overflow-hidden ">
        <div className="bg-anim"></div>
        <div className="position-relative">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h1 className="fw-bold text-primary mb-4">About Us______</h1>

              <p className="text-muted lh-lg">
                Blog Management is a platform that allows publishers, bloggers and website owners to earn money by placing content.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/images/sitting-women-with-analytics.svg"
                alt="About"
                className="img-fluid"
                style={{
                  maxWidth: "420px",
                  filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.15))",
                }}
              />
            </div>
          </div>

          {/* HEADING */}
          <h3 className="fw-bold text-center text-primary mb-4">
            A Real Platform Driven by Professionals _____
          </h3>

          <p className="text-dark">
            Blog Management was founded to help publishers monetize their websites easily and securely.
          </p>

          <h5 className="mb-4">
            The platform solves trust issues in guest posting and ensures fair payments for all publishers.
          </h5>

          {/* COMPARISON */}
          <div className="container">

            <div className="row mb-3">

  {/* LEFT SIDE - PROBLEM */}
  <div className="col-md-6">

    <h4 className="text-danger fw-bold mb-3">Problem</h4>

    <div className="p-3 bg-danger text-white rounded shadow-sm mb-3 problem-box">
      ✖ Publishers spend a lot of time to promote their websites on social platforms or on cold outreach to get leads. This distracts them for their own website maintenance and order management duties.
    </div>

    <div className="p-3 bg-danger text-white rounded shadow-sm mb-3 problem-box">
      ✖ There are numerous instances of publishers placing content, but not getting paid for the same. While the link and content might be removed, the effort goes to waste. This is something that everyone wants to avoid.
    </div>

    <div className="p-3 bg-danger text-white rounded shadow-sm problem-box">
      ✖ Many individuals and brands not aware of Google content guidelines and send plagiarized or thin content for publishing. 
    </div>

  </div>

  {/* RIGHT SIDE - CORRECT */}
  <div className="col-md-6">

    <h4 className="text-success fw-bold mb-3">Correct</h4>

    <div className="p-3 bg-success text-white rounded shadow-sm mb-3 correct-box">
      ✔ On Blog Management, we market and publicize your blog. We do this through PPC, Emails, Social Media, and more. This means that you can invest time on improving your website, while leaving orders to us.
    </div>

    <div className="p-3 bg-success text-white rounded shadow-sm mb-3 correct-box">
      ✔ eing publishers ourselves, we ensure that the publisher has been paid, no matter if the deal does not happen for one reason or another. There is 100% guarantee for payments all the time for publishers.
    </div>

    <div className="p-3 bg-success text-white rounded shadow-sm correct-box">
      ✔ Our expert Content Team reviews the content and then places it with publishers. If the publisher requests us for increasing word length, or formatting the content, we do that- no questions asked.
    </div>

  </div>

</div>

          </div>

        </div>
      </div>

      <Footer />

      {/* STYLE */}
      <style>
        {`
          /* BACKGROUND ANIMATION LAYER */
          .bg-anim {
            position: absolute;
            inset: 0;
            background-image: url('/images/management.png');
            background-size: 110%;
            background-position: center;
            background-repeat: no-repeat;
            animation: zoomBg 2s ease-in-out infinite;
            z-index: 0;
          }

          /* CONTENT ABOVE BACKGROUND */
          .position-relative {
            z-index: 1;
          }

          @keyframes zoomBg {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
            100% {
              transform: scale(1);
            }
          }

          .problem-box,
          .correct-box {
            transition: 0.3s ease;
          }

          .problem-box:hover {
            transform: translateY(-6px);
            box-shadow: 0px 10px 25px rgba(220, 53, 69, 0.3);
          }

          .correct-box:hover {
            transform: translateY(-6px);
            box-shadow: 0px 10px 25px rgba(25, 135, 84, 0.3);
          }
        `}
      </style>
    </>
  );
}