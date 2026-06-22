import React, { useState } from "react";

export default function Expert() {
  
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setformdata({
    formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formdata.name ||
      !formdata.email ||
      !formdata.phone ||
      !formdata.message
    ) {
      alert("please putt form data");
      return;
    }

    alert("Successfully sent your message");
     
  };

  return (
    <div className="expert-wrapper">
      
      {/* Background */}
      <div className="expert-bg" />

      <div className="container py-5">
        <div className="row align-items-center">

          {/* Left */}
          <div className="col-md-5">
            <h1 className="fw-bold text-primary mb-3 text-nowrap">
              Consult with our Experts
            </h1>

            <p className="text-muted lh-lg">
              Publishers might have detailed questions on areas like creating their account, adding their sites and accessing money from their wallets. Our experts and support teams are always ready and available to help them with any of the above concerns.
            </p>

            <p className="text-muted lh-lg">
              All you need to do is fill in the Contact Form on the right, write down the details that are asked for and wait for our support team to get in touch with you. We try to address all the concerns of our publishers within 24-48 hours.
            </p>

            <div className="d-flex gap-3 mt-4 flex-wrap">

              <button className="btn btn-primary px-4 rounded-pill d-flex align-items-center gap-2">
                <img src="/images/mail.png" alt="mail" style={{ width: "18px", height: "18px" }} />
                Mail
              </button>

              <button className="btn btn-outline-primary px-4 rounded-pill d-flex align-items-center gap-2">
                <img src="/images/skype.png" alt="skype" style={{ width: "18px", height: "18px" }} />
                Skype
              </button>

            </div>
          </div>

          {/* Right Form */}
          <div className="col-md-6 offset-md-1 mt-4 mt-md-0">
            <div className="card shadow-lg border-0 p-4 rounded-4">

              <h4 className="text-center text-primary mb-3 fw-bold">
                Get In Touch
              </h4>

              <form onSubmit={handleSubmit}>

                <input
                  className="form-control mb-3"
                  placeholder="Name"
                  name="name"
                  value={formdata.name}
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Email"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Phone"
                  name="phone"
                  value={formdata.phone}
                  onChange={handleChange}
                />

                <textarea
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Message"
                  name="message"
                  value={formdata.message}
                  onChange={handleChange}
                />

                <button className="btn btn-primary w-100 rounded-pill">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
