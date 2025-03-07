import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h2 className="fw-bold text-white mb-0">EVOLVE REALTY</h2>
            <p className="text-muted mt-2 mb-0">Adding the third dimension to your sales efforts</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted mb-0">
              &copy; {currentYear} Evolve Realty. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;