import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import * as THREE from 'three';
import './Contact.css';

const Contact = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!sceneRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 300;
      const posArray = new Float32Array(particleCount * 3);
      const scaleArray = new Float32Array(particleCount);

      for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 10;
        posArray[i + 1] = (Math.random() - 0.5) * 10;
        posArray[i + 2] = (Math.random() - 0.5) * 10;
        scaleArray[i / 3] = Math.random() * 0.5 + 0.1;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        transparent: true,
        color: 0x6ea8fe,  // Changed to match your theme color
        opacity: 0.6,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      camera.position.z = 5;

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      const animate = () => {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0003;
        renderer.render(scene, camera);
      };

      animate();

      sceneRef.current = {
        scene,
        camera,
        renderer,
        particlesMesh,
        cleanup: () => {
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
          particlesMesh.geometry.dispose();
          particlesMesh.material.dispose();
        }
      };
    }

    return () => {
      if (sceneRef.current) {
        sceneRef.current.cleanup();
        sceneRef.current = null;
      }
    };
  }, []);

  return (
    <section id="contact" className="contact py-5">
      <canvas ref={canvasRef} className="particle-canvas" />
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
                  <h4 className="text-primary fw-bold" style={{ textDecoration: 'none', color: 'inherit' }}>Phone</h4>
                  <a href="tel:+919457011160" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p className="mb-1">+91 94570 11160</p>
                  </a>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="contact-icon me-3">
                <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-primary fw-bold" style={{ textDecoration: 'none', color: 'inherit' }}>Email</h4>
                  <a href="mailto:info@evolverealty.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p>info@evolverealty.com</p>
                  </a>
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