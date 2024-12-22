import React from 'react';
import './Service.css';

export default function SepticSystems() {
  return (
    <div className="service-container">
      <h1 className="service-title">Septic Systems</h1>
      <p className="service-description">
        Our septic system services include installation, inspection, and repair. We ensure that your system is functioning efficiently and is up to code with all local regulations.
      </p>

      <h2 className="service-subtitle">Our Septic System Services Include:</h2>
      <ul className="service-list">
        <li>Septic Tank Installation</li>
        <li>Septic System Inspections</li>
        <li>Septic System Repair</li>
        <li>Pump-Out Services</li>
      </ul>

      <p className="service-contact">
        Get in touch to learn more about our septic system services.
      </p>
    </div>
  );
}
