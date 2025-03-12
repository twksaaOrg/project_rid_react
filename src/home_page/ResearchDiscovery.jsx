import React from 'react';
import './ResearchDiscovery.css'; // Create this CSS file for styling
import illustration from './research-abstract.jpg'; // Replace with your image path

const ResearchDiscovery = () => {
    return (
        <div className="research-discovery">
            <div className="content">
                <h1>Discover research</h1>
                <p>Access over publication pages and stay up to date with what's happening in your field.</p>

                <h2>SEARCH PUBLICATIONS</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Search Publications..." />
                    <i className="fas fa-search"></i> {/* Replace with your search icon */}
                </div>

                <h2>Connect with your scientific community</h2>
                <p>Share your research, collaborate with your peers, and get the support you need to advance your career.</p>

                <h2>VISIT TOPIC PAGES</h2>
                <div className="topic-buttons">
                    <button>Astrophysics</button>
                    <button>Physics</button>
                    <button>Climate Change</button>
                    <button>Engineering</button>
                    <button>Biology</button>
                    <button>Chemistry</button>
                    <button>Medicine</button>
                    <button>Mathematics</button>
                    <button>Social Science</button>
                    <button>Computer Science</button>
                </div>
            </div>

            <div className="illustration">
                <img src={illustration} alt="Research Illustration" />
            </div>
        </div>
    );
};

export default ResearchDiscovery;