import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Section: Logo and Description */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <img
              src={`${process.env.PUBLIC_URL}/image/rt.png`}
              alt="Flyttman Logo"
              className="img-fluid"
              style={{ maxWidth: "250px", height: "auto" }}
            />
            <p className="text-muted mt-3">
              At Flyttman, we strive to be present all over the country in order
              to serve you in the best possible way.
            </p>
          </div>

          {/* Middle Section: Newsletter */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold">Subscribe to our newsletter</h5>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3">
              <input
                type="email"
                className="form-control mb-2 mb-md-0"
                placeholder="Email"
                style={{ maxWidth: "250px" }}
              />
              <button className="btn btn-success ms-md-2">Subscribe</button>
            </div>
          </div>

          {/* Right Section: Contact Information */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">Vantörsvägen 270 12957 Hägersten</p>
            <p className="mb-1">+46765260659</p>
            <p>
              <a
                href="mailto:info@pickpackflytt.se"
                className="text-decoration-none text-dark"
              >
                info@pickpackflytt.se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
