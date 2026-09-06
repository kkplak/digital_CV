import useWindowAccessibility from '../hooks/useWindowAccessibility';
import { useState, useRef } from 'react';
import './CVsWindow.css';

export default function CVsWindow({
  onClose,
  onMinimize,
  onMaximize,
  isMaximized,
  title = 'CV',
  items,
  theme,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 120, y: 80 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const { windowProps, titleProps } = useWindowAccessibility({ windowRef, onClose, isMaximized, setPosition });

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
        {...windowProps}
        className={`cvs-window ${theme?.windowAppearance || 'dark'} ${isMaximized ? 'maximized' : ''}`}
        style={!isMaximized ? { left: `${position.x}px`, top: `${position.y}px` } : {}}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="window-titlebar" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <button type="button" aria-label={"Close " + title} title="Close" className="control-btn close" onClick={onClose}></button>
            <button type="button" aria-label={"Minimize " + title} title="Minimize" className="control-btn minimize" onClick={onMinimize}></button>
            <button type="button" aria-label={(isMaximized ? "Restore size of " : "Maximize ") + title} title={isMaximized ? "Restore size" : "Maximize"} className="control-btn maximize" onClick={onMaximize}></button>
          </div>
          <div {...titleProps} className="window-title">{title}</div>
          <div className="window-controls-spacer"></div>
        </div>

        <div className="window-content">
          <div className="cvs-grid">
            {items.map((item) => (
              <button type="button"
                key={item.name}
                className="cvs-file-item"
                onClick={item.onOpen}
              >
                <span className={`cvs-file-icon ${item.type || 'pdf'}`}></span>
                <span className="cvs-file-name">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
