import React from "react";
import "./Service.css";
import Card from "../Card/Card";

export default function Services() {
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
    ];
    
    return (
        <div className="services">
        <h1>Our Services</h1>
        <p>Down To Earth Contractors is a multi-dimensional construction company with the resources and experience to execute contracts from a variety of sources, and for a varitey of job types.
            Browse our services below to learn more about what we offer.
        </p> <br />
        <div className="service-card-container">
            {services.map((service, index) => (
            <Card key={index} title={service.title} image={service.image} link={service.link} />
            ))}
        </div>
        </div>
    );
    }
