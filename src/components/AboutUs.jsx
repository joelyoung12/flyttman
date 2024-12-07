import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css"; // For custom styles

function AboutUs() {
  return (
    <div className="about-us-section container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
          <img
            src={`${process.env.PUBLIC_URL}/image/de.png`} // Correct path
            alt="About Us"
            className="img-fluid" // Makes image responsive
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        {/* Content Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2 className="fw-bold mb-3">About Us</h2>
          <p className="text-muted">
            Welcome to Flyttman, where we connect you with expert haulage
            solutions tailored to your needs. Our platform unites trusted
            transport partners to ensure safe, timely, and cost-effective
            deliveries while we oversee the entire process.
          </p>
          <a href="#contact" className="btn btn-success px-4 py-2 nice">
            Contact 
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
