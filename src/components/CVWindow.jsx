import { useState, useRef } from 'react';
import './CVWindow.css';
import cvData from '../data/cv';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import TagList from './TagList';
import ContactInfo from './ContactInfo';

export default function CVWindow({ onClose, onMinimize, onMaximize, isMaximized }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 80 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (isMaximized || e.target.closest('.window-controls')) return;
    
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isMaximized) return;
    
    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      {isDragging && (
        <div 
          className="drag-overlay"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      )}
      <div 
        ref={windowRef}
        className={`cv-window ${isMaximized ? 'maximized' : ''}`}
        style={!isMaximized ? {
          left: `${position.x}px`,
          top: `${position.y}px`
        } : {}}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Window Title Bar */}
        <div 
          className="window-titlebar"
          onMouseDown={handleMouseDown}
        >
          <div className="window-controls">
            <button className="control-btn close" onClick={onClose}></button>
            <button className="control-btn minimize" onClick={onMinimize}></button>
            <button className="control-btn maximize" onClick={onMaximize}></button>
          </div>
          <div className="window-title">CV_Konrad_Plak.pdf</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Window Content */}
        <div className="window-content">
          <div className="cv-document">
            {/* Header Section */}
            <div className="cv-header">
              <div className="header-photo">
                <img src="/profilowe.png" alt="Konrad Plak" />
              </div>
              <div className="header-info">
                <div className="header-branding">
                  <img src="/codeline-transparent.png" alt="codeline" className="codeline-logo" />
                </div>
                <h1 className="cv-company">{cvData.company}</h1>
                <h1 className="cv-name">{cvData.name}</h1>
       
                <p className="cv-tagline">{cvData.contact.tagline}</p>
                <p className="cv-location">{cvData.contact.location}</p>
                {/* <a href={`https://${cvData.contact.website}`} target="_blank" rel="noopener noreferrer" className="cv-website">
                  {cvData.contact.website}
                </a> */}
              </div>
            </div>

            <div className="cv-content">
              {/* Details Section */}
              <Section title="DETAILS">
                <div className="cv-details">
                  <div className="detail-item">
                    <img src="/email.png" alt="Email" className="detail-icon" />
                    <a href={`mailto:${cvData.contact.email}`}>{cvData.contact.email}</a>
                  </div>
                  <div className="detail-item">
                    <img src="/phone-call.png" alt="Phone" className="detail-icon" />
                    <a href={`tel:${cvData.contact.phone.replace(/\s/g, '')}`}>{cvData.contact.phone}</a>
                  </div>
                  <div className="detail-item">
                    <img src="/linkedin.png" alt="LinkedIn" className="detail-icon" />
                    <a href={`https://${cvData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                      {cvData.contact.linkedin}
                    </a>
                  </div>
                  <div className="detail-item">
                    <img src="/gps.png" alt="Location" className="detail-icon" />
                    <span>{cvData.contact.permit}</span>
                  </div>
                </div>
              </Section>
              {/* About Me Section */}
              <Section title="ABOUT ME">
                <p className="about-paragraph">{cvData.about}</p>
              </Section>

              {/* Professional Experience Section */}
              <Section title="PROFESSIONAL EXPERIENCE">
                {cvData.experience.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    location={exp.location}
                    period={exp.period}
                    description={exp.description}
                    bullets={exp.bullets}
                    subExperience={exp.subExperience}
                  />
                ))}
              </Section>
                    {/* Professional Achievements Section */}
              <Section title="PROFESSIONAL ACHIEVEMENTS">
                {cvData.professionalAchievements.map((achievement, index) => (
                  <div key={index} className="professional-achievement">
                    <div className="achievement-title">{achievement.title}</div>
                    <div className="achievement-description">{achievement.description}</div>
                  </div>
                ))}
              </Section>

              {/* Personal Achievements Section */}
              <Section title="PERSONAL ACHIEVEMENTS">
                <ul className="achievements-list">
                  {cvData.personalAchievements.map((achievement, index) => (
                    <li key={index} className="achievement-item">{achievement}</li>
                  ))}
                </ul>
              </Section>

              {/* Skills Grid Section */}
              <div className="three-column-section">
                <Section title="AREAS OF EXPERTISE">
                  <TagList items={cvData.areasOfExpertise} />
                </Section>

                <Section title="SOFT SKILLS">
                  <TagList items={cvData.softSkills} />
                  <div className="languages-subsection">
                    <h3 className="subsection-title">Languages</h3>
                    <ul className="tag-list">
                      {cvData.languages.map((lang, index) => (
                        <li key={index} className="tag-item">
                          {lang.language} - {lang.level}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Section>

                <Section title="TECH STACK">
                  <TagList items={cvData.techStack} />
                </Section>
              </div>

              {/* Education Section */}
              <Section title="EDUCATION">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-degree">{edu.degree}</div>
                    <div className="education-institution">{edu.institution}</div>
                    <div className="education-details">
                      {edu.location} | {edu.period}
                    </div>
                  </div>
                ))}
              </Section>

              {/* Hobbies and Goals Section */}
              <Section title="HOBBIES AND GOALS">
                {cvData.hobbiesAndGoals.map((item, index) => (
                  <p key={index} className="hobbies-text">{item}</p>
                ))}
              </Section>

        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
