import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h2 className="fw-bold text-grey mb-0">EVOLVE REALTY</h2>
            <p className="text-muted mt-2 mb-0">Designed & Developed by <a href="https://tecmetaverse.com/">TecMetaVerse Solutions</a></p>
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