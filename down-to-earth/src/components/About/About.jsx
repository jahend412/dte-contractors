import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
        Down to Earth Contractors is a family-owned construction company proudly serving the Lake Geneva area and surrounding communities. Founded over 20 years ago, we have built a reputation for delivering high-quality construction services with integrity, expertise, and a personal touch. Whether you're planning a residential renovation, a commercial build, or a small repair, our dedicated team of professionals is here to bring your vision to life.
</p> 
<p>
At Down to Earth Contractors, we specialize in a wide range of construction services, including excavation, grading, septic systems, sewer and water laterals, and demolition. Our goal is to provide our clients with not only exceptional craftsmanship but also peace of mind throughout the entire construction process. We pride ourselves on being transparent, reliable, and committed to delivering each project on time and within budget.
</p> 
<p>
Why do we do it? For us, construction is more than just building structures; it's about creating lasting relationships with our clients and making a positive impact in the communities we serve. Every project we take on is an opportunity to transform a space and improve the lives of the people who use it. We are passionate about what we do and approach each job with the utmost care, attention to detail, and dedication to excellence.
</p> 
<p>
Our commitment to excellence has been the cornerstone of our success. Since our founding, we have worked tirelessly to maintain the highest standards of craftsmanship and customer service. We strive to be the best by continuously improving our skills, investing in the latest tools and technology, and fostering a collaborative environment where our team can thrive. At Down to Earth Contractors, we don't just build—we build relationships that last.
</p>

      </div>
      <div className="about-image">
        <img src="/cover.jpg" alt="cover" className="about-img" />
      </div>
    </div>
  );
}

