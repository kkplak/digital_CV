import { useState, useRef } from 'react';
import './SettingsPopup.css';
import { holidays } from '../data/holidays';

export default function SettingsPopup({ 
  onClose, 
  onWallpaperChange, 
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

  const wallpapers = [
    { id: 1, name: 'Twilight', gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)' },
    { id: 2, name: 'Ocean Breeze', gradient: 'linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)' },
    { id: 3, name: 'Rose Gold', gradient: 'linear-gradient(135deg, #ed6ea0 0%, #ec8c69 100%)' },
    { id: 4, name: 'Emerald', gradient: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)' },
    { id: 5, name: 'Night', gradient: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)' },
    { id: 6, name: 'Northern Lights', gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 50%, #004e92 100%)' }
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
        className="settings-popup"
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

        {/* Appearance Toggle */}
        <div className="settings-section">
          <h4>Appearance</h4>
          <div className="theme-toggle">
            <button 
              className={`theme-btn ${currentTheme === 'light' ? 'active' : ''}`}
              onClick={() => onThemeChange('light')}
            >
              ☀️ Light
            </button>
            <button 
              className={`theme-btn ${currentTheme === 'dark' ? 'active' : ''}`}
              onClick={() => onThemeChange('dark')}
            >
              🌙 Dark
            </button>
          </div>
          <p className="appearance-description">
            Choose between light and dark interface colors for windows and menus
          </p>
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

        {/* Wallpaper Selection */}
        <div className="settings-section">
          <h4>Wallpaper</h4>
          <div className="wallpaper-grid">
            {wallpapers.map((wallpaper) => (
              <div
                key={wallpaper.id}
                className="wallpaper-option"
                style={{ background: wallpaper.gradient }}
                onClick={() => onWallpaperChange(wallpaper.gradient)}
                title={wallpaper.name}
              >
                <div className="wallpaper-name">{wallpaper.name}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
