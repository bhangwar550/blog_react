import React from "react";

export default function Help() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <h1 className="text-primary text-center mb-5 fw-bold">
        Hello, How can we help?
      </h1>

      {/* Search Bar */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-10">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
            />
            <button className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="row g-4">

        <div className="col-md-6">
          <div className="card shadow-sm help-card">
            <div className="card-body d-flex align-items-center gap-3">
              <img src="/images/start.png" alt="" width="50" />
              <div>
                <h5 className="fw-bold mb-1">Getting Started</h5>
                <p className="text-muted mb-0">
                  New to Blog Management, learn the basics and set up your account.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm help-card">
            <div className="card-body d-flex align-items-center gap-3">
              <img src="/images/account.png" alt="" width="50" />
              <div>
                <h5 className="fw-bold mb-1">Account Access</h5>
                <p className="text-muted mb-0">
                  Learn about accessing your Blog Management account.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm help-card">
            <div className="card-body d-flex align-items-center gap-3">
              <img src="/images/site.png" alt="" width="50" />
              <div>
                <h5 className="fw-bold mb-1">Site Management</h5>
                <p className="text-muted mb-0">
                  Learn about listing your site in Blog Management.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm help-card">
            <div className="card-body d-flex align-items-center gap-3">
              <img src="/images/menu.png" alt="" width="50" />
              <div>
                <h5 className="fw-bold mb-1">Task Management</h5>
                <p className="text-muted mb-0">
                  Learn how to process all assigned tasks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm help-card">
            <div className="card-body d-flex align-items-center gap-3">
              <img src="/images/wallet.png" alt="" width="50" />
              <div>
                <h5 className="fw-bold mb-1">Wallet & Transactions</h5>
                <p className="text-muted mb-0">
                  Learn how to view all transactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm help-card">
            <div className="card-body d-flex align-items-center gap-3">
              <img src="/images/annouce.png" alt="" width="50" />
              <div>
                <h5 className="fw-bold mb-1">Announcements</h5>
                <p className="text-muted mb-0">
                  Stay updated with what's new in Blog Management.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <p className="text-center text-muted mt-5 mb-0">
        Copyright © Blog Management 2026
      </p>

    </div>
  );
}