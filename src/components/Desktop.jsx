import { useState } from 'react';
import './Desktop.css';
import CVWindow from './CVWindow';
import ProjectsWindow from './ProjectsWindow';
import ProjectDetailWindow from './ProjectDetailWindow';
import SettingsPopup from './SettingsPopup';
import MemoriesWindow from './MemoriesWindow';
import OthersWindow from './OthersWindow';

export default function Desktop() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isMemoriesOpen, setIsMemoriesOpen] = useState(false);
  const [isCVMaximized, setIsCVMaximized] = useState(false);
  const [isProjectsMaximized, setIsProjectsMaximized] = useState(false);
  const [isOthersMaximized, setIsOthersMaximized] = useState(false);
  const [isMemoriesMaximized, setIsMemoriesMaximized] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectDetailMaximized, setIsProjectDetailMaximized] = useState(false);
  const [wallpaper, setWallpaper] = useState('linear-gradient(135deg, #2c3e50 0%, #000000 100%)');
  const [theme, setTheme] = useState('dark');

  const handleCVDoubleClick = () => {
    setIsCVOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsCVMaximized(true);
    }
  };

  const handleProjectsDoubleClick = () => {
    setIsProjectsOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsProjectsMaximized(true);
    }
  };

  const handleCVClose = () => {
    setIsCVOpen(false);
    setIsCVMaximized(false);
  };

  const handleProjectsClose = () => {
    setIsProjectsOpen(false);
    setIsProjectsMaximized(false);
  };

  const handleCVMinimize = () => {
    setIsCVOpen(false);
  };

  const handleProjectsMinimize = () => {
    setIsProjectsOpen(false);
  };

  const handleCVMaximize = () => {
    setIsCVMaximized(!isCVMaximized);
  };

  const handleProjectsMaximize = () => {
    setIsProjectsMaximized(!isProjectsMaximized);
  };

  const handleOthersDoubleClick = () => {
    setIsOthersOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsOthersMaximized(true);
    }
  };

  const handleOthersClose = () => {
    setIsOthersOpen(false);
    setIsOthersMaximized(false);
  };

  const handleOthersMinimize = () => {
    setIsOthersOpen(false);
  };

  const handleOthersMaximize = () => {
    setIsOthersMaximized(!isOthersMaximized);
  };

  const handleOthersRestore = () => {
    setIsOthersOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsOthersMaximized(true);
    }
  };

  const handleMemoriesClick = () => {
    setIsMemoriesOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsMemoriesMaximized(true);
    }
  };

  const handleMemoriesClose = () => {
    setIsMemoriesOpen(false);
    setIsMemoriesMaximized(false);
  };

  const handleMemoriesMinimize = () => {
    setIsMemoriesOpen(false);
  };

  const handleMemoriesMaximize = () => {
    setIsMemoriesMaximized(!isMemoriesMaximized);
  };

  const handleMemoriesRestore = () => {
    setIsMemoriesOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsMemoriesMaximized(true);
    }
  };

  const handleCVRestore = () => {
    setIsCVOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsCVMaximized(true);
    }
  };

  const handleProjectsRestore = () => {
    setIsProjectsOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsProjectsMaximized(true);
    }
  };

  const handleArchiveClick = () => {
    setIsSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  const handleWallpaperChange = (newWallpaper) => {
    setWallpaper(newWallpaper);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsProjectDetailMaximized(true);
    }
  };

  const handleProjectDetailClose = () => {
    setSelectedProject(null);
    setIsProjectDetailMaximized(false);
  };

  const handleProjectDetailMinimize = () => {
    setSelectedProject(null);
  };

  const handleProjectDetailMaximize = () => {
    setIsProjectDetailMaximized(!isProjectDetailMaximized);
  };

  return (
    <div className={`desktop ${theme}`}>
      {/* Wallpaper */}
      <div className="desktop-wallpaper" style={{ background: wallpaper }}></div>

      {/* Menu Bar */}
      <div className="menu-bar">
        <div className="menu-bar-left">
          <div className="apple-logo"></div>
          <div className="menu-item">Archive</div>
          <div className="menu-item">File</div>
          <div className="menu-item">Edit</div>
          <div className="menu-item">View</div>
        </div>
        <div className="menu-bar-right">
          <div className="menu-time">
            {new Date().toLocaleTimeString('en-US', { 
              hour: 'numeric', 
              minute: '2-digit',
              hour12: true 
            })}
          </div>
          <div className="menu-date">
            {new Date().toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="desktop-icons">
        <div 
          className="desktop-icon"
          onClick={handleCVDoubleClick}
          onDoubleClick={handleCVDoubleClick}
        >
          <div className="icon-folder"></div>
          <div className="icon-label">CV_Konrad_Plak</div>
        </div>
        <div 
          className="desktop-icon"
          onClick={handleProjectsDoubleClick}
          onDoubleClick={handleProjectsDoubleClick}
        >
          <div className="icon-folder projects"></div>
          <div className="icon-label">Projects</div>
        </div>
        <div 
          className="desktop-icon"
          onClick={handleOthersDoubleClick}
          onDoubleClick={handleOthersDoubleClick}
        >
          <div className="icon-folder others"></div>
          <div className="icon-label">Others</div>
        </div>
      </div>

      {/* CV Window */}
      {isCVOpen && (
        <CVWindow 
          onClose={handleCVClose}
          onMinimize={handleCVMinimize}
          onMaximize={handleCVMaximize}
          isMaximized={isCVMaximized}
        />
      )}

      {/* Projects Window */}
      {isProjectsOpen && (
        <ProjectsWindow 
          onClose={handleProjectsClose}
          onMinimize={handleProjectsMinimize}
          onMaximize={handleProjectsMaximize}
          isMaximized={isProjectsMaximized}
          onProjectClick={handleProjectClick}
        />
      )}

      {/* Others Window */}
      {isOthersOpen && (
        <OthersWindow 
          onClose={handleOthersClose}
          onMinimize={handleOthersMinimize}
          onMaximize={handleOthersMaximize}
          isMaximized={isOthersMaximized}
          onMemoriesClick={handleMemoriesClick}
        />
      )}

      {/* Memories Window */}
      {isMemoriesOpen && (
        <MemoriesWindow 
          onClose={handleMemoriesClose}
          onMinimize={handleMemoriesMinimize}
          onMaximize={handleMemoriesMaximize}
          isMaximized={isMemoriesMaximized}
        />
      )}

      {/* Project Detail Window */}
      {selectedProject && (
        <ProjectDetailWindow
          project={selectedProject}
          onClose={handleProjectDetailClose}
          onMinimize={handleProjectDetailMinimize}
          onMaximize={handleProjectDetailMaximize}
          isMaximized={isProjectDetailMaximized}
        />
      )}

      {/* Settings Popup */}
      {isSettingsOpen && (
        <SettingsPopup 
          onClose={handleSettingsClose}
          onWallpaperChange={handleWallpaperChange}
          onThemeChange={handleThemeChange}
          currentTheme={theme}
        />
      )}

      {/* Dock */}
      <div className="dock-container">
        <div className="dock">
          <div 
            className="dock-item finder"
            onClick={handleArchiveClick}
          ></div>
            {/* <div 
            className="dock-item linkedin"
            onClick={() => window.open('https://www.linkedin.com/in/kkplak', '_blank')}
            title="LinkedIn"
          ></div> */}
          <div className="dock-divider"></div>
          <div 
            className={`dock-item folder ${!isCVOpen ? 'minimized' : ''}`}
            onClick={!isCVOpen ? handleCVRestore : undefined}
            title="CV_Konrad_Plak"
          ></div>
          <div 
            className={`dock-item folder projects ${!isProjectsOpen ? 'minimized' : ''}`}
            onClick={!isProjectsOpen ? handleProjectsRestore : undefined}
            title="Projects"
          ></div>
          <div 
            className={`dock-item folder others ${!isOthersOpen ? 'minimized' : ''}`}
            onClick={!isOthersOpen ? handleOthersRestore : undefined}
            title="Others"
          ></div>
   
        </div>
      </div>
    </div>
  );
}
