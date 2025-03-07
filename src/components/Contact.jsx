import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">CONTACT US</h2>
          <div className="divider"></div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-6">
            <h3 className="fs-2 fw-bold mb-4">Get In Touch</h3>
            <p className="mb-4">
              Ready to transform your property marketing strategy? Reach out to us for a consultation and discover how our event-based approach can revolutionize your sales.
            </p>
            
            <div className="contact-info">
              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-primary fw-bold">Address</h4>
                  <p>Mumbai, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-primary fw-bold">Phone</h4>
                  <p className="mb-1">+91 94570 11160</p>
                  <p>+91 98221 90245</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-primary fw-bold">Email</h4>
                  <p>info@evolverealty.com</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                  <FaInfoCircle />
                </div>
                <div>
                  <h4 className="text-primary fw-bold">Business Hours</h4>
                  <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="social-links mt-4">
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="contact-form">
              <h3 className="fs-2 fw-bold mb-4 text-primary">Send Us a Message</h3>
              
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="phone" 
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold">Your Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows="4" 
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;