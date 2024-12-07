import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function QuoteForm() {
  return (
    <div className="container mt-5 quotecon" 
    style={{
      width: "90% ",
      margin: "0 auto",
      // height: "15vh",
      // marginTop: "10px",
      borderRadius: "1rem",
    }}>
      {/* Title Section */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Get A Free Quote</h1>
        <p className="text-mute">
          Quickly and easily request a personalized haulage quote tailored to
          your needs. Simply fill out the form with your details, and we’ll
          connect you with top logistics partners to provide the best rates.
          Start your hassle-free journey today!
        </p>
      </div>

      {/* Main Grid */}
      <div className="row align-items-center">
        {/* Form Section */}
        <div className="col-md-7">
          <form>
            {/* Contact Information */}
            <h5 className="fw-bold">Contact Information</h5>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Enter full name"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control border-success"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Location</label>
                <select className="form-select border-success">
                  <option>Scroll To Select</option>
                  <option value="1">Location 1</option>
                  <option value="2">Location 2</option>
                  <option value="3">Location 3</option>
                </select>
              </div>
            </div>

            {/* Order Details */}
            <h5 className="fw-bold mt-4">Order Details</h5>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">From City</label>
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Enter from city"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">To City</label>
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Enter to city"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Move Date</label>
                <input
                  type="date"
                  className="form-control border-success"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Type Of Service</label>
                <select className="form-select border-success">
                  <option>Select service type</option>
                  <option value="1">Service 1</option>
                  <option value="2">Service 2</option>
                </select>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input border-success"
                id="privacyPolicy"
              />
              <label className="form-check-label" htmlFor="privacyPolicy">
                I agree to the Privacy Policy and Cancellation Policy
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input border-success"
                id="receiveOffers"
              />
              <label className="form-check-label" htmlFor="receiveOffers">
                I agree that I may receive quotes and offers from PickPack Flytt
                and our partners
              </label>
            </div>
          </form>
          <button className="btn btn-success  me-2">Get a Free Quote</button>
        </div>

        {/* Image Section */}
        <div className="col-md-5">
        <img
              src={`${process.env.PUBLIC_URL}/image/to.png`}
              alt="Flyttman Logo"
              style={{ width: "350px", height: "50vh" }}
            />
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
