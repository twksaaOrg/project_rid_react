import React from 'react';
import './WelcomeSection.css'; // Create this CSS file for styling

const WelcomeSection = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-content">
                <h2>WELCOME TO THE FUTURE OF RESEARCH INNOVATION & DISCOVERY (RID)</h2>
                <p>At RID, we bring the world's most promising minds into our circle to investigate, inspire, and innovate a technical & logical world for all.</p>
                <button className="learn-more-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default WelcomeSection;