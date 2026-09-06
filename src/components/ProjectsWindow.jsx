import useWindowAccessibility from '../hooks/useWindowAccessibility';
import { useId, useState, useRef } from 'react';
import './ProjectsWindow.css';
import projects from '../data/projects';

const portfolioCategories = [
  {
    id: 'engineering',
    label: 'Software Engineering',
    shortLabel: 'Engineering',
    color: '#6595ca',
  },
  {
    id: 'design',
    label: 'Product & UI Design',
    shortLabel: 'Design',
    color: '#c48395',
  },
  {
    id: 'specialist',
    label: 'Specialist Practice',
    shortLabel: 'Specialist',
    color: '#9f89c7',
  },
];

function CollectionIcon({ all = false }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    {all ? <><rect x="3" y="3" width="7" height="7" rx="1.6" fill="currentColor" /><rect x="14" y="3" width="7" height="7" rx="1.6" fill="currentColor" opacity=".75" /><rect x="3" y="14" width="7" height="7" rx="1.6" fill="currentColor" opacity=".75" /><rect x="14" y="14" width="7" height="7" rx="1.6" fill="currentColor" /></> : <><path d="M2.5 6a2 2 0 0 1 2-2h5l2.3 2.5h7.7a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" fill="currentColor" opacity=".75" /><path d="M2.5 10a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" fill="currentColor" /><path d="M4.5 8.5h15" stroke="white" strokeOpacity=".4" strokeLinecap="round" /></>}
  </svg>;
}

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
  const filesRef = useRef(null);
  const filesId = useId();
  const categories = [{ id: 'all', label: 'All projects', shortLabel: 'All projects', color: '#bb8c63' }, ...portfolioCategories];
  const currentCategory = categories.find(category => category.id === activeCategory);
  const selectCategory = category => {
    setActiveCategory(category);
    if (filesRef.current) filesRef.current.scrollTop = 0;
  };
  const { windowProps, titleProps } = useWindowAccessibility({ windowRef, onClose, isMaximized, setPosition });
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
        {...windowProps}
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
            <button type="button" aria-label={"Close " + 'Projects'} title="Close" className="control-btn close" onClick={onClose}></button>
            <button type="button" aria-label={"Minimize " + 'Projects'} title="Minimize" className="control-btn minimize" onClick={onMinimize}></button>
            <button type="button" aria-label={(isMaximized ? "Restore size of " : "Maximize ") + 'Projects'} title={isMaximized ? "Restore size" : "Maximize"} className="control-btn maximize" onClick={onMaximize}></button>
          </div>
          <div {...titleProps} className="window-title">Projects</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Window Content */}
        <div className="window-content">
          <div className="projects-browser">
            <aside className="projects-sidebar" aria-label="Project collections">
              <p className="projects-sidebar-label">Browse</p>
              <div className="projects-collections" role="group" aria-label="Project disciplines">
                {categories.map(category => {
                  const count = category.id === 'all' ? projects.length : projects.filter(project => getPortfolioCategories(project).includes(category.id)).length;
                  return <button key={category.id} type="button"
                    className={`projects-collection ${activeCategory === category.id ? 'active' : ''}`}
                    style={{ '--collection-color': category.color }}
                    aria-pressed={activeCategory === category.id}
                    aria-controls={filesId}
                    aria-label={`${category.label}, ${count} projects`}
                    title={category.label}
                    onClick={() => selectCategory(category.id)}>
                    <span className="projects-collection-icon"><CollectionIcon all={category.id === 'all'} /></span>
                    <span className="projects-collection-label">{category.shortLabel}</span>
                    <span className="projects-collection-count" aria-hidden="true">{count}</span>
                  </button>;
                })}
              </div>
            </aside>

            <div className="projects-files-pane">
              <nav className="projects-location-bar" aria-label="Project folder location">
                <span className="projects-location-icon"><CollectionIcon /></span>
                <ol>
                  <li>{activeCategory === 'all' ? <span aria-current="page">Projects</span> : <button type="button" onClick={() => selectCategory('all')}>Projects</button>}</li>
                  {activeCategory !== 'all' && <li><svg className="projects-path-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="m6 4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg><span aria-current="page" title={currentCategory.label}>{currentCategory.shortLabel}</span></li>}
                </ol>
              </nav>
              <section ref={filesRef} id={filesId} className="projects-section" aria-label={currentCategory.label}>
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
                        <img src={project.iconImage} alt="" />
                      ) : (
                        project.icon
                      )}
                    </div>
                    <div className="file-name">{project.name}</div>
                  </button>
                ))}
              </div>
              </section>
              <div className="projects-status-bar" role="status" aria-live="polite" aria-atomic="true"><span className="a11y-only">{currentCategory.label}: </span>{visibleProjects.length} {visibleProjects.length === 1 ? 'item' : 'items'}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
