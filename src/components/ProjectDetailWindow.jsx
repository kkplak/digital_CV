import { useState, useRef } from 'react';
import './ProjectDetailWindow.css';

export default function ProjectDetailWindow({ project, onClose, onMinimize, onMaximize, isMaximized, theme }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 200, y: 80 });
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
            <button className="control-btn close" onClick={onClose}></button>
            <button className="control-btn minimize" onClick={onMinimize}></button>
            <button className="control-btn maximize" onClick={onMaximize}></button>
          </div>
          <div className="window-title">{project.name}</div>
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
              </div>
            </div>

            <div className="project-content">
              {project.description && (
                <div className="project-section">
                  <h2>Description</h2>
                  <p>{project.description}</p>
                </div>
              )}

              {project.details && (
                <div className="project-section">
                  <h2>Details</h2>
                  <p>{project.details}</p>
                </div>
              )}

              {project.focusAreas && project.focusAreas.length > 0 && (
                <div className="project-section">
                  <h2>Focus Areas</h2>
                  <div className="tech-tags">
                    {project.focusAreas.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

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
