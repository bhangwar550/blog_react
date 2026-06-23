import React from "react";

export default function CardCarousel() {

  const img = (name) =>
    process.env.PUBLIC_URL + "/images/" + name;

  const slides = [
    [
      {
        img: "mm.webp",
        name: "Mashum",
        role: "CEO Red Hat Media",
        text:
          "Experienced leader focused on digital media growth and platform innovation."
      },
      {
        img: "sandy.webp",
        name: "Sandy",
        role: "Real Health Business",
        text:
          "Focused on delivering trusted wellness solutions."
      },
    ],
    [
      {
        img: "sagar.webp",
        name: "Sagar",
        role: "Social Media Magazine",
        text:
          "Strong digital presence and content strategy."
      },
      {
        img: "mm.webp",
        name: "Mashum",
        role: "CEO Red Hat Media",
        text:
          "Business development and scalable solutions expert."
      },
    ],
    [
      {
        img: "sandy.webp",
        name: "Sandy",
        role: "Health Business",
        text:
          "Committed to health and wellness services."
      },
      {
        img: "sagar.webp",
        name: "Sagar",
        role: "Social Media Magazine",
        text:
          "Audience engagement and content strategy."
      },
    ],
  ];

  return (
    <div className="container py-5">

      <h1 className="text-primary">
        Feedbacks from our Publishers on Blog Management
      </h1>

      <hr className="border border-primary opacity-100" />

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">

          {slides.map((group, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
              <div className="row g-3">

                {group.map((user, j) => (
                  <div className="col-md-6" key={j}>
                    <div className="card p-3 shadow-sm d-flex flex-row align-items-start gap-3">

                      <img
                        src={img(user.img)}
                        alt={user.name}
                        className="rounded-circle"
                        style={{
                          width: "75px",
                          height: "75px",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />

                      <div>
                        <h5 className="fw-bold text-primary">{user.name}</h5>
                        <h6 className="text-primary">{user.role}</h6>
                        <p className="text-muted mb-0">{user.text}</p>
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </div>
  );
}