import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BenefitsSection() {
  return (
    <div className="container my-5">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Benefit Of Choosing Us</h2>
      </div>

      <div className="row align-items-center">
        {/* Left Column: Benefits List */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <div className="row gy-4">
            {/* Benefit 1 */}
            <div className="col-12 d-flex align-items-start">
              <div
                className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "40px",
                  height: "40px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                01
              </div>
              <div className="ms-3">
                <h5 className="fw-bold">Vast Network</h5>
                <p className="text-muted">
                  Access a wide range of trusted haulage companies.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="col-12 d-flex align-items-start">
              <div
                className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "40px",
                  height: "40px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                02
              </div>
              <div className="ms-3">
                <h5 className="fw-bold">Tailored Solutions</h5>
                <p className="text-muted">
                  Get quotes and services customized to your needs.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="col-12 d-flex align-items-start">
              <div
                className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "40px",
                  height: "40px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                03
              </div>
              <div className="ms-3">
                <h5 className="fw-bold">Seamless Process</h5>
                <p className="text-muted">
                  Enjoy a streamlined experience from request to delivery.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="col-12 d-flex align-items-start">
              <div
                className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "40px",
                  height: "40px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                04
              </div>
              <div className="ms-3">
                <h5 className="fw-bold">Transparent Pricing</h5>
                <p className="text-muted">
                  No hidden fees—clear costs every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="col-12 col-md-6 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/image/to.png`}
            alt="Haulage truck"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
