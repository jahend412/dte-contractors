import React from 'react';
import './Service.css';

export default function Demolition() {
  return (
    <div className="service-container">
      <h1 className="service-title">Demolition Services</h1>
      <p className="service-description">
        We offer comprehensive demolition services for both residential and commercial properties. Our team works with precision and safety to remove structures quickly and efficiently, while minimizing environmental impact.
      </p>

      <h2 className="service-subtitle">Our Demolition Services Include:</h2>
      <ul className="service-list">
        <li>Building Demolition</li>
        <li>Concrete Removal</li>
        <li>Site Clearing</li>
        <li>Debris Removal</li>
      </ul>

      <p className="service-contact">
        Reach out today for safe and efficient demolition services.
      </p>
    </div>
  );
}
