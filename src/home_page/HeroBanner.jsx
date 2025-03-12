import React from 'react';
import './HeroBanner.css'; // Create this CSS file for styling

const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <div className="hero-image">
                {/* You can add your image here using an <img> tag or as a background image in CSS */}
            </div>
            <div className="slider-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
};

export default HeroBanner;