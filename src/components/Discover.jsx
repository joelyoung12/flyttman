import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBinoculars, faBook } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Discover() {
  return (
    <div className="container mt-5 discon">

            <h4 className='need'>
                Discover a seamless logistics experience designed to  <br />cater to your everyday transportation need.
            </h4>
            <p className='craft'>
                Every transportation need deserve a solution that is efficient,Reliable, and stress-free.form coordination to delivery,experience a logistics journey 
                crafted to simplify your workload and exceed expectations. 
            </p>
      {/* Row */}
      <div className="row text-center">
        {/* Column 1: Truck Icon */}
        <div className="col-md-4">
          <div className="icon-box">
          <FontAwesomeIcon className='con' icon={faBinoculars} size="3x" />
          
            <h5 className="mt-3" style={{color:'gray'}}>Freight Coordination</h5>
            <p>Freight Coordination
            Enjoy effortless shipping with access to a reliable network of haulage providers.
             From ensuring your goods are handled with care to timely deliveries, every detail is managed to perfection.</p>
          </div>
        </div>

        {/* Column 2: Binoculars Icon */}
        <div className="col-md-4">
          <div className="icon-box">
          <FontAwesomeIcon className='con' icon={faTruck} size="3x" />
            <h5 className="mt-3"style={{color:'gray'}} >Quotation Management</h5>
            <p>Quotation Management Simplify decision-making with a streamlined quote
                 process. Easily request and compare tailored options to find the perfect match for your budget and requirements.</p>
          </div>
        </div>

        {/* Column 3: Book Icon */}
        <div className="col-md-4">
          <div className="icon-box">
            <FontAwesomeIcon className='con' icon={faBook} size="3x" />
            <h5 className="mt-3" style={{color:'gray'}}>Seamless Oversight</h5>
            <p>Seamless Oversight Experience peace of mind with end-to-end management. From 
                the initial request to final delivery, every step is handled with precision, ensuring clarity and efficiency throughout.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
