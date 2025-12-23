import { useState, useEffect } from 'react';
import './Desktop.css';
import CVWindow from './CVWindow';
import ProjectsWindow from './ProjectsWindow';
import ProjectDetailWindow from './ProjectDetailWindow';
import SettingsPopup from './SettingsPopup';
import MemoriesWindow from './MemoriesWindow';
import OthersWindow from './OthersWindow';
import { getTodayHoliday } from '../data/holidays';

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
  const [theme, setTheme] = useState({
    id: 5,
    name: 'Night',
    wallpaper: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)',
    fontColor: '#ffffff',
    windowAppearance: 'dark'
  });
  const [festiveThemesEnabled, setFestiveThemesEnabled] = useState(true);
  const [currentHoliday, setCurrentHoliday] = useState(null);
  const [previewHoliday, setPreviewHoliday] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Check for holiday and apply festive theme
  useEffect(() => {
    const holiday = getTodayHoliday();
    
    // Use preview holiday if set (dev mode), otherwise use actual holiday
    const activeHoliday = previewHoliday || holiday;
    setCurrentHoliday(activeHoliday);
    
    if (festiveThemesEnabled && activeHoliday) {
      // Create a temporary theme object for the holiday
      setTheme({
        id: 'holiday',
        name: activeHoliday.name,
        wallpaper: activeHoliday.wallpaper,
        fontColor: activeHoliday.folderNameColor || '#ffffff',
        windowAppearance: activeHoliday.appearance || 'dark'
      });
    }
  }, [festiveThemesEnabled, previewHoliday]);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

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

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleFestiveThemesToggle = (enabled) => {
    setFestiveThemesEnabled(enabled);
    
    if (enabled) {
      const holiday = previewHoliday || getTodayHoliday();
      if (holiday) {
        setTheme({
          id: 'holiday',
          name: holiday.name,
          wallpaper: holiday.wallpaper,
          fontColor: holiday.folderNameColor || '#ffffff',
          windowAppearance: holiday.appearance || 'dark'
        });
      }
    } else {
      // When toggling off, revert to Night theme
      setTheme({
        id: 5,
        name: 'Night',
        wallpaper: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)',
        fontColor: '#ffffff',
        windowAppearance: 'dark'
      });
    }
  };

  const handlePreviewHoliday = (holiday) => {
    setPreviewHoliday(holiday);
    // Auto-enable festive themes when previewing
    if (!festiveThemesEnabled) {
      setFestiveThemesEnabled(true);
    }
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

  // Debug: Log state changes
  console.log('Desktop State:', {
    festiveThemesEnabled,
    currentHoliday: currentHoliday?.name,
    previewHoliday: previewHoliday?.name,
    hasFestiveClass: festiveThemesEnabled && currentHoliday
  });

  return (
    <div 
      className={`desktop ${theme.windowAppearance} ${festiveThemesEnabled && currentHoliday ? 'festive-mode' : ''}`}
      style={{
        '--holiday-navbar': currentHoliday?.colors?.navbar || 'rgba(255, 255, 255, 0.3)',
        '--holiday-navbar-border': currentHoliday?.colors?.navbarBorder || 'rgba(255, 255, 255, 0.2)',
        '--holiday-folder': currentHoliday?.colors?.folder || '#667eea',
        '--holiday-dock': currentHoliday?.colors?.dock || 'rgba(255, 255, 255, 0.1)',
        '--desktop-font-color': theme.fontColor
      }}
    >
      {/* Wallpaper */}
      <div className="desktop-wallpaper" style={{ background: theme.wallpaper }}></div>

      {/* Mobile Holiday Greeting - shown outside menu bar for mobile visibility */}
      {currentHoliday && festiveThemesEnabled && (
        <div className="menu-holiday mobile-holiday">
          <span className="holiday-emoji">{currentHoliday.emoji}</span>
          <span className="holiday-name">{currentHoliday.name}</span>
          {previewHoliday && <span className="dev-badge">DEV</span>}
        </div>
      )}

      {/* Menu Bar */}
      <div className="menu-bar" style={
        festiveThemesEnabled && currentHoliday ? {
          background: currentHoliday.colors.navbar,
          borderBottomColor: currentHoliday.colors.navbarBorder
        } : {}
      }>
        <div className="menu-bar-left">
          <div className="apple-logo"></div>
          <div className="menu-item">Archive</div>
          <div className="menu-item">File</div>
          <div className="menu-item">Edit</div>
          <div className="menu-item">View</div>
        </div>
        <div className="menu-bar-right">
          {currentHoliday && festiveThemesEnabled && (
            <div className="menu-holiday">
              <span className="holiday-emoji">{currentHoliday.emoji}</span>
              <span className="holiday-name">{currentHoliday.name}</span>
              {previewHoliday && <span className="dev-badge">DEV</span>}
            </div>
          )}
          <div className="menu-time">
            {currentTime.toLocaleTimeString('en-US', { 
              hour: 'numeric', 
              minute: '2-digit',
              hour12: true 
            })}
          </div>
          <div className="menu-date">
            {currentTime.toLocaleDateString('en-US', { 
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
          <div 
            className="icon-folder"
            style={festiveThemesEnabled && currentHoliday ? {
              background: currentHoliday.colors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className="icon-label"
            style={festiveThemesEnabled && currentHoliday?.folderNameColor ? {
              color: currentHoliday.folderNameColor
            } : {}}
          >CV_Konrad_Plak</div>
        </div>
        <div 
          className="desktop-icon"
          onClick={handleProjectsDoubleClick}
          onDoubleClick={handleProjectsDoubleClick}
        >
          <div 
            className="icon-folder projects"
            style={festiveThemesEnabled && currentHoliday ? {
              background: currentHoliday.colors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className="icon-label"
            style={festiveThemesEnabled && currentHoliday?.folderNameColor ? {
              color: currentHoliday.folderNameColor
            } : {}}
          >Projects</div>
        </div>
        <div 
          className="desktop-icon"
          onClick={handleOthersDoubleClick}
          onDoubleClick={handleOthersDoubleClick}
        >
          <div 
            className="icon-folder others"
            style={festiveThemesEnabled && currentHoliday ? {
              background: currentHoliday.colors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className="icon-label"
            style={festiveThemesEnabled && currentHoliday?.folderNameColor ? {
              color: currentHoliday.folderNameColor
            } : {}}
          >Others</div>
        </div>
      </div>

      {/* CV Window */}
      {isCVOpen && (
        <CVWindow 
          onClose={handleCVClose}
          onMinimize={handleCVMinimize}
          onMaximize={handleCVMaximize}
          isMaximized={isCVMaximized}
          theme={theme}
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
          theme={theme}
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
          theme={theme}
        />
      )}

      {/* Memories Window */}
      {isMemoriesOpen && (
        <MemoriesWindow 
          onClose={handleMemoriesClose}
          onMinimize={handleMemoriesMinimize}
          onMaximize={handleMemoriesMaximize}
          isMaximized={isMemoriesMaximized}
          theme={theme}
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
          theme={theme}
        />
      )}

      {/* Settings Popup */}
      {isSettingsOpen && (
        <SettingsPopup 
          onClose={handleSettingsClose}
          onThemeChange={handleThemeChange}
          currentTheme={theme}
          festiveThemesEnabled={festiveThemesEnabled}
          onFestiveThemesToggle={handleFestiveThemesToggle}
          onPreviewHoliday={handlePreviewHoliday}
        />
      )}

      {/* Dock */}
      <div className="dock-container">
        <div 
          className="dock"
          style={
            festiveThemesEnabled && currentHoliday ? {
              background: currentHoliday.colors.dock,
              backdropFilter: 'blur(30px) saturate(180%)',
              borderColor: currentHoliday.colors.navbarBorder
            } : {}
          }
        >
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
            style={festiveThemesEnabled && currentHoliday ? {
              background: currentHoliday.colors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className={`dock-item folder projects ${!isProjectsOpen ? 'minimized' : ''}`}
            onClick={!isProjectsOpen ? handleProjectsRestore : undefined}
            title="Projects"
            style={festiveThemesEnabled && currentHoliday ? {
              background: currentHoliday.colors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className={`dock-item folder others ${!isOthersOpen ? 'minimized' : ''}`}
            onClick={!isOthersOpen ? handleOthersRestore : undefined}
            title="Others"
            style={festiveThemesEnabled && currentHoliday ? {
              background: currentHoliday.colors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
   
        </div>
      </div>
    </div>
  );
}
