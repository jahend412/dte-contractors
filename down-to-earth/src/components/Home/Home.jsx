import React, { useState } from 'react';
import './Home.css';

export default function Home() {
    // State to track the current image and text
    const [imageIndex, setImageIndex] = useState(0);

    // Handle image and text change onClick
    const handleClick = () => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)); // Toggle between 0 and 1
    };

    return (
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
    );
}

