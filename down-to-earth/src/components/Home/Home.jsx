import React, { useState } from 'react';
import Card from '../Card/Card';
import './Home.css';

export default function Home() {
    // State to track the current image and text
    const [imageIndex, setImageIndex] = useState(0);

    // Handle image and text change onClick
    const handleClick = () => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)); // Toggle between 0 and 1
    };



    const services = [
        {
            title: "Sewer Laterals",
            image: "/sewer.jpg",
            link: "/services/sewer",
        },
        {
            title: "Water Laterals",
            image: "/water.jpg",
            link: "/services/water",
        },
        {
            title: "Septic Systems",
            image: "/septic.jpg",
            link: "/services/septic",
        },
        {
            title: "Excavation",
            image: "/excavation.jpg",
            link: "/services/excavation",
        },
        {
            title: "Grading",
            image: "/grading.jpg",
            link: "/services/grading",
        },
        {
            title: "Demolition and Tear Downs",
            image: "/demolition.jpg",
            link: "/services/demolition",
        },
       
    ]

    return (
        <>
        <div className="home-container" onClick={handleClick}>
            {/* Display image based on imageIndex */}
            <div className={`image-container ${imageIndex === 0 ? 'show-image1' : 'show-image2'}`}>
                <img
                    src={imageIndex === 0 ? '/home1.jpg' : '/home2.jpg'}
                    alt="dynamic"
                    className="image"
                />
            </div>

            {/* Display text based on imageIndex */}
            <div className="text">
                {imageIndex === 0 ? 'When we wake up in the morning!' : 'We Piss Excellence'}
            </div>
        </div>
        <div className='home-about'>
  <div className='home-about-left'>
    <h1 className='home-about-title'>About Us</h1>
    <p className='home-about-text'>
      At Down To Earth Contractors, we pride ourselves on providing high-quality construction services to the Lake Geneva area and surrounding communities. With years of experience in the industry, we specialize in residential and commercial projects that are built to last. Our team of skilled professionals is committed to delivering projects on time and within budget while maintaining a high standard of craftsmanship and attention to detail.

      We believe in building strong relationships with our clients by listening to their needs and working closely together throughout the entire construction process. Whether you're planning a renovation, new build, or repair, Down To Earth Contractors is your trusted partner for all your construction needs. We are dedicated to transforming your vision into reality while ensuring the highest level of customer satisfaction.
    </p>
  </div>
  <div className='home-about-right'>
    <h1 className='home-about-title'>Our Mission</h1>
    <ul className='home-about-text'>
      <li>Quality Workmanship: Delivering superior craftsmanship on every project, ensuring long-lasting results.</li> <b />
      <li>Customer Satisfaction: Building strong, transparent relationships with clients by understanding their needs and offering personalized solutions.</li> <b />
      <li>Timely and Efficient Service: Completing projects on schedule and within budget without compromising on quality.</li>
    </ul>
  </div>
</div>
<div className='home-services-title'>
<h1>Services</h1>
</div>


<div className="home-services">

    {services.map((service, index) => (
        <Card 
        key={index} 
        title={service.title} 
        image={service.image} 
        link={service.link} 
        />
    ))}
</div>

        </>
    );
}

