import React from 'react';
import './Service.css';

export default function Grading() {
  return (
    <div className="service-container">
      <h1 className="service-title">Grading Services</h1>
      <p className="service-description">
        Our grading services ensure that your land is properly prepared for construction, ensuring a stable foundation for your building or project. We provide both residential and commercial grading services to suit all your needs.
      </p>

      <h2 className="service-subtitle">Our Grading Services Include:</h2>
      <ul className="service-list">
        <li>Land Grading</li>
        <li>Site Leveling</li>
        <li>Soil Stabilization</li>
        <li>Road Grading</li>
      </ul>

      <p className="service-contact">
        Contact us for professional grading services that meet your project's requirements.
      </p>
    </div>
  );
}
