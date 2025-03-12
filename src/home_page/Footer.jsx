import React from 'react';
import './Footer.css'; // Create this CSS file for styling
import logo from './logo.png';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <div className="logo-section">
                        <img src={logo} alt="Research Innovation & Discovery Logo" className="logo"
                             height={'70px'}

                        /> {/* Replace with your logo path */}
                    </div>

                    <p>Mig, 72, Rajiv Nagar, A Sector, Aayodhya bypass Bhopal, Madhya Pradesh, India (462022)</p>
                    <p><a href="mailto:ridorg.in@gmail.com">ridorg.in@gmail.com</a> | <a
                        href="mailto:ridorg.in@gmail.com">Email</a></p>
                    <p><a href="tel:+919892782728">+91 9892782728</a> | Mobile</p>
                </div>

                <div className="footer-section">
                    <h3>RESEARCH TOPICS</h3>
                    <div className="topics-grid">
                        <a href="#">Computers</a>
                        <a href="#">Space Engineering</a>
                        <a href="#">Aeronautical Engineering</a>
                        <a href="#">Tech National Affairs</a>
                        <a href="#">Economy & Work</a>
                        <a href="#">Become Dev</a>
                        <a href="#">AI: Artificial Intelligence</a>
                        <a href="#">Science</a>
                        <a href="#">Frontend Techstack</a>
                        <a href="#">Race & Ethnicity</a>
                        <a href="#">Internet & Technology</a>
                        <a href="#">Resume Building</a>
                        <a href="#">Religion</a>
                        <a href="#">News Habits & Media</a>
                        <a href="#">Formal Communication</a>
                        <a href="#">Age & Generations</a>
                        <a href="#">Methodological Research</a>
                        <a href="#">English & More</a>
                        <a href="#">Gender & Equality</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>FOLLOW US</h3>
                    <div className="follow-links">
                        <a href="#"><i className="far fa-envelope"></i> Email Newsletters</a>
                        <a href="#"><i className="fab fa-youtube"></i> YouTube</a>
                        <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
                        <a href="#"><i className="fas fa-rss"></i> RSS Feed</a>
                        <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
                    </div>
                </div>
            </div>
            <div className="about-section">
                <strong>ABOUT RESEARCH INNOVATION & DISCOVERY:</strong> RID Organization i.e. Research, Innovation and
                Discovery Organization is an organization which is run by TWF (TWKSAA WELFARE FOUNDATION) NGO. The main
                objective of which is that in the coming times, the discovery, publication and use of NEW (RID, PMS &
                TLR) should be done first in Indian culture, civilization and language from this holy land of India.
            </div>
        </footer>
    );
};

export default Footer;