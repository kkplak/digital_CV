import { useState, useRef } from 'react';
import './ProjectsWindow.css';
import projects from '../data/projects';

export default function ProjectsWindow({ onClose, onMinimize, onMaximize, isMaximized, onProjectClick, theme }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 130, y: 80 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const professionalProjects = projects.filter((project) => project.category !== 'personal');
  const personalProjects = projects.filter((project) => project.category === 'personal');

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

  const handleFileClick = (project) => {
    onProjectClick(project);
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
        className={`projects-window ${isMaximized ? 'maximized' : ''} ${theme?.windowAppearance || 'dark'}`}
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
          <div className="window-title">Projects</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Window Content */}
        <div className="window-content">
          <div className="projects-groups">
            <section className="projects-section">
              <h3 className="projects-section-title">Professional</h3>
              <div className="projects-grid">
                {professionalProjects.map((project) => (
                  <div
                    key={`${project.id}-${project.name}`}
                    className="project-file"
                    onClick={() => handleFileClick(project)}
                    title={project.description}
                  >
                    <div className="file-icon">
                      {project.iconImage ? (
                        <img src={project.iconImage} alt={project.name} />
                      ) : (
                        project.icon
                      )}
                    </div>
                    <div className="file-name">{project.name}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="projects-section">
              <h3 className="projects-section-title">Personal</h3>
              <div className="projects-grid">
                {personalProjects.map((project) => (
                  <div
                    key={`${project.id}-${project.name}`}
                    className="project-file"
                    onClick={() => handleFileClick(project)}
                    title={project.description}
                  >
                    <div className="file-icon">
                      {project.iconImage ? (
                        <img src={project.iconImage} alt={project.name} />
                      ) : (
                        project.icon
                      )}
                    </div>
                    <div className="file-name">{project.name}</div>
                  </div>
                ))}
                </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
