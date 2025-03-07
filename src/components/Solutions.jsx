import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const regionalMarkets = [
    'Pune Metro Region', 
    'Maharashtra Tier-2 Cities', 
    'Metropolitan Markets', 
    'Upcountry Markets'
  ];
  
  const buyerTargets = [
    'Luxury Home Buyers', 
    'First-Time Homeowners', 
    'Investment Portfolios', 
    'NRI Investors'
  ];

  return (
    <section id="solutions" className="solutions py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">CUSTOMISED SOLUTIONS TO CAPTURE BUYERS</h2>
          <div className="divider"></div>
          <p className="text-muted mt-3">Tailored approaches for markets in Pune, Maharashtra, and across India</p>
        </div>
        
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header text-white">
                <h3 className="fs-5 fw-bold mb-0">Regional Market Expertise</h3>
              </div>
              <div className="card-body">
                <p className="card-text text-muted mb-4">
                  We specialize in understanding the unique characteristics of different regional markets across India, particularly in Pune and Maharashtra. Our customized solutions address the specific needs and preferences of buyers in each location.
                </p>
                <ul className="list-unstyled">
                  {regionalMarkets.map((market, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      <span className="bullet-point me-2"></span>
                      <span>{market}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header text-white">
                <h3 className="fs-5 fw-bold mb-0">Buyer Targeting Strategies</h3>
              </div>
              <div className="card-body">
                <p className="card-text text-muted mb-4">
                  Our advanced targeting methods help identify and engage the right buyers for your properties. We combine demographic data with behavioral insights to create highly effective marketing campaigns.
                </p>
                <ul className="list-unstyled">
                  {buyerTargets.map((target, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      <span className="bullet-point me-2"></span>
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;