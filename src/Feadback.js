import React from "react";

export default function CardCarousel() {
  return (
    <div className="container py-5">
      <h1 className="text-primary">
        Feedbacks from our Publishers on Blog Management
      </h1>
      <hr className="border border-primary opacity-100" />

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row g-3">

              <div className="col-md-6">
                <div className="card p-3 shadow-sm d-flex flex-row align-items-start gap-3">
                  <img
                    src="/images/mm.webp"
                    alt="icon"
                    className="rounded-circle"
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div className="flex-grow-1">
                    <h5 className="mb-1 fw-bold text-primary">Mashum</h5>
                    <h6 className="text-primary mb-1">CEO Red , Hat Media</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "16px", lineHeight: "1.8" }}
                    >
                      Experienced leader focused on digital media growth and platform innovation.
                      Strong background in strategy, business development, and building scalable solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card p-3 shadow-sm d-flex flex-row align-items-start gap-3">
                  <img
                    src="/images/sandy.webp"
                    alt="icon"
                    className="rounded-circle"
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div className="flex-grow-1">
                    <h5 className="mb-1 fw-bold text-primary">Sandy</h5>
                    <h6 className="text-primary mb-1">Real Health Bussines</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "16px", lineHeight: "1.8" }}
                    >
                      Real Health Business is focused on delivering trusted wellness solutions and improving lifestyle through quality health services.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row g-3">

              <div className="col-md-6">
                <div className="card p-3 shadow-sm d-flex flex-row align-items-start gap-3">
                  <img
                    src="/images/sagar.webp"
                    alt="icon"
                    className="rounded-circle"
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div className="flex-grow-1">
                    <h5 className="mb-1 fw-bold text-primary">Sagar</h5>
                    <h6 className="text-primary mb-1">Social Media Magazin</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "16px", lineHeight: "1.8" }}
                    >
                      Experienced leader focused on digital media growth and platform innovation.
                      Strong background in strategy, business development, and building scalable solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card p-3 shadow-sm d-flex flex-row align-items-start gap-3">
                  <img
                    src="/images/mm.webp"
                    alt="icon"
                    className="rounded-circle"
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div className="flex-grow-1">
                    <h5 className="mb-1 fw-bold text-primary">Mashum</h5>
                    <h6 className="text-primary mb-1">CEO Red , Hat Media</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "16px", lineHeight: "1.8" }}
                    >
                      Experienced leader focused on digital media growth and platform innovation.
                      Strong background in strategy, business development, and building scalable solutions.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="row g-3">

              <div className="col-md-6">
                <div className="card p-3 shadow-sm d-flex flex-row align-items-start gap-3">
                  <img
                    src="/images/sandy.webp"
                    alt="icon"
                    className="rounded-circle"
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div className="flex-grow-1">
                    <h5 className="mb-1 fw-bold text-primary">Sandy</h5>
                    <h6 className="text-primary mb-1">Real Health Bussines</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "16px", lineHeight: "1.8" }}
                    >
                      Real Health Business is committed to delivering trusted health solutions and wellness services with a focus on quality and care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card p-3 shadow-sm d-flex flex-row align-items-start gap-3">
                  <img
                    src="/images/sagar.webp"
                    alt="icon"
                    className="rounded-circle"
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div className="flex-grow-1">
                    <h5 className="mb-1 fw-bold text-primary">Sagar</h5>
                    <h6 className="text-primary mb-1">Social Media Magazin</h6>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "16px", lineHeight: "1.8" }}
                    >
                      Social Media Magazine has built strong digital presence through consistent content and audience engagement strategies.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}