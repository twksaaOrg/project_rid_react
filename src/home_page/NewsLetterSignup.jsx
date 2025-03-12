import React, { useState } from 'react';
import './NewsletterSignup.css'; // Create this CSS file for styling

const NewsLetterSignup = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your backend or newsletter service
        console.log('Submitting email:', email);
        // Reset the email input
        setEmail('');
    };

    return (
        <div className="newsletter-signup">
            <div className="newsletter-content">
                <h2>Sign up for our newsletter</h2>
                <p>Fresh data delivered whenever you feel low.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetterSignup;