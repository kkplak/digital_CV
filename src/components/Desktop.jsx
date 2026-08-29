import { useState, useEffect } from 'react';
import './Desktop.css';
import CVWindow from './CVWindow';
import CVNewWindow from './CVNewWindow';
import CVsWindow from './CVsWindow';
import ProjectsWindow from './ProjectsWindow';
import ProjectDetailWindow from './ProjectDetailWindow';
import SettingsPopup from './SettingsPopup';
import MemoriesWindow from './MemoriesWindow';
import TestimonialsWindow from './TestimonialsWindow';
import AchievementsWindow from './AchievementsWindow';
import OthersWindow from './OthersWindow';
// import { getTodayHoliday } from '../data/holidays'; // Festive themes functionality disabled

export default function Desktop() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isCVNewOpen, setIsCVNewOpen] = useState(false);
  const [isCVsOpen, setIsCVsOpen] = useState(false);
  const [isCVsMaximized, setIsCVsMaximized] = useState(false);
  const [isCVNewMaximized, setIsCVNewMaximized] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isMemoriesOpen, setIsMemoriesOpen] = useState(false);
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isCVMaximized, setIsCVMaximized] = useState(false);
  const [isProjectsMaximized, setIsProjectsMaximized] = useState(false);
  const [isOthersMaximized, setIsOthersMaximized] = useState(false);
  const [isMemoriesMaximized, setIsMemoriesMaximized] = useState(false);
  const [isTestimonialsMaximized, setIsTestimonialsMaximized] = useState(false);
  const [isAchievementsMaximized, setIsAchievementsMaximized] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectDetailMaximized, setIsProjectDetailMaximized] = useState(false);
  const [theme, setTheme] = useState({
    id: 1,
    name: 'Earth Day',
    wallpaper: 'url(https://images.unsplash.com/photo-1661705969607-cde73828023d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGglMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D) center/cover no-repeat',
    fontColor: '#ffffff',
    windowAppearance: 'dark',

  });
  // const [festiveThemesEnabled, setFestiveThemesEnabled] = useState(true);
  // const [currentHoliday, setCurrentHoliday] = useState(null);
  // const [previewHoliday, setPreviewHoliday] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Check for holiday and apply festive theme - DISABLED
  // useEffect(() => {
  //   const holiday = getTodayHoliday();
  //   
  //   // Use preview holiday if set (dev mode), otherwise use actual holiday
  //   const activeHoliday = previewHoliday || holiday;
  //   setCurrentHoliday(activeHoliday);
  //   
  //   if (festiveThemesEnabled && activeHoliday) {
  //     // Create a temporary theme object for the holiday
  //     setTheme({
  //       id: 'holiday',
  //       name: activeHoliday.name,
  //       wallpaper: activeHoliday.wallpaper,
  //       fontColor: activeHoliday.folderNameColor || '#ffffff',
  //       windowAppearance: activeHoliday.appearance || 'dark'
  //     });
  //   }
  // }, [festiveThemesEnabled, previewHoliday]);

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

  const handleCVsDoubleClick = () => {
    setIsCVsOpen(true);
    if (window.innerWidth <= 768) {
      setIsCVsMaximized(true);
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

  const handleCVsClose = () => {
    setIsCVsOpen(false);
    setIsCVsMaximized(false);
  };

  const handleCVsMinimize = () => {
    setIsCVsOpen(false);
  };

  const handleCVsMaximize = () => {
    setIsCVsMaximized(!isCVsMaximized);
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

  const handleTestimonialsClick = () => {
    setIsTestimonialsOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsTestimonialsMaximized(true);
    }
  };

  const handleTestimonialsClose = () => {
    setIsTestimonialsOpen(false);
    setIsTestimonialsMaximized(false);
  };

  const handleTestimonialsMinimize = () => {
    setIsTestimonialsOpen(false);
  };

  const handleTestimonialsMaximize = () => {
    setIsTestimonialsMaximized(!isTestimonialsMaximized);
  };

  const handleTestimonialsRestore = () => {
    setIsTestimonialsOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsTestimonialsMaximized(true);
    }
  };

  const handleAchievementsClick = () => {
    setIsAchievementsOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsAchievementsMaximized(true);
    }
  };

  const handleAchievementsClose = () => {
    setIsAchievementsOpen(false);
    setIsAchievementsMaximized(false);
  };

  const handleAchievementsMinimize = () => {
    setIsAchievementsOpen(false);
  };

  const handleAchievementsMaximize = () => {
    setIsAchievementsMaximized(!isAchievementsMaximized);
  };

  const handleCVsRestore = () => {
    setIsCVsOpen(true);
    if (window.innerWidth <= 768) {
      setIsCVsMaximized(true);
    }
  };

  const handleCVNewDoubleClick = () => {
    setIsCVNewOpen(true);
    if (window.innerWidth <= 768) setIsCVNewMaximized(true);
  };

  const handleCVNewClose = () => {
    setIsCVNewOpen(false);
    setIsCVNewMaximized(false);
  };

  const handleCVNewMinimize = () => setIsCVNewOpen(false);

  const handleCVNewMaximize = () => setIsCVNewMaximized(!isCVNewMaximized);

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

  // const handleFestiveThemesToggle = (enabled) => {
  //   setFestiveThemesEnabled(enabled);
  //   
  //   if (enabled) {
  //     const holiday = previewHoliday || getTodayHoliday();
  //     if (holiday) {
  //       setTheme({
  //         id: 'holiday',
  //         name: holiday.name,
  //         wallpaper: holiday.wallpaper,
  //         fontColor: holiday.folderNameColor || '#ffffff',
  //         windowAppearance: holiday.appearance || 'dark'
  //       });
  //     }
  //   } else {
  //     // When toggling off, revert to Night theme
  //     setTheme({
  //       id: 5,
  //       name: 'Night',
  //       wallpaper: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)',
  //       fontColor: '#ffffff',
  //       windowAppearance: 'dark'
  //     });
  //   }
  // };
  //
  // const handlePreviewHoliday = (holiday) => {
  //   setPreviewHoliday(holiday);
  //   // Auto-enable festive themes when previewing
  //   if (!festiveThemesEnabled) {
  //     setFestiveThemesEnabled(true);
  //   }
  // };

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

  // Debug: Log state changes - DISABLED
  // const activeColors = (festiveThemesEnabled && currentHoliday?.colors) || theme.colors || null;
  const activeColors = theme.colors || null;
  
  // console.log('Desktop State:', {
  //   festiveThemesEnabled,
  //   currentHoliday: currentHoliday?.name,
  //   previewHoliday: previewHoliday?.name,
  //   hasFestiveClass: (festiveThemesEnabled && currentHoliday) || Boolean(theme.colors)
  // });

  return (
    <div 
      className={`desktop ${theme.windowAppearance} ${theme.colors ? 'festive-mode' : ''}`}
      style={{
        '--holiday-navbar': activeColors?.navbar || 'rgba(255, 255, 255, 0.3)',
        '--holiday-navbar-border': activeColors?.navbarBorder || 'rgba(255, 255, 255, 0.2)',
        '--holiday-folder': activeColors?.folder || '#667eea',
        '--holiday-dock': activeColors?.dock || 'rgba(255, 255, 255, 0.1)',
        '--desktop-font-color': theme.fontColor
      }}
    >
      {/* Wallpaper */}
      <div className="desktop-wallpaper" style={{ background: theme.wallpaper }}></div>

      {/* Mobile Holiday Greeting - DISABLED */}
      {/* {currentHoliday && festiveThemesEnabled && (
        <div className="menu-holiday mobile-holiday">
          <span className="holiday-emoji">{currentHoliday.emoji}</span>
          <span className="holiday-name">{currentHoliday.name}</span>
          {previewHoliday && <span className="dev-badge">DEV</span>}
        </div>
      )} */}

      {/* Menu Bar */}
      <div className="menu-bar" style={
        activeColors ? {
          background: activeColors.navbar,
          borderBottomColor: activeColors.navbarBorder
        } : {}
      }> {/* Festive mode colors disabled in favor of normal theme colors */}
        <div className="menu-bar-left">
          <div className="apple-logo"></div>
          <div className="menu-item">Archive</div>
          <div className="menu-item">File</div>
          <div className="menu-item">Edit</div>
          <div className="menu-item">View</div>
        </div>
        <div className="menu-bar-right">
          {/* Holiday Greeting - DISABLED */}
          {/* {currentHoliday && festiveThemesEnabled && (
            <div className="menu-holiday">
              <span className="holiday-emoji">{currentHoliday.emoji}</span>
              <span className="holiday-name">{currentHoliday.name}</span>
              {previewHoliday && <span className="dev-badge">DEV</span>}
            </div>
          )} */}
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
          onClick={handleCVsDoubleClick}
          onDoubleClick={handleCVsDoubleClick}
        >
          <div 
            className="icon-folder"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className="icon-label"
          >CV</div>
        </div>
        <div 
          className="desktop-icon"
          onClick={handleProjectsDoubleClick}
          onDoubleClick={handleProjectsDoubleClick}
        >
          <div 
            className="icon-folder projects"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className="icon-label"
          >Projects</div>
        </div>
        <div 
          className="desktop-icon"
          onClick={handleOthersDoubleClick}
          onDoubleClick={handleOthersDoubleClick}
        >
          <div 
            className="icon-folder others"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className="icon-label"
          >Others</div>
        </div>
      </div>

      {/* CVs Folder Window */}
      {isCVsOpen && (
        <CVsWindow
          onClose={handleCVsClose}
          onMinimize={handleCVsMinimize}
          onMaximize={handleCVsMaximize}
          isMaximized={isCVsMaximized}
          onOpenOldCV={handleCVDoubleClick}
          onOpenNewCV={handleCVNewDoubleClick}
          theme={theme}
        />
      )}

      {/* CV new Window */}
      {isCVNewOpen && (
        <CVNewWindow
          onClose={handleCVNewClose}
          onMinimize={handleCVNewMinimize}
          onMaximize={handleCVNewMaximize}
          isMaximized={isCVNewMaximized}
          theme={theme}
        />
      )}

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
          onTestimonialsClick={handleTestimonialsClick}
          onAchievementsClick={handleAchievementsClick}
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

      {/* Testimonials Window */}
      {isTestimonialsOpen && (
        <TestimonialsWindow 
          onClose={handleTestimonialsClose}
          onMinimize={handleTestimonialsMinimize}
          onMaximize={handleTestimonialsMaximize}
          isMaximized={isTestimonialsMaximized}
          theme={theme}
        />
      )}

      {/* Achievements Window */}
      {isAchievementsOpen && (
        <AchievementsWindow
          onClose={handleAchievementsClose}
          onMinimize={handleAchievementsMinimize}
          onMaximize={handleAchievementsMaximize}
          isMaximized={isAchievementsMaximized}
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
          // festiveThemesEnabled={festiveThemesEnabled}
          // onFestiveThemesToggle={handleFestiveThemesToggle}
          // onPreviewHoliday={handlePreviewHoliday}
        />
      )}

      {/* Dock */}
      <div className="dock-container">
        <div 
          className="dock"
          style={
            activeColors ? {
              background: activeColors.dock,
              backdropFilter: 'blur(30px) saturate(180%)',
              borderColor: activeColors.navbarBorder
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
            className={`dock-item folder ${!isCVsOpen ? 'minimized' : ''}`}
            onClick={!isCVsOpen ? handleCVsRestore : undefined}
            title="CV's"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className={`dock-item folder projects ${!isProjectsOpen ? 'minimized' : ''}`}
            onClick={!isProjectsOpen ? handleProjectsRestore : undefined}
            title="Projects"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
          <div 
            className={`dock-item folder others ${!isOthersOpen ? 'minimized' : ''}`}
            onClick={!isOthersOpen ? handleOthersRestore : undefined}
            title="Others"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></div>
   
        </div>
      </div>
    </div>
  );
}
