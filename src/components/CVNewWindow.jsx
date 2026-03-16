import { useState, useRef } from 'react';
import './CVNewWindow.css';
import cvNewData from '../data/cvNew';

export default function CVNewWindow({ onClose, onMinimize, onMaximize, isMaximized, theme }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 80, y: 60 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (isMaximized || e.target.closest('.window-controls')) return;
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isMaximized) return;
    setPosition({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const d = cvNewData;

  const emphasisRegex = /(Nintendo|Super Mario Galaxy|Squishmallows|Disney|Marvel|Universal Pictures|Playmobil|TinyTAN|Roblox|Game-pad API integration|video-driven web game engine|control customization system|Mentored|Technology Director|FICO|workflow management)/gi;
  const emphasisCheckRegex = /(Nintendo|Super Mario Galaxy|Squishmallows|Disney|Marvel|Universal Pictures|Playmobil|TinyTAN|Roblox|Game-pad API integration|video-driven web game engine|control customization system|Mentored|Technology Director|FICO|workflow management)/i;

  const renderWithEmphasis = (text) => {
    const parts = text.split(emphasisRegex);
    return parts.map((part, idx) => (
      emphasisCheckRegex.test(part)
        ? <strong key={idx}>{part}</strong>
        : <span key={idx}>{part}</span>
    ));
  };

  return (
    <>
      {isDragging && (
        <div
          className="cvnew-drag-overlay"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      )}
      <div
        ref={windowRef}
        className={`cvnew-window ${isMaximized ? 'maximized' : ''} ${theme?.windowAppearance || 'dark'}`}
        style={!isMaximized ? { left: `${position.x}px`, top: `${position.y}px` } : {}}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Title Bar */}
        <div className="cvnew-titlebar" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <button className="control-btn close" onClick={onClose}></button>
            <button className="control-btn minimize" onClick={onMinimize}></button>
            <button className="control-btn maximize" onClick={onMaximize}></button>
          </div>
          <div className="cvnew-window-title">CV_Konrad_Plak_new.pdf</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Document Content */}
        <div className="cvnew-content">
          <div className="cvnew-document">

            {/* Header */}
            <div className="cvnew-header">
              <h1 className="cvnew-name">{d.name}</h1>
              <p className="cvnew-title-line">
                {d.title} <span className="cvnew-separator">|</span> Experience: {d.experience}
              </p>
              <p className="cvnew-contact-line">
                {d.contact.location}
                <span className="cvnew-separator"> | </span>
                <a href={`mailto:${d.contact.email}`}>{d.contact.email}</a>
                <span className="cvnew-separator"> | </span>
                <a href={`tel:${d.contact.phone.replace(/\s/g, '')}`}>{d.contact.phone}</a>
                <span className="cvnew-separator"> | </span>
                Nationality: {d.contact.nationality}
                <span className="cvnew-separator"> | </span>
                Permit: {d.contact.permit}
              </p>
              <p className="cvnew-links-line">
                <a href={d.contact.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
                <span className="cvnew-separator"> | </span>
                <a href={d.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>
            </div>

            {/* Experience */}
            <div className="cvnew-section">
              <h2 className="cvnew-section-title">EXPERIENCE</h2>
              <div className="cvnew-section-divider"></div>
              {d.experience_items.map((exp, idx) => (
                <div key={idx} className="cvnew-exp-item">
                  <div className="cvnew-exp-header">
                    <div className="cvnew-exp-role-company">
                      <span className="cvnew-exp-role">{exp.title},</span>
                      <span className="cvnew-exp-company"> {exp.companyFull}</span>
                    </div>
                    <span className="cvnew-exp-period">{exp.period}</span>
                  </div>
                  <ul className="cvnew-exp-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{renderWithEmphasis(bullet)}</li>
                    ))}
                  </ul>
                  <p className="cvnew-exp-tech">
                    <span className="cvnew-tech-label">Tech:</span> {exp.tech}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="cvnew-section">
              <h2 className="cvnew-section-title">SKILLS</h2>
              <div className="cvnew-section-divider"></div>
              {d.skills.map((skill, idx) => (
                <div key={idx} className="cvnew-skill-row">
                  <span className="cvnew-skill-category">{skill.category}:</span>
                  <span className="cvnew-skill-items"> {skill.items}</span>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="cvnew-section">
              <h2 className="cvnew-section-title">SOFT SKILLS</h2>
              <div className="cvnew-section-divider"></div>
              <p className="cvnew-soft-skills">{d.softSkills}</p>
            </div>

            {/* Languages */}
            <div className="cvnew-section">
              <h2 className="cvnew-section-title">LANGUAGES</h2>
              <div className="cvnew-section-divider"></div>
              <p className="cvnew-languages">
                {d.languages.map((l, idx) => (
                  <span key={idx}>
                    {l.language} — {l.level}{idx < d.languages.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>

            {/* Education */}
            <div className="cvnew-section">
              <h2 className="cvnew-section-title">EDUCATION</h2>
              <div className="cvnew-section-divider"></div>
              {d.education.map((edu, idx) => (
                <div key={idx} className="cvnew-edu-item">
                  <div className="cvnew-edu-header">
                    <div className="cvnew-edu-info">
                      <span className="cvnew-edu-degree">{edu.degree}</span>
                      <span className="cvnew-edu-institution">{edu.institution}, {edu.location}</span>
                    </div>
                    <span className="cvnew-edu-period">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
