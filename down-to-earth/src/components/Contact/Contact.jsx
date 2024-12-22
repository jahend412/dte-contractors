import React from 'react';
import './Contact.css';


export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                We are here to help with all your excavation, grading, and demolition needs. Contact us today to get started on your next project.
            </p>
            <div className="contact-form">
                <form>
                    <h2 className="contact-subtitle">Send Us a Message</h2>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' required />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' required />
                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' name='message' required />
                    <button type='submit'>Submit</button>
                </form>
        </div>
            <h2 className="contact-subtitle">Hours of Operation:</h2>
            <p className="contact-hours">Monday - Friday: 6:00 AM - 5:00 PM</p>
            <p className="contact-hours">Saturday: 6:00 AM - 12:00 PM</p>
            <p className="contact-hours">Sunday: Closed</p>
            <div className="contact-info">
                <p>Phone: 262-248-2725</p>
                <p>Address: </p>
                <p>N1971 Highway H, Lake Geneva, WI 53147</p>
            </div>
            
    </div>
    );
}

