import React from 'react';
import './RIDOrganization.css'; // Create this CSS file for styling

const RIDOrganization = () => {
    return (
        <div className="rid-organization">
            <div className="content-container">
                <h1>What is RID Organization?</h1>
                <p>
                    RID Organization i.e. Research, Innovation and Discovery Organization is an organization which is run by TWF (TWKSAA WELFARE FOUNDATION) NGO. The main objective of which is that in the coming times, the discovery, publication and use of NEW (RID, PMS & TLR) should be done first in Indian culture, civilization and language from this holy land of India.
                </p>

                <div className="pillars">
                    <div className="pillar">
                        <div className="pillar-header">
                            <i className="fas fa-search"></i> {/* Replace with your icon */}
                            <h2>Research (R)</h2>
                        </div>
                        <h3>Question: Why we should Research?</h3>
                        <ol>
                            <li>Acquisition Of New Knowledge</li>
                            <li>To Solve Problems</li>
                            <li>To Social Progress</li>
                            <li>To Promote Development</li>
                            <li>To Advances In Technology & Business</li>
                            <li>To Develop The Country's Science & Technology</li>
                        </ol>
                    </div>

                    <div className="pillar">
                        <div className="pillar-header">
                            <i className="fas fa-lightbulb"></i> {/* Replace with your icon */}
                            <h2>Innovation (I)</h2>
                        </div>
                        <h3>Question: Why we should Innovation?</h3>
                        <ol>
                            <li>To Progress</li>
                            <li>For Change</li>
                            <li>To Improve Production</li>
                            <li>To Benefit To Society</li>
                            <li>To Be Ahead Of Competition</li>
                            <li>Development Of Country's Science And Technology</li>
                        </ol>
                    </div>

                    <div className="pillar">
                        <div className="pillar-header">
                            <i className="fas fa-compass"></i> {/* Replace with your icon */}
                            <h2>Discovery (D)</h2>
                        </div>
                        <h3>Question: Why we should Discovery?</h3>
                        <ol>
                            <li>Acquisition Of New Knowledge</li>
                            <li>To Discovery Of Inventions</li>
                            <li>To Solving Problems</li>
                            <li>Contribution To Development Of Knowledge</li>
                            <li>For Progress Of Society</li>
                            <li>To Develop The Country's Science & Technology</li>
                        </ol>
                    </div>
                </div>

                <div className="important-message">
                    <p>
                        <strong>Important Message:</strong> All the students, teachers and intellectuals who are interested in Research, Innovation & Discovery to join this RID organization and by discovering something new (RID, PMS & TLR) to the world with their intelligence, wisdom and talent. Solve people's problems by creating and adopting.
                    </p>
                </div>

                <div className="learn-more">
                    <a href="#">Learn About Our Mission To Improve Human Knowledge, Skills And More --</a>
                </div>
            </div>
        </div>
    );
};

export default RIDOrganization;