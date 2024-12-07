import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ClientTestimonials() {
  return (
    <div
      className="container my-5"
      style={{ backgroundColor: "rgb(250, 249, 249)", padding: "50px" }}
    >
      {/* Section Title */}
      <div className="text-left mb-4">
        <h2 className="fw-bold">What Our Clients Say</h2>
        <p className="text-muted">
          Discover the success stories shared by our clients
        </p>
      </div>

      <div className="row align-items-center">
        {/* Left Column: Image */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={`${process.env.PUBLIC_URL}/image/op.png`}
            alt="Client"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Column: Testimonial */}
        <div className="col-12 col-md-6">
          <blockquote className="blockquote">
            <p className="fw-bold">“An amazing service”</p>
            <p className="text-muted">
              Excellent service! The process was seamless, from quick quotes to
              on-time delivery. Communication was clear, and everything was
              handled with care. Highly recommend for reliable logistics!
            </p>
            <footer className="blockquote-footer">James Schmicheal</footer>
          </blockquote>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="d-flex justify-content-center justify-content-md-end mt-4">
        <button
          className="btn btn-outline-success rounded-circle me-2"
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          className="btn btn-success rounded-circle"
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ClientTestimonials;
