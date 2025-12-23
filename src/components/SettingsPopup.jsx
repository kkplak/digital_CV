import { useState, useRef } from 'react';
import './SettingsPopup.css';
import { holidays } from '../data/holidays';

export default function SettingsPopup({ 
  onClose, 
  onThemeChange, 
  currentTheme,
  festiveThemesEnabled,
  onFestiveThemesToggle,
  onPreviewHoliday
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
      name: 'Pandora', 
      wallpaper: 'url(https://wallpapercave.com/wp/bLxADvF.png) center/cover no-repeat',
      fontColor: '#ffffff',
      windowAppearance: 'light'
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
      name: 'Bubble Gum', 
      wallpaper: 'url(https://wallpapercave.com/wp/wp3144370.jpg)  center/cover no-repeat',
      fontColor: '#ffffffff',
      windowAppearance: 'light'
    },
    { 
      id: 4, 
      name: 'Solar Flare', 
      wallpaper: 'url(https://wallpapercave.com/wp/lslLjbE.jpg)  center/cover no-repeat',
      fontColor: '#ffffff',
      windowAppearance: 'dark'
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
              <img src="/profilowe.png" alt="Profile" />
            </div>
            <div className="user-info">
              <div className="user-name">Konrad Plak</div>
              <div className="user-role">Admin</div>
            </div>
          </div>
        </div>

        {/* Festive Themes Toggle */}
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

        {/* Holiday Preview - Dev Mode */}
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
