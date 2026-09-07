import useWindowAccessibility from '../hooks/useWindowAccessibility';
import { useState, useRef } from 'react';
import './ProjectDetailWindow.css';
import ProjectGallery, { ProjectImage } from './ProjectGallery';

export default function ProjectDetailWindow({ project, onClose, onMinimize, onMaximize, isMaximized, theme }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 210, y: 90 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const { windowProps, titleProps } = useWindowAccessibility({ windowRef, onClose, isMaximized, setPosition });
  const techStackItems = Array.isArray(project.techStack) ? [...new Set(project.techStack)] : [];
  const focusAreas = Array.isArray(project.focusAreas) ? project.focusAreas : [];
  const images = Array.isArray(project.images) ? project.images.filter(image => image.url) : [];
  const links = Array.isArray(project.links) ? project.links.filter(link => link.url) : [];
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

        {/* Project document */}
        <div className="window-content">
          <article className="project-document">
            <header className="project-header" style={{ '--project-icon-image': project.iconImage ? `url(${JSON.stringify(project.iconImage)})` : 'none' }}>
              <div className="project-identity">
                <div className="project-icon-large" aria-hidden="true">
                  <ProjectImage key={`${project.name}-${project.iconImage}`} src={project.iconImage} alt="" loading="eager" fallback={project.icon || project.name.slice(0, 2)} />
                </div>
                <div className="project-info">
                  <div className="project-file-meta"><span className="project-type">{getProjectType()}</span>{project.date && <><span className="project-meta-divider" aria-hidden="true" /><span className="project-date">{project.date}</span></>}</div>
                  <h1 className="project-title">{project.name}</h1>
                  {project.role && <p className="project-role"><span>My role</span>{project.role}</p>}
                </div>
              </div>
              {links.length > 0 && <div className="project-links" role="group" aria-label="Project links">
                {links.map((link, index) => (
                  <a key={`${link.url}-${index}`} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg className="project-link-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path d="M6.5 3.5H4A1.5 1.5 0 0 0 2.5 5v7A1.5 1.5 0 0 0 4 13.5h7a1.5 1.5 0 0 0 1.5-1.5V9.5M9 2.5h4.5V7M13 3 7.5 8.5" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="project-link-label">{link.label?.trim() || link.url}</span>
                    <span className="a11y-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </div>}
            </header>

            <div className="project-content">
              {projectSummary && <section className="project-section project-summary"><h2>About the project</h2>{projectSummary.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>}
              {(focusAreas.length > 0 || techStackItems.length > 0) && <aside className="project-inspector" aria-label="Project focus and tools">
                {focusAreas.length > 0 && <section className="project-inspector-section project-focus-panel"><h2>Focus areas</h2><ul className="project-focus-list">{focusAreas.map((area, index) => <li key={`${area}-${index}`}>{area}</li>)}</ul></section>}
                {techStackItems.length > 0 && <section className="project-inspector-section project-tools-panel"><h2>Tech & tools</h2><ul className="project-tool-list">{techStackItems.map(tool => <li key={tool}>{tool}</li>)}</ul></section>}
              </aside>}
              {images.length > 0 && <ProjectGallery key={project.name} images={images} projectName={project.name} />}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
