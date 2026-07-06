import { useState, useRef } from 'react';
import './SettingsPopup.css';
// import { holidays } from '../data/holidays'; // Festive themes functionality disabled

export default function SettingsPopup({ 
  onClose, 
  onThemeChange, 
  currentTheme
  // festiveThemesEnabled,
  // onFestiveThemesToggle,
  // onPreviewHoliday
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 202, y: window.innerHeight / 2 - 350 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  
  // Check if dev mode is enabled via URL parameter
  const isDevMode = new URLSearchParams(window.location.search).get('devtools') === 'true';

  const themes = [
    { 
      id: 1, 
      name: 'Earth', 
      wallpaper: 'url(https://images.unsplash.com/photo-1661705969607-cde73828023d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGglMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D) center/cover no-repeat',
      fontColor: '#ffffff',
      windowAppearance: 'dark',
      // colors: {
      //   navbar: 'rgba(0, 0, 0, 0.18)',
      //   navbarBorder: 'rgba(3, 3, 3, 0.3)',
      //   folder: '#86a279ff',
      //   dock: 'rgba(49, 38, 177, 0.25)'
      // }
    },
    { 
      id: 2, 
      name: 'Forest', 
      wallpaper: 'url(https://wallpapercave.com/wp/ROBntMb.jpg) center/cover no-repeat',
      fontColor: '#ffffff',
      windowAppearance: 'dark'
    },
    { 
      id: 3, 
      name: 'Back to the Future', 
      wallpaper: 'url(https://www.pixelstalk.net/wp-content/uploads/2016/07/Back-To-The-Future-Backgrounds-For-Desktop.jpg) center/cover no-repeat',
      fontColor: '#ffffffff',
      windowAppearance: 'dark',
      colors: {
        navbar: 'rgba(61, 61, 61, 1)',
        navbarBorder: 'rgba(255, 255, 255, 1)',
        folder: '#4d4d4dff',
        dock: 'rgba(43, 43, 43, 0.36)'
      }
    },
    { 
      id: 4, 
      name: 'Snow', 
      wallpaper: 'url(https://4kwallpapers.com/images/walls/thumbs_3t/25387.jpg)  center/cover no-repeat',
      fontColor: '#ffffff',
      windowAppearance: 'light',
           colors: {
        navbar: 'rgba(43, 87, 134, 0.11)',
        navbarBorder: 'rgba(255, 255, 255, 0)',
        folder: 'rgb(198, 198, 198)',
        dock: 'rgba(43, 43, 43, 0.36)'
      }
    },
    { 
      id: 5, 
      name: 'Night', 
      wallpaper: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)  center/cover no-repeat',
      fontColor: '#ffffff',
      windowAppearance: 'dark'
    },
    { 
      id: 6, 
      name: 'Skittles', 
      wallpaper: 'url(https://wallpapercave.com/wp/wp11455987.png)  center/cover no-repeat',
      fontColor: '#ffffff',
      windowAppearance: 'dark'
    }
  ];

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return;
    
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
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
        className={`settings-popup ${currentTheme?.windowAppearance || 'dark'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
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
            <button className="control-btn minimize" onClick={onClose}></button>
            <button className="control-btn maximize"></button>
          </div>
          <div className="window-title">Settings</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Window Content */}
        <div className="window-content">
        {/* User Profile */}
        <div className="settings-section">
          <h4>User Profile</h4>
          <div className="user-profile">
            <div className="user-avatar">
              <img src="/profilowe1.jpeg" alt="Profile" />
            </div>
            <div className="user-info">
              <div className="user-name">Konrad Plak</div>
              <div className="user-role">Admin</div>
            </div>
          </div>
        </div>

        {/* Festive Themes Toggle and Holiday Preview - DISABLED */}
        {/* 
        <div className="settings-section">
          <h4>Festive Themes</h4>
          <div className="festive-toggle">
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={festiveThemesEnabled}
                onChange={(e) => onFestiveThemesToggle(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="toggle-label">
              Auto-switch to holiday themes
            </span>
          </div>
          <p className="festive-description">
            Automatically change wallpaper for holidays like Christmas, Halloween, Diwali, and more! 🎉
          </p>
          {isDevMode && (
            <p className="dev-mode-info">
              🔧 Developer mode active - Holiday preview available below
            </p>
          )}
        </div>

        {isDevMode && (
          <div className="settings-section">
            <h4>Preview Holiday Themes</h4>
            <div className="holiday-preview-grid">
              {holidays.map((holiday) => (
                <div
                  key={holiday.id}
                  className="holiday-preview-option"
                  style={{ background: holiday.wallpaper }}
                  onClick={() => onPreviewHoliday(holiday)}
                  title={holiday.name}
                >
                  <div className="holiday-preview-emoji">{holiday.emoji}</div>
                  <div className="holiday-preview-name">{holiday.name}</div>
                  <div className="holiday-preview-date">
                    {holiday.month}/{holiday.day}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        */}

        {/* Theme Selection */}
        <div className="settings-section">
          <h4>Themes</h4>
          <div className="wallpaper-grid">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`wallpaper-option ${currentTheme?.id === theme.id ? 'selected' : ''}`}
                style={{ background: theme.wallpaper }}
                onClick={() => onThemeChange(theme)}
                title={`${theme.name} (${theme.windowAppearance} windows)`}
              >
                <div className="wallpaper-name">{theme.name}</div>
                <div className="theme-info">{theme.windowAppearance === 'light' ? '☀️' : '🌙'}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
