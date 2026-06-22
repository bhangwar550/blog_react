import React from "react";
import { useNavigate } from "react-router-dom";
export default function Platform() {
  const navigate = useNavigate();
  return (

    <div className="container py-5 blue-glow">

   
      <h1 className="text-center fw-bold text-primary mb-4">
        How does the Platform work for Publishers?
      </h1>
<hr className="border border-primary opacity-100" />
      {/* Steps Row */}
      <div className="row g-4">

        {/* Card 1 */}
      <div className="col-md-3">
  <div className="card step-card shadow-sm h-100 text-center p-3">

    <span className="step-badge">
      Step 1
    </span>
<img src="/images/wages.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />
    <h5 className="mt-4 text-primary">Sign Up and List your</h5>
    <h6 className=" text-primary" >Website on BM</h6>

    <p className="text-muted">
     Click on the Sign Up button and enter the details. Once you finish the Sign Up, list down the websites where you are the ‘owner’. Listing is an easy process that you can complete within 15 minutes.
    </p>
  </div>
</div>

    <div className="col-md-3">
  <div className="card step-card shadow-sm h-100 text-center p-3">

    <span className="step-badge">
      Step 2
    </span>
<img src="/images/24-hours-support.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />
    <h5 className="mt-4 text-primary">Sign Up and List your</h5>
    <h6 className=" text-primary" >Website on BM</h6>

    <p className="text-muted">
     Click on the Sign Up button and enter the details. Once you finish the Sign Up, list down the websites where you are the ‘owner’. Listing is an easy process that you can complete within 15 minutes.
    </p>
  </div>
</div>
<div className="col-md-3">
  <div className="card step-card shadow-sm h-100 text-center p-3">

    <span className="step-badge">
      Step 3
    </span>
<img src="/images/checkmark.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />
    <h5 className="mt-4 text-primary">Sign Up and List your</h5>
    <h6 className=" text-primary" >Website on BM</h6>

    <p className="text-muted">Click on the Sign Up button and enter the details. Once you finish the Sign Up, list down the websites where you are the ‘owner’. Listing is an easy process that you can complete within 15 minutes.
    </p>
  </div>
</div>
<div className="col-md-3">
  <div className="card step-card shadow-sm h-100 text-center p-3">
    <span className="step-badge">Step 4</span>
<img src="/images/balance.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />
    <h5 className="mt-4 text-primary">Sign Up and List your</h5>
    <h6 className=" text-primary" >Website on BM</h6>
    <p className="text-muted">Click on the Sign Up button and enter the details. Once you finish the Sign Up, list down the websites where you are the ‘owner’. Listing is an easy process that you can complete within 15 minutes.</p>
  </div>
</div>
<div className="text-center mt-4">
  <button type="button" className="btn btn-primary btn-sm px-4" onClick={()=>navigate("/login")}>
    Submit Your Website
  </button>
</div>
      </div>
</div>
   
  );
}