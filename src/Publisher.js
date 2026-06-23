import React from "react";
import { useNavigate } from "react-router-dom";

export default function Publisher() {
  const navigate = useNavigate();

  const img = (name) =>
    process.env.PUBLIC_URL + "/images/" + name;

  const cards = [
    {
      img: "save-money.png",
      title: "High Earning Potential",
      text: "Earn up to $2500 from guest posting."
    },
    {
      img: "24-hours-support.png",
      title: "Payment Within 24-Hours",
      text: "Fast and flexible payment system."
    },
    {
      img: "checkmark.png",
      title: "High-Quality SEO Articles",
      text: "SEO friendly content for better ranking."
    },
    {
      img: "balance.png",
      title: "Publisher has Final Word",
      text: "Publishers control their decisions."
    },
    {
      img: "relations.png",
      title: "Life-Long Relationships",
      text: "Strong publisher network ecosystem."
    },
    {
      img: "talk.png",
      title: "24x7 Support",
      text: "Always available support team."
    },
  ];

  return (
    <div className="container py-5">

      {/* Heading */}
      <h1 className="gradient-text text-center fw-bold">
        40000+ Publishers have chosen BM, Here's why
      </h1>

      <hr className="border border-primary opacity-100" />

      {/* Cards */}
      <div className="row g-4">

        {cards.map((item, i) => (
          <div className="col-md-4" key={i}>
            <div className="card shadow text-center h-100">

              <img
                src={img(item.img)}
                alt={item.title}
                className="card-img-top p-3"
                style={{ width: "80px", margin: "0 auto" }}
              />

              <div className="card-body">
                <h5 className="card-title text-primary">
                  {item.title}
                </h5>
                <p className="card-text">
                  {item.text}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Button */}
      <div className="text-center mt-4">
        <button
          className="btn py-3 fw-bold shadow text-white"
          onClick={() => navigate("/signup")}
          style={{ backgroundColor: "#4e73df" }}
        >
          Sign Up Now
        </button>
      </div>

    </div>
  );
}