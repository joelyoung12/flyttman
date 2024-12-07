import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

function Navdetails() {
  return (
    <div className="container mt-5 custom-margin" id="nvd">
      {/* Row with Two Columns */}
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="p-3">
            <h3 className="stream">
              StreamLined Haulage <br /> Services for Your needs
            </h3>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="p-3">
            <h3 className="stream">
              Request a quote and let us <br /> handle the logistics, <br />
              <button className="btn btn-success  me-2">Get a Free Quote</button>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navdetails;
