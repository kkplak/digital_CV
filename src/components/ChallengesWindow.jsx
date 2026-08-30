import { useState, useRef } from 'react';
import './ChallengesWindow.css';
import challenges from '../data/challenges';

export default function ChallengesWindow({ onClose, onMinimize, onMaximize, isMaximized, onChallengeClick, theme }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 340, y: 90 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

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
        className={`challenges-window ${theme?.windowAppearance || 'dark'} ${isMaximized ? 'maximized' : ''}`}
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
          <div className="window-title">Challenges</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Window Content */}
        <div className="window-content">
          <div className="challenges-browser">
            <div className="challenges-list">
              {challenges.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="challenge-row"
                  style={{ '--accent': item.accent || '#8a8a92' }}
                  onClick={() => onChallengeClick(item)}
                  title={item.keyTakeaway}
                >
                  <div className="challenge-row-icon">{item.icon || '📌'}</div>
                  <div className="challenge-row-name">
                    <span className="challenge-row-title">{item.title}</span>
                    {item.keyTakeaway && (
                      <span className="challenge-row-subtitle">{item.keyTakeaway}</span>
                    )}
                  </div>
                  <div className="challenge-row-tag">{item.tag}</div>
                  <div className="challenge-row-date">{item.date}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
