import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Number() {
  return (
    <div className="container total">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="p-3  text-center"> 
            <h4>The numbers speak for themselves</h4>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="p-3  text-center" style={{borderRight:"5px solid white"}}>
            <h4>
              500 <br />Service days
            </h4>
          </div>
        </div>
        <div className="col-12 col-md-3" style={{borderRight:"5px solid white"}}>
          <div className="p-3  text-center">

            <h4>950 <br />Happy customer</h4>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="p-3  text-center">

            <h4>4 <br />location & Expanding</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Number;
