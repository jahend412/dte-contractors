import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                    
                    
                    <div className='footer-links-container'>
                        <Link to='/' className='footer-links'>Home</Link>
                        <Link to='/about' className='footer-links'>About</Link>
                        <Link to='/services' className='footer-links'>Services</Link>
                        <Link to='/gallery' className='footer-links'>Gallery</Link>
                        <Link to='/contact' className='footer-links'>Contact</Link>
                    </div>
                
                <div className='footer-contact'>
                    <p>Address: <br />N1971 Highway H, Lake Geneva, WI 53147</p>
                    <p>Phone: <br />262-248-2725</p>
                </div>
                <Link to='/' className='footer-logo'>
                        <img src='./cover.jpg' alt='logo' className='footer-logo-img' />
                    </Link>
            </div>
        </footer>
    )
}