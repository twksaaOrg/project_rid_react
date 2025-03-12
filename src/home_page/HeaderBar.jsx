import React from 'react';
import logo from './logo.svg';
const HeaderBar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', borderBottom: '1px solid #ddd' }}>
            {/* Left Section (Logo and Text) */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={{ height: '70px', marginRight: '10px' }} /> {/* Replace "/logo.png" with your actual logo path */}
            </div>

            {/* Right Section (Search, Certificate, Login, Register, Navigation) */}
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' , gap: '20px' }}>
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between' , flexDirection: 'row'}}>
                    <button style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', marginRight: '5px' }}>Certificate</button>
                    <button style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', marginRight: '5px' }}>Login</button>
                    <button style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', marginRight: '20px' }}>Register</button>
                </div>
                <nav>
                <a href="/" style={{ marginRight: '10px', textDecoration: 'none', color: '#333' }}>Home</a>
                    <a href="/research-papers" style={{ marginRight: '10px', textDecoration: 'none', color: '#333' }}>Research Papers</a>
                    <a href="/centers" style={{ marginRight: '10px', textDecoration: 'none', color: '#333' }}>Centers</a>
                    <a href="/contact" style={{ marginRight: '10px', textDecoration: 'none', color: '#333' }}>Contact</a>
                    <a href="/about-us" style={{ textDecoration: 'none', color: '#333' }}>About Us</a>
                </nav>
            </div>
        </div>
    );
};

export default HeaderBar;