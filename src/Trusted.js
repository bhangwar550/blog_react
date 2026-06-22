import React from "react";

export default function Trusted() {
  return (
    <div className="container mt-5">

      <h2 className="text-center text-primary fw-bold mb-4">
   Trusted by 40000+ Publishers Worldwide
      </h2>

      
     <div className="container mt-5">

  

  <div id="trustedCarousel" className="carousel slide" data-bs-ride="carousel">

    {/* indicators */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#trustedCarousel" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#trustedCarousel" data-bs-slide-to="1"></button>
    </div>

    {/* slides */}
    <div className="carousel-inner">

      {/* SLIDE 1 */}
      <div className="carousel-item active">
        <div className="card-row">

          <div className="mini-card"><img src="/images/ins42.png" alt="" /></div>
          <div className="mini-card"><img src="/images/lifehack.png" alt="" /></div>
          <div className="mini-card"><img src="/images/fast-company.png" alt="" /></div>
          <div className="mini-card"><img src="/images/elitedaily.png" alt="" /></div>
          <div className="mini-card"><img src="/images/The_Guardian.png" alt="" /></div>
          <div className="mini-card"><img src="/images/thepenny.png" alt="" /></div>
          <div className="mini-card"><img src="/images/thought-catalog.png" alt="" /></div>
          <div className="mini-card"><img src="/images/thewrite.png" alt="" /></div>

        </div>
      </div>

      {/* SLIDE 2 */}
      <div className="carousel-item">
        <div className="card-row">

          <div className="mini-card"><img src="/images/ins42.png" alt="" /></div>
          <div className="mini-card"><img src="/images/lifehack.png" alt="" /></div>
          <div className="mini-card"><img src="/images/fast-company.png" alt="" /></div>
          <div className="mini-card"><img src="/images/elitedaily.png" alt="" /></div>
          <div className="mini-card"><img src="/images/The_Guardian.png" alt="" /></div>
          <div className="mini-card"><img src="/images/thepenny.png" alt="" /></div>
          <div className="mini-card"><img src="/images/thought-catalog.png" alt="" /></div>
          <div className="mini-card"><img src="/images/thewrite.png" alt="" /></div>

        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  );
}