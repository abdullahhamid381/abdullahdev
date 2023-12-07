import React, { useEffect, useRef, useState } from 'react';
import './HomeScss/Skill.scss';

const ProgressBar = ({ label, percentage, isActive }) => (
    <div className={`progress-bar ${isActive ? 'active' : ''}`}>
      <div className="label">{label}</div>
      <div className="bar-container">
        <div className="bar" style={{ width: `${isActive ? percentage : 0}%` }}>
          {isActive && <div className="percentage">{`${''}`}</div>}
        </div>
      </div>
    </div>
  );
  

const Skills = () => {
  const progressBarsData = [
    { label: 'HTML 5', percentage: 80 },
    { label: ' JAVACRIPT', percentage: 70 },
    { label: ' CSS 3 ', percentage: 75 },
    { label: 'REACT.JS', percentage: 80 },
    { label: 'TAILWIND CSS', percentage: 85 },
    { label: 'NODE.JS', percentage: 75 },
  ];

  const [isActive, setIsActive] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
<div className="skill-back-parent">
    <div className="skill-width">
    <div>
      <div className="section" ref={sectionRef}>
        <h3>Skill Experience</h3>
        <h2>Showcasing your talent
amplifying your impact
</h2>
      </div>

      <div className="progress-bars">
        {progressBarsData.map((bar, index) => (
          <ProgressBar
            key={index}
            label={bar.label}
            percentage={bar.percentage}
            isActive={isActive}
          />
        ))}
      </div>
    </div>
    </div>
</div>
  );
};

export default Skills;
