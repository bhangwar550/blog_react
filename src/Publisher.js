import React from "react";
import { useNavigate } from "react-router-dom";
export default function Publisher() {
  const navigate =useNavigate();
  
  return (
    <div className="container py-5">

      {/* Heading */}
     <h1 class="gradient-text">
  40000+ Publishers have chosen BM, Here's why
</h1>
<hr className="border border-primary opacity-100" />
      {/* Cards Row */}
      <div className="row g-4">

        {/* Card 1 */}
        <div className="col-md-4">
  <div className="card shadow text-center">

    {/* Icon / Image on top */}
    <img src="/images/save-money.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />

    <div className="card-body">
      <h5 className="card-title text-primary">High Earning Potential</h5>
      <p className="card-text">If you have a high-quality website with good metrics, you can earn upwards of $2500 from just Guest Posting alone! Our leading bloggers earned more than $5000 in their best months.</p>
    </div>

  </div>
</div>
   <div className="col-md-4">
  <div className="card shadow text-center">

    {/* Icon / Image on top */}
    <img src="/images/24-hours-support.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />

    <div className="card-body">
      <h5 className="card-title text-primary">Payment Within 24-Hours</h5>
      <p className="card-text">Unlike other platforms that have set dates for making payments, on BM publishers can request payments whenever they want. You request a payment; you get it within 24 hours.</p>
    </div>

  </div>
</div>
   <div className="col-md-4">
  <div className="card shadow text-center">

    {/* Icon / Image on top */}
    <img src="/images/checkmark.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />

    <div className="card-body">
      <h5 className="card-title text-primary">High-Quality SEO Articles</h5>
      <p className="card-text">Publishers will get high-quality SEO-friendly articles that will help them improve their site metrics and SEO scores. This will increase their website traffic. Search engines love this content.</p>
    </div>

  </div>
</div>

         <div className="col-md-4">
  <div className="card shadow text-center">

    {/* Icon / Image on top */}
    <img src="/images/balance.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />

    <div className="card-body">
      <h5 className="card-title text-primary">Publisher has Final Word</h5>
      <p className="card-text">A Publisher can accept an order or reject the same depending on what they feel is right. The platform or the admin will not do anything to take the decision away from the publisher at any time.</p>
    </div>

  </div>
</div>

          <div className="col-md-4">
  <div className="card shadow text-center">

    {/* Icon / Image on top */}
    <img src="/images/relations.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />

    <div className="card-body">
      <h5 className="card-title text-primary">Life-Long Relationships</h5>
      <p className="card-text">BM believes in building the best, and biggest ecosystem of publishers and bloggers in the industry. More than anything else, relationships matter to the platform above anything else.</p>
    </div>

  </div>
</div>

           <div className="col-md-4">
  <div className="card shadow text-center">

    {/* Icon / Image on top */}
    <img src="/images/talk.png"alt="icon"className="card-img-top p-3"style={{ width: "80px", margin: "0 auto" }} />

    <div className="card-body">
      <h5 className="card-title text-primary">24x7 Support to Publishers</h5>
      <p className="card-text">Any time there is an issue that needs to be resolved, our Support Team will be there to help you. This relates to anything from substandard content to payment requests and processing.</p>
    </div>

  </div>
</div>

      </div>
      <div className="text-center mt-3">
  <button className="btn py-3 fw-bold shadow text-white" onClick={()=> navigate("/signup")} style={{ backgroundColor: "#4e73df" }}>Sign Up Now</button>
</div>
    </div>
  );
}