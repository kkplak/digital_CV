import { useId, useRef, useState } from 'react';
import useWindowAccessibility from '../hooks/useWindowAccessibility';
import interests from '../data/interests';
import './InterestsWindow.css';

export default function InterestsWindow({ onClose, onMinimize, onMaximize, isMaximized, theme }) {
  const [position, setPosition] = useState({ x: 160, y: 48 });
  const [dragOffset, setDragOffset] = useState(null);
  const [activeInterest, setActiveInterest] = useState(null);
  const [failedImages, setFailedImages] = useState([]);
  const helpId = useId();
  const windowRef = useRef(null);
  const { windowProps, titleProps } = useWindowAccessibility({ windowRef, onClose, isMaximized, setPosition });

  const startDragging = (event) => {
    if (isMaximized || event.target.closest('.window-controls') || event.button !== 0) return;
    const bounds = windowRef.current.getBoundingClientRect();
    setDragOffset({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
  };

  const moveWindow = (event) => {
    if (dragOffset) setPosition({ x: event.clientX - dragOffset.x, y: event.clientY - dragOffset.y });
  };

  return (
    <>
      {dragOffset && <div className="drag-overlay" onMouseMove={moveWindow} onMouseUp={() => setDragOffset(null)} />}
      <div
        ref={windowRef}
        {...windowProps}
        className={`interests-window ${theme?.windowAppearance || 'dark'}${isMaximized ? ' maximized' : ''}`}
        style={isMaximized ? undefined : { left: position.x, top: position.y }}
        onMouseMove={moveWindow}
        onMouseUp={() => setDragOffset(null)}
      >
        <div className="window-titlebar" onMouseDown={startDragging}>
          <div className="window-controls">
            <button type="button" className="control-btn close" aria-label="Close Interests" title="Close" onClick={onClose} />
            <button type="button" className="control-btn minimize" aria-label="Minimize Interests" title="Minimize" onClick={onMinimize} />
            <button type="button" className="control-btn maximize" aria-label={isMaximized ? 'Restore size of Interests' : 'Maximize Interests'} title={isMaximized ? 'Restore size' : 'Maximize'} onClick={onMaximize} />
          </div>
          <div {...titleProps} className="window-title">Interests</div>
          <div className="window-controls-spacer" />
        </div>

        <div className="interests-app-content" onClick={event => { if (!event.target.closest('.interest-tile')) setActiveInterest(null); }}>
          <div className="interests-discovery-grid">
            {interests.map((interest, index) => {
              const isActive = activeInterest === interest.id;
              const imageFailed = failedImages.includes(interest.id);
              return (
                <button
                  key={interest.id}
                  type="button"
                  className={`interest-tile tone-${interest.tone}${interest.startsOpen && !imageFailed ? ' starts-open' : ''}${isActive && !imageFailed ? ' is-active' : ''}${imageFailed ? ' image-failed' : ''}`}
                  aria-label={interest.title}
                  aria-describedby={`${helpId}-${interest.id}`}
                  onClick={() => setActiveInterest(current => current === interest.id ? null : interest.id)}
                  onPointerLeave={event => { if (event.pointerType === 'mouse') setActiveInterest(current => current === interest.id ? null : current); }}
                  onBlur={() => setActiveInterest(current => current === interest.id ? null : current)}
                >
                  {!imageFailed && <img className={`interest-tile-image${interest.imageStyle === 'logo' ? ' is-logo' : ''}`} src={interest.image} alt={interest.imageAlt} loading={index < 4 ? 'eager' : 'lazy'} style={{ objectPosition: interest.position || 'center', '--image-scale': interest.imageScale || 1 }} onError={() => setFailedImages(current => current.includes(interest.id) ? current : [...current, interest.id])} />}
                  <span className="interest-tile-shade" aria-hidden="true" />
                  <span className="interest-tile-top"><span className="interest-tile-index">{String(index + 1).padStart(2, '0')}</span></span>
                  <span className="interest-tile-type" aria-hidden="true">{interest.lines.map((line, lineIndex) => <span key={lineIndex}>{line}</span>)}</span>
                  <span className="interest-tile-subject" aria-hidden="true">{interest.title}</span>
                  <span className="interest-tile-caption" id={`${helpId}-${interest.id}`}><strong>{interest.title}</strong><span>{interest.note}</span>{imageFailed && <span>Image unavailable</span>}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
