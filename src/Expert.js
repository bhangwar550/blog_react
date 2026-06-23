import React, { useState } from "react";

export default function Expert() {

  // ✅ IMAGE HELPER (IMPORTANT FOR GITHUB PAGES)
  const img = (name) =>
    process.env.PUBLIC_URL + "/images/" + name;

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setformdata({
      ...formdata,
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
      alert("Please fill all fields");
      return;
    }

    alert("Successfully sent your message");

    setformdata({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="expert-wrapper">

      <div className="expert-bg" />

      <div className="container py-5">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-5">
            <h1 className="fw-bold text-primary mb-3">
              Consult with our Experts
            </h1>

            <p className="text-muted lh-lg">
              Support team helps publishers with account setup and payments.
            </p>

            <div className="d-flex gap-3 mt-4 flex-wrap">

              {/* MAIL BUTTON */}
              <button className="btn btn-primary px-4 rounded-pill d-flex align-items-center gap-2">
                <img
                  src={img("mail.png")}
                  alt="mail"
                  style={{ width: "18px", height: "18px" }}
                />
                Mail
              </button>

              {/* SKYPE BUTTON */}
              <button className="btn btn-outline-primary px-4 rounded-pill d-flex align-items-center gap-2">
                <img
                  src={img("skype.png")}
                  alt="skype"
                  style={{ width: "18px", height: "18px" }}
                />
                Skype
              </button>

            </div>
          </div>

          {/* RIGHT FORM */}
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