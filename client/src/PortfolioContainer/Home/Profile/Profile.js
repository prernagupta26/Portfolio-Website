import React from 'react';
import Typical from 'react-typical';
import { useTypewriter } from 'react-simple-typewriter'
import ScrollService from '../../../utilities/ScrollService';

import './Profile.css'
export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href='https://www.linkedin.com/in/prerna-gupta-/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://github.com/prernagupta26'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://leetcode.com/guptaprerna2607/'>
                                <i className='fa fa-code'></i>
                            </a>
                            <a href='mailto:guptaprerna2607@gmail.com'>
                                <i className='fa fa-envelope-square'></i>
                            </a>
                            <a href='https://www.instagram.com/wings_of_fire._/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Prerna</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Programmer 🔴",
                                        1000,
                                        "Software Developer 💻",
                                        1000,
                                        "Java Backend Developer 🌐",
                                        1000,
                                    ]}
                                />
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                        Highly motivated and technically skilled individual.
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn" 
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        > Hire Me </button>
                        <a href="resume.pdf" download="Prerna Gupta.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}