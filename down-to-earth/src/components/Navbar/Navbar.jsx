import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img src='./cover.jpg' alt='logo' className='navbar-logo-img' />
                </Link>
                <ul className='navbar-menu'>
                    <li className='navbar-item'>
                        <Link to='/' className='navbar-links'>Home</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='/about' className='navbar-links'>About</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='/services' className='navbar-links'>Services</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='/gallery' className='navbar-links'>Gallery</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='/contact' className='navbar-links'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

