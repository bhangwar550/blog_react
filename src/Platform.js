import React from "react";
import { useNavigate } from "react-router-dom";

export default function Platform() {
  const navigate = useNavigate();

  const img = (name) =>
    process.env.PUBLIC_URL + "/images/" + name;

  const steps = [
    {
      step: "Step 1",
      img: "wages.png",
      title: "Sign Up",
      subtitle: "Create Account on BM",
      text:
        "Register and add your details to get started quickly."
    },
    {
      step: "Step 2",
      img: "24-hours-support.png",
      title: "List Website",
      subtitle: "Add your websites",
      text:
        "Add all websites you own in a simple listing process."
    },
    {
      step: "Step 3",
      img: "checkmark.png",
      title: "Get Orders",
      subtitle: "Start receiving work",
      text:
        "Publishers start getting guest post orders."
    },
    {
      step: "Step 4",
      img: "balance.png",
      title: "Get Paid",
      subtitle: "Fast payments",
      text:
        "Withdraw earnings anytime with fast processing."
    },
  ];

  return (
    <div className="container py-5 blue-glow">

      <h1 className="text-center fw-bold text-primary mb-4">
        How does the Platform work for Publishers?
      </h1>

      <hr className="border border-primary opacity-100" />

      <div className="row g-4">

        {steps.map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="card shadow-sm h-100 text-center p-3 step-card">

              <span className="badge bg-primary mb-2">
                {item.step}
              </span>

              <img
                src={img(item.img)}
                alt={item.title}
                className="card-img-top p-3"
                style={{ width: "80px", margin: "0 auto" }}
              />

              <h5 className="mt-3 text-primary">{item.title}</h5>
              <h6 className="text-primary">{item.subtitle}</h6>

              <p className="text-muted">{item.text}</p>

            </div>
          </div>
        ))}

      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-primary px-4"
          onClick={() => navigate("/login")}
        >
          Submit Your Website
        </button>
      </div>

    </div>
  );
}