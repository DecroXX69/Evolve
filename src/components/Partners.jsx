import React from 'react';
import './Partners.css';

const Partners = () => {
  // Generate array of 6 partners
  const partners = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`,
    image: `https://via.placeholder.com/180x80`
  }));

  return (
    <section id="partners" className="partners py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">BRANDS ASSOCIATED WITH US</h2>
          <div className="divider"></div>
        </div>
        
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center">
          {partners.map(partner => (
            <div key={partner.id} className="col">
              <div className="partner-logo">
                <img src={partner.image} alt={partner.name} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-md-8 mx-auto text-center">
            <p className="text-muted">
              We've partnered with leading brands and developers across India to create successful property marketing events and campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;