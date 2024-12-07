import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images to display in the carousel
  const slides = [
    `${process.env.PUBLIC_URL}/image/de.png`,
    `${process.env.PUBLIC_URL}/image/op.png`,
    `${process.env.PUBLIC_URL}/image/to.png`,
  ];

  // Effect to automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          width: "80%",
          margin: "0 auto",
          height: "10vh",
          marginTop: "10px",
          borderRadius: "1rem",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img
              src={`${process.env.PUBLIC_URL}/image/rt.png`}
              alt="Flyttman Logo"
              className="img-fluid"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-success me-2">Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: "97%", margin: " auto" }}
      >
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={currentSlide === index ? "active" : ""}
              aria-current={currentSlide === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${currentSlide === index ? "active" : ""}`}
            >
              <img
                src={slide}
                alt="Client"
                className="img-fluid w-100 rounded imgnav"
                style={{ height: "700px", objectFit: "cover" ,borderRadius:"1rem"}} // Set a fixed height and maintain aspect ratio
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
