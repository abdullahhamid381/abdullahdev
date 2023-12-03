import React from 'react'
import './HomeScss/About.scss'
import { FiDownload } from "react-icons/fi";
const About = () => {
    return (
        <div className='about-parent'>
            <div className="about-grid">
                <div className='about-text'>
                    <div>
                        <h3>About Me</h3>
                        <h1>Transforming visions into
                            exceptional portfolios</h1>
                    </div>
                    <div className='about-info'>
                        <div>
                            <button></button>
                        </div>
                        <div className='about-detail-text'>
                            <p>Dynamic ReactJS and Node.js developer with a formidable two-year track record. Expertise in crafting high-impact, responsive interfaces and robust server-side solutions. Demonstrated ability to innovate and streamline development processes. Ready to elevate your projects with my seasoned skills. <span>More ...</span></p>
                            <button className='download'>Download Cv <FiDownload /></button>
                        </div>
                    </div>
                </div>
                <div className='about-img'>
                    <img src="./images/myimg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About