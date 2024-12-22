import React from 'react';
import './Service.css';

export default function Excavation() {
  return (
    <div className="service-container">
      <h1 className="service-title">Excavation Services</h1>
      <p className="service-description">
        At Down to Earth Contractors, our excavation services are second to none. 
        Whether it's for residential or commercial purposes, we have the expertise 
        and equipment to get the job done right. From digging foundations to grading 
        and land clearing, we ensure the job is completed safely, efficiently, and on time.
      </p>

      <h2 className="service-subtitle">Our Excavation Services Include:</h2>
      <ul className="service-list">
        <li>Site Preparation</li>
        <li>Trenching</li>
        <li>Grading</li>
        <li>Foundation Excavation</li>
        <li>Land Clearing</li>
      </ul>

      <p className="service-contact">
        Contact us today to learn more about our excavation services and how we can help with your project.
      </p>
    </div>
  );
}
