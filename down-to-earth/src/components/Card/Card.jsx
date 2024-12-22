import React from 'react';
import './Card.css';

export default function Card({ title, image, link }) {
  return (
    <a href={link} className='card' style={{ backgroundImage: `url(${image})` }}>
    <div className='card-title'>{title}</div>
    </a>
  );
}
