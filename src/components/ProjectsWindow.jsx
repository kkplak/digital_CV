import { useState, useRef } from 'react';
import './ProjectsWindow.css';
import projects from '../data/projects';

const portfolioCategories = [
  {
    id: 'engineering',
    label: 'Software Engineering',
  },
  {
    id: 'design',
    label: 'Product & UI Design',
  },
  {
    id: 'specialist',
    label: 'Specialist Practice',
  },
];

const getPortfolioCategories = (project) => {
  if (Array.isArray(project.portfolioCategories)) return project.portfolioCategories;
  if (project.portfolioCategory) return [project.portfolioCategory];

  const searchableText = [project.role, project.projectType, ...(project.focusAreas || [])]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  if (searchableText.includes('ui designer') || searchableText.includes('web design')) {
    return ['design'];
  }

  if (searchableText.includes('accessibility research')
    || project.role?.toLowerCase() === 'quality assurance'
    || searchableText.includes('creative coding')
    || searchableText.includes('shader')
    || searchableText.includes('filmmaking')) {
    return ['specialist'];
  }

  return ['engineering'];
};

export default function ProjectsWindow({ onClose, onMinimize, onMaximize, isMaximized, onProjectClick, theme }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 130, y: 80 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState('all');
  const windowRef = useRef(null);
  const visibleProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) => getPortfolioCategories(project).includes(activeCategory));

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
          <div className="projects-browser">
            <div className="projects-tabs" role="tablist" aria-label="Project disciplines">
              {[{ id: 'all', label: 'All Work', projectCount: projects.length }, ...portfolioCategories].map((category) => {
                const projectCount = category.projectCount ?? projects.filter(
                  (project) => getPortfolioCategories(project).includes(category.id),
                ).length;

                return (
                  <button
                    key={category.id}
                    className={`projects-tab ${activeCategory === category.id ? 'active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === category.id}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span>{category.label}</span>
                    <span className="projects-tab-count">{projectCount}</span>
                  </button>
                );
              })}
            </div>

            <section className="projects-section">
              <div className="projects-grid">
                {visibleProjects.map((project) => (
                  <button
                    key={`${project.id}-${project.name}`}
                    className="project-file"
                    type="button"
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
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
