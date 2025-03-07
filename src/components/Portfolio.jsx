import React from 'react';
import './Portfolio.css';
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'
import image4 from '../assets/img4.jpg'
import image5 from '../assets/img5.jpg'
import image6 from '../assets/img6.jpg'
const Portfolio = () => {
  // Define an array of images for the portfolio items
  const images = [image1, image2, image3, image4, image5, image6];

  // Generate array of portfolio items
  const portfolioItems = images.map((image, i) => ({
    id: i + 1,
    title: `Property Expo ${i + 1}`,
    location: 'Mumbai, 2024',
    image // ✅ Assign the correct image path
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
