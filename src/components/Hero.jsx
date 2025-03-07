import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Carousel } from 'react-bootstrap';
import './Hero.css';

// Import images
import heroImage from '../assets/hero.png';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';
import image6 from '../assets/img6.jpg';

const images = [heroImage, image1, image2, image3, image4, image6];

const Hero = ({ scrollToSection }) => {
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
        color: 0xffffff,
        opacity: 0.4,
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
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="particle-canvas" />
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
            <div className="hero-carousel-container">
              <Carousel fade className="hero-carousel" interval={2000} >
                {images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img 
                      src={img} 
                      alt={`Slide ${index + 1}`} 
                      className="d-block w-100 carousel-image"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;