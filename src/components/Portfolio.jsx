import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  // Generate array of 6 items for the portfolio grid
  const portfolioItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Property Expo ${i + 1}`,
    location: 'Mumbai, 2024',
    image: `https://via.placeholder.com/400x300`
  }));

  return (
    <section id="portfolio" className="portfolio py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">PREVIOUS EVENTS CONDUCTED BY US</h2>
          <div className="divider"></div>
        </div>
        
        <div className="row g-4">
          {portfolioItems.map(item => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <img src={item.image} alt={item.title} className="img-fluid w-100" />
                <div className="portfolio-overlay">
                  <h3 className="fw-bold">{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;