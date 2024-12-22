import React, { useState } from 'react';
import { sendEmail } from '../../utils/email';
import './Contact.css';


export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendEmail(e.target); // Use the form element as the argument
            setStatusMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset the form
        } catch (error) {
            setStatusMessage('Oops! Something went wrong, please try again.');
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                We are here to help with all your excavation, grading, and demolition needs. Contact us today to get started on your next project.
            </p>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <h2 className="contact-subtitle">Send Us a Message</h2>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        value={formData.name}
                        onChange={handleChange}
                        required />
                    <label htmlFor='email'>Email:</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        value={formData.email}
                        onChange={handleChange}
                        required />
                    <label htmlFor='message'>Message:</label>
                    <textarea 
                        id='message' 
                        name='message' 
                        value={formData.message}
                        onChange={handleChange}
                        required />
                    <button type='submit'>Submit</button>
                </form>
                {statusMessage && <p>{statusMessage}</p>}
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

