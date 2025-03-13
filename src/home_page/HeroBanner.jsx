import React, {useState} from 'react';
import './HeroBanner.css';
import image1 from './isro.png';
import image3 from './ancient_india.jpg';
import image4 from './indisoul.jpg';

const HeroBanner = () => {
    const images = [image1, image3, image4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageClasses, setImageClasses] = useState(['hero-image']);

    const handleDotClick = (index) => {
        setImageClasses(['hero-image', 'hidden']);
        setTimeout(() => {
            setCurrentImageIndex(index);
            setImageClasses(['hero-image']);
        }, 500);
    };

    const handlePrev = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        handleDotClick(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        handleDotClick(newIndex);
    };

    return (
        <div className="hero-banner">
            <div className="arrow left-arrow" onClick={handlePrev}>
                &lt;
            </div>
            <div className={imageClasses.join(' ')}
                 style={{backgroundImage: `url(${images[currentImageIndex]})`}}></div>
            <div className="arrow right-arrow" onClick={handleNext}>
                &gt;
            </div>
            <div className="slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentImageIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default HeroBanner;
