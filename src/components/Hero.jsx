import React from 'react';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">Transform Your Sales Strategy</h1>
            <p className="lead mb-4">Subsequent to yesterday's meeting, we present our recommendations on flow of communication and event planning for your website.</p>
            <button 
              onClick={() => scrollToSection('concept')} 
              className="btn btn-light btn-lg fw-bold text-primary"
            >
              Discover More
            </button>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="hero-image-container">
              <img src="https://via.placeholder.com/600x400" alt="Real Estate Event" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;