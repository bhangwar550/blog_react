import React from "react";
import { useNavigate } from "react-router-dom";

export default function Popular() {
   const navigate= useNavigate();
  return (
   
    <div className="container mt-5">

      <div className="row g-4">

        {/* CARD 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 pop-card">

            <img src="/images/From-Hobby.png" className="card-img-top" alt="" />

            <div className="card-body">
              <h5>From Hobby To Business</h5>
              <p>Monday Jan 20, 2020</p>
              <h6>Blogging is writing about creativity</h6>
              <div className="text-primary pop-link">Read Full Blog →</div>
            </div>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 pop-card">

            <img src="/images/Sponsored-Posts.png" className="card-img-top" alt="" />

            <div className="card-body">
              <h5>Sponsored Posts vs Guest Posts</h5>
              <p>Monday Jan 20, 2020</p>
              <h6>Blogging builds relations</h6>
              <div className="text-primary pop-link">Read Full Blog →</div>
            </div>

          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 pop-card">

            <img src="/images/Blog-Management.png" className="card-img-top" alt="" />

            <div className="card-body">
              <h5>Blog Management Platform</h5>
              <p>Monday Jan 20, 2020</p>
              <h6>Helps bloggers grow</h6>
              <div className="text-primary pop-link">Read Full Blog →</div>
            </div>

          </div>
        </div>

      </div>

      {/* BUTTON */}
      <div className="text-center mt-4">
        <button className="btn pop-btn text-white" onClick={()=>navigate("/blog")}>
          View All Posts
        </button>
      </div>

    </div>
  );
}