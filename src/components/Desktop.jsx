import { useState, useEffect } from 'react';
import './Desktop.css';
import { focusWindow } from '../hooks/useWindowAccessibility';
import CVWindow from './CVWindow';
import CVNewWindow from './CVNewWindow';
import CVsWindow from './CVsWindow';
import cvItSupportData from '../data/cvItSupport';
import ProjectsWindow from './ProjectsWindow';
import ProjectDetailWindow from './ProjectDetailWindow';
import SettingsPopup from './SettingsPopup';
import MemoriesWindow from './MemoriesWindow';
import TestimonialsWindow from './TestimonialsWindow';
import ChallengesWindow from './ChallengesWindow';
import ChallengeDetailWindow from './ChallengeDetailWindow';
import OthersWindow from './OthersWindow';
// import { getTodayHoliday } from '../data/holidays'; // Festive themes functionality disabled

export default function Desktop() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isCVNewOpen, setIsCVNewOpen] = useState(false);
  const [isCVItSupportOpen, setIsCVItSupportOpen] = useState(false);
  const [isCVsOpen, setIsCVsOpen] = useState(false);
  const [isITSupportCVsOpen, setIsITSupportCVsOpen] = useState(false);
  const [isCVsMaximized, setIsCVsMaximized] = useState(false);
  const [isITSupportCVsMaximized, setIsITSupportCVsMaximized] = useState(false);
  const [isCVNewMaximized, setIsCVNewMaximized] = useState(false);
  const [isCVItSupportMaximized, setIsCVItSupportMaximized] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isMemoriesOpen, setIsMemoriesOpen] = useState(false);
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);
  const [isChallengesOpen, setIsChallengesOpen] = useState(false);
  const [isCVMaximized, setIsCVMaximized] = useState(false);
  const [isProjectsMaximized, setIsProjectsMaximized] = useState(false);
  const [isOthersMaximized, setIsOthersMaximized] = useState(false);
  const [isMemoriesMaximized, setIsMemoriesMaximized] = useState(false);
  const [isTestimonialsMaximized, setIsTestimonialsMaximized] = useState(false);
  const [isChallengesMaximized, setIsChallengesMaximized] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [isChallengeDetailMaximized, setIsChallengeDetailMaximized] = useState(false);
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


  const handleCVsDoubleClick = () => {
    focusWindow('.cvs-window');
    setIsCVsOpen(true);
    if (window.innerWidth <= 768) {
      setIsCVsMaximized(true);
    }
  };

  const handleITSupportCVsDoubleClick = () => {
    focusWindow('.cvs-window:last-of-type');
    setIsITSupportCVsOpen(true);
    if (window.innerWidth <= 768) {
      setIsITSupportCVsMaximized(true);
    }
  };

  const handleProjectsDoubleClick = () => {
    focusWindow('.projects-window');
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

  const handleITSupportCVsClose = () => {
    setIsITSupportCVsOpen(false);
    setIsITSupportCVsMaximized(false);
  };

  const handleITSupportCVsMinimize = () => setIsITSupportCVsOpen(false);

  const handleITSupportCVsMaximize = () => setIsITSupportCVsMaximized(!isITSupportCVsMaximized);

  const handleProjectsMaximize = () => {
    setIsProjectsMaximized(!isProjectsMaximized);
  };

  const handleOthersDoubleClick = () => {
    focusWindow('.others-window');
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
    focusWindow('.others-window');
    setIsOthersOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsOthersMaximized(true);
    }
  };

  const handleMemoriesClick = () => {
    focusWindow('.memories-window');
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


  const handleTestimonialsClick = () => {
    focusWindow('.testimonials-window');
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


  const handleChallengesClick = () => {
    focusWindow('.challenges-window');
    setIsChallengesOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsChallengesMaximized(true);
    }
  };

  const handleChallengesClose = () => {
    setIsChallengesOpen(false);
    setIsChallengesMaximized(false);
  };

  const handleChallengesMinimize = () => {
    setIsChallengesOpen(false);
  };

  const handleChallengesMaximize = () => {
    setIsChallengesMaximized(!isChallengesMaximized);
  };

  const handleChallengeClick = (challenge) => {
    focusWindow('.challenge-detail-window');
    setSelectedChallenge(challenge);
    if (window.innerWidth <= 768) {
      setIsChallengeDetailMaximized(true);
    }
  };

  const handleChallengeDetailClose = () => {
    setSelectedChallenge(null);
    setIsChallengeDetailMaximized(false);
  };

  const handleChallengeDetailMinimize = () => {
    setSelectedChallenge(null);
  };

  const handleChallengeDetailMaximize = () => {
    setIsChallengeDetailMaximized(!isChallengeDetailMaximized);
  };

  const handleCVsRestore = () => {
    focusWindow('.cvs-window');
    setIsCVsOpen(true);
    if (window.innerWidth <= 768) {
      setIsCVsMaximized(true);
    }
  };

  const handleCVNewDoubleClick = () => {
    focusWindow('.cvnew-window:not(.cvnew-it-support)');
    setIsCVNewOpen(true);
    if (window.innerWidth <= 768) setIsCVNewMaximized(true);
  };

  const handleCVNewClose = () => {
    setIsCVNewOpen(false);
    setIsCVNewMaximized(false);
  };

  const handleCVNewMinimize = () => setIsCVNewOpen(false);

  const handleCVNewMaximize = () => setIsCVNewMaximized(!isCVNewMaximized);

  const handleCVItSupportDoubleClick = () => {
    focusWindow('.cvnew-it-support');
    setIsCVItSupportOpen(true);
    if (window.innerWidth <= 768) setIsCVItSupportMaximized(true);
  };

  const handleCVItSupportClose = () => {
    setIsCVItSupportOpen(false);
    setIsCVItSupportMaximized(false);
  };

  const handleCVItSupportMinimize = () => setIsCVItSupportOpen(false);

  const handleCVItSupportMaximize = () => setIsCVItSupportMaximized(!isCVItSupportMaximized);

  const handleProjectsRestore = () => {
    focusWindow('.projects-window');
    setIsProjectsOpen(true);
    // Auto-maximize on mobile
    if (window.innerWidth <= 768) {
      setIsProjectsMaximized(true);
    }
  };

  const handleArchiveClick = () => {
    focusWindow('.settings-popup');
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
    focusWindow('.project-detail-window');
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
      role="main"
      className={`desktop ${theme.windowAppearance} ${theme.colors ? 'festive-mode' : ''}`}
      style={{
        '--holiday-navbar': activeColors?.navbar || 'rgba(255, 255, 255, 0.3)',
        '--holiday-navbar-border': activeColors?.navbarBorder || 'rgba(255, 255, 255, 0.2)',
        '--holiday-folder': activeColors?.folder || '#667eea',
        '--holiday-dock': activeColors?.dock || 'rgba(255, 255, 255, 0.1)',
        '--desktop-font-color': theme.fontColor
      }}
    >
      <p id="window-keyboard-help" className="a11y-only">Escape closes the window. On a desktop, focus the title and use arrow keys to move it; Home returns it on screen.</p>
      {/* Wallpaper */}
      <div aria-hidden="true" className="desktop-wallpaper" style={{ background: theme.wallpaper }}></div>

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
        <div className="menu-bar-left" aria-hidden="true">
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
      <nav className="desktop-icons" aria-label="Desktop folders">
        <button type="button" 
          className="desktop-icon"
          onClick={handleCVsDoubleClick}
        >
          <span 
            className="icon-folder"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></span>
          <span 
            className="icon-label"
          >CV</span>
        </button>
        <button type="button" 
          className="desktop-icon"
          onClick={handleProjectsDoubleClick}
        >
          <span 
            className="icon-folder projects"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></span>
          <span 
            className="icon-label"
          >Projects</span>
        </button>
        <button type="button" 
          className="desktop-icon"
          onClick={handleOthersDoubleClick}
        >
          <span 
            className="icon-folder others"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></span>
          <span 
            className="icon-label"
          >Others</span>
        </button>
      </nav>

      {/* CVs Folder Window */}
      {isCVsOpen && (
        <CVsWindow
          onClose={handleCVsClose}
          onMinimize={handleCVsMinimize}
          onMaximize={handleCVsMaximize}
          isMaximized={isCVsMaximized}
          items={[
            { name: 'CV Frontend Dev.pdf', onOpen: handleCVNewDoubleClick },
            { name: 'Technical Consultant', type: 'folder', onOpen: handleITSupportCVsDoubleClick }
          ]}
          theme={theme}
        />
      )}

      {isITSupportCVsOpen && (
        <CVsWindow
          onClose={handleITSupportCVsClose}
          onMinimize={handleITSupportCVsMinimize}
          onMaximize={handleITSupportCVsMaximize}
          isMaximized={isITSupportCVsMaximized}
          title="CV Stretch - IT Support"
          items={[{ name: 'CV_Konrad_Plak_IT_Support.pdf', onOpen: handleCVItSupportDoubleClick }]}
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

      {isCVItSupportOpen && (
        <CVNewWindow
          onClose={handleCVItSupportClose}
          onMinimize={handleCVItSupportMinimize}
          onMaximize={handleCVItSupportMaximize}
          isMaximized={isCVItSupportMaximized}
          theme={theme}
          data={cvItSupportData}
          fileName="CV_Konrad_Plak_IT_Support.pdf"
          variant="cvnew-it-support"
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
          onChallengesClick={handleChallengesClick}
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

      {/* Challenges Window */}
      {isChallengesOpen && (
        <ChallengesWindow
          onClose={handleChallengesClose}
          onMinimize={handleChallengesMinimize}
          onMaximize={handleChallengesMaximize}
          isMaximized={isChallengesMaximized}
          onChallengeClick={handleChallengeClick}
          theme={theme}
        />
      )}

      {/* Challenge Detail Window */}
      {selectedChallenge && (
        <ChallengeDetailWindow
          challenge={selectedChallenge}
          onClose={handleChallengeDetailClose}
          onMinimize={handleChallengeDetailMinimize}
          onMaximize={handleChallengeDetailMaximize}
          isMaximized={isChallengeDetailMaximized}
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
      <div className="dock-container" role="navigation" aria-label="Dock">
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
          <button type="button" 
            className="dock-item finder" aria-label="Settings" title="Settings"
            onClick={handleArchiveClick}
          ></button>
            {/* <div 
            className="dock-item linkedin"
            onClick={() => window.open('https://www.linkedin.com/in/kkplak', '_blank')}
            title="LinkedIn"
          ></div> */}
          <div className="dock-divider"></div>
          <button type="button" 
            className={`dock-item folder ${!isCVsOpen ? 'minimized' : ''}`}
            onClick={handleCVsRestore}
            aria-label="CV" title="CV's"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></button>
          <button type="button" 
            className={`dock-item folder projects ${!isProjectsOpen ? 'minimized' : ''}`}
            onClick={handleProjectsRestore}
            aria-label="Projects" title="Projects"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></button>
          <button type="button" 
            className={`dock-item folder others ${!isOthersOpen ? 'minimized' : ''}`}
            onClick={handleOthersRestore}
            aria-label="Others" title="Others"
            style={activeColors ? {
              background: activeColors.folder,
              filter: 'brightness(1.1) saturate(1.2)'
            } : {}}
          ></button>
   
        </div>
      </div>
    </div>
  );
}
