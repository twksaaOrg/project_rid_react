import React from 'react';
import './LatestReadings.css'; // Create this CSS file for styling
import stockmrkt from './stockmrkt.jpg';
import nvidia from './nvidia.jpg';
import waifu from './waifu.jpg';

const LatestReadings = () => {
    return (
        <div className="latest-readings">
            <div className="header">
                <h1>Latest Readings</h1>
                <p>We're gathering a lot of content from various sources and conducting additional research to provide you with valuable insights and a great experience.</p>
            </div>

            <div className="content-container-latest-readings">

                <div className="section-main">
                    <h2>Internet & Technology</h2>
                    <div className="article-main">
                        <img src={stockmrkt} alt="Stock Market"  height={'350px'} /> {/* Replace with your image */}
                        <div className="article-content">
                            <p className="report-date">REPORT MAY 17, 2024</p>
                            <h3>Stock Market | Popular Now-A-Days | Any Future?</h3>
                            <p>In the readings, you can learn how the RID algorithm works and discover popular topics such as stock market analysis, AI, and machine learning.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="section-sub">
                    <h2>Our Publications</h2>
                    <div className="article">
                        <img src={waifu} alt="AI Generated Art" /> {/* Replace with your image */}
                        <div className="article-content">
                            <p className="report-date">REPORT MAY 09, 2024</p>
                            <h3>AI Generated Art | Open AI</h3>
                            <p>Launched new model to generate images more precisely.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>

                    <div className="article">
                        <img src={nvidia} alt="NVIDIA" /> {/* Replace with your image */}
                        <div className="article-content">
                            <p className="report-date">REPORT JUNE 21, 2024</p>
                            <h3>NVIDIA is making new records. It is now on top in the list of best tech companies</h3>
                            <p>NVIDIA is a company that manufactures chips related to visual graphics hardware, known as GPUs. They are integrating AI and machine learning into their processes to develop new updates.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="load-more">
                <button>Load More</button>
            </div>
        </div>
    );
};

export default LatestReadings;