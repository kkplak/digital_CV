import useWindowAccessibility from '../hooks/useWindowAccessibility';
import { useState, useRef } from 'react';
import './ProjectDetailWindow.css';

export default function ProjectDetailWindow({ project, onClose, onMinimize, onMaximize, isMaximized, theme }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 210, y: 90 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const { windowProps, titleProps } = useWindowAccessibility({ windowRef, onClose, isMaximized, setPosition });
  const techStackItems = project.techStack || project.focusAreas || [];
  const projectSummary = project.details || project.description;

  const getProjectType = () => {
    if (project.projectType) return project.projectType;

    const searchableText = [project.name, project.description, project.details, project.role]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    if (searchableText.includes('happy meal') || searchableText.includes("mcdonald's")) {
      return "Happy Meal McDonald's Mobile Game";
    }

    if (searchableText.includes('film') || searchableText.includes('short film')) {
      return 'Short Film Project';
    }

    if (searchableText.includes('quality assurance') || searchableText.includes('qa')) {
      return 'Game QA Project';
    }

    if (searchableText.includes('website') || searchableText.includes('web')) {
      return project.category === 'personal' ? 'Personal Website Project' : 'Company Website';
    }

    if (searchableText.includes('game') || searchableText.includes('webgl') || searchableText.includes('shader')) {
      return project.category === 'personal' ? 'Personal Game Project' : 'Interactive Game Project';
    }

    return project.category === 'personal' ? 'Personal Project' : 'Digital Project';
  };

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
        {...windowProps}
        className={`project-detail-window ${isMaximized ? 'maximized' : ''} ${theme?.windowAppearance || 'dark'}`}
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
            <button type="button" aria-label={"Close " + project.name} title="Close" className="control-btn close" onClick={onClose}></button>
            <button type="button" aria-label={"Minimize " + project.name} title="Minimize" className="control-btn minimize" onClick={onMinimize}></button>
            <button type="button" aria-label={(isMaximized ? "Restore size of " : "Maximize ") + project.name} title={isMaximized ? "Restore size" : "Maximize"} className="control-btn maximize" onClick={onMaximize}></button>
          </div>
          <div {...titleProps} className="window-title">{project.name}</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Window Content */}
        <div className="window-content">
          <div className="project-document">
            <div className="project-header">
              <div className="project-icon-large">
                {project.iconImage ? (
                  <img src={project.iconImage} alt={project.name} />
                ) : (
                  project.icon
                )}
              </div>
              <div className="project-info">
                <h1 className="project-title">{project.name}</h1>
                {project.date && <div className="project-date">{project.date}</div>}
                {project.role && <div className="project-role">{project.role}</div>}
                <div className="project-type">{getProjectType()}</div>
              </div>
            </div>

            <div className="project-content">
              {projectSummary && (
                <div className="project-section">
                  <h2>Summary</h2>
                  <p>{projectSummary}</p>
                </div>
              )}

              {(Array.isArray(techStackItems) && techStackItems.length > 0) || (project.focusAreas && project.focusAreas.length > 0) ? (
                <div className="project-section project-capabilities-section">
                  <h2>Overview</h2>
                  <div className="capability-groups">
                    {project.focusAreas && project.focusAreas.length > 0 && (
                      <div className="capability-group capability-group-focus">
                        <h3>Focus Areas</h3>
                        <div className="tech-tags">
                          {project.focusAreas.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {Array.isArray(techStackItems) && techStackItems.length > 0 && (
                      <div className="capability-group capability-group-tech">
                        <h3>Tech Stack</h3>
                        <div className="tech-stack-tags">
                          {techStackItems.map((tech, index) => (
                            <span key={index} className="tech-stack-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}

              {project.images && project.images.length > 0 && (
                <div className="project-section">
                  <h2>Gallery</h2>
                  <div className="project-gallery">
                    {project.images.map((image, index) => (
                      <div key={index} className="gallery-item">
                        <img 
                          src={image.url} 
                          alt={image.caption || `Project image ${index + 1}`}
                          className={`gallery-image ${image.isVertical ? 'vertical' : ''}`}
                        />
                        {image.caption && (
                          <p className="gallery-caption">{image.caption}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.links && project.links.length > 0 && (
                <div className="project-section">
                  <h2>Links</h2>
                  <div className="project-links">
                    {project.links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {link.label || link.url}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
