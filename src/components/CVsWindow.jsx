import { useState, useRef } from 'react';
import './CVsWindow.css';

export default function CVsWindow({
  onClose,
  onMinimize,
  onMaximize,
  isMaximized,
  onOpenOldCV,
  onOpenNewCV,
  theme,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 120, y: 80 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (isMaximized || e.target.closest('.window-controls')) return;

    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isMaximized) return;

    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
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
        className={`cvs-window ${theme?.windowAppearance || 'dark'} ${isMaximized ? 'maximized' : ''}`}
        style={!isMaximized ? { left: `${position.x}px`, top: `${position.y}px` } : {}}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="window-titlebar" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <button className="control-btn close" onClick={onClose}></button>
            <button className="control-btn minimize" onClick={onMinimize}></button>
            <button className="control-btn maximize" onClick={onMaximize}></button>
          </div>
          <div className="window-title">CV&apos;s</div>
          <div className="window-controls-spacer"></div>
        </div>

        <div className="window-content">
          <div className="cvs-grid">
            <div className="cvs-file-item" onClick={onOpenNewCV} onDoubleClick={onOpenNewCV}>
              <div className="cvs-file-icon pdf"></div>
              <div className="cvs-file-name">CV Konrad Plak Frontend 03.26.pdf</div>
            </div>
             <div className="cvs-file-item" onClick={onOpenOldCV} onDoubleClick={onOpenOldCV}>
              <div className="cvs-file-icon pdf"></div>
              <div className="cvs-file-name">CV_old.pdf</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
