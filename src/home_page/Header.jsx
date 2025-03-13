import React from 'react';

const Header = () => {
    return (
        <div style={{
            width: '100%',
            height: "auto",
            backgroundColor: '#1b4ed3', // Assuming the blue is similar to Bootstrap's primary blue
            color: 'white',
            paddingBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
        }}>
            <div style={{ fontSize: '0.8rem' }}> {/* Adjust font size as needed */}
                Research Innovation & Discovery (by TWSKAA Wife Foundation) Helpline: 0100037 8273 Email: support@example.com
            </div>
            <div>
                Main Content | Feedback | Support
            </div>
        </div>
    );
};

export default Header;