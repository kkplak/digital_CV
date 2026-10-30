import { useRef, useState } from 'react';
import useWindowAccessibility from '../hooks/useWindowAccessibility';
import './CVNewWindow.css';
import './PDFWindow.css';

export default function PDFWindow({ url, fileName, pages, onClose, onMinimize, onMaximize, isMaximized, theme }) {
  const [position, setPosition] = useState({ x: 80, y: 60 });
  const [dragOffset, setDragOffset] = useState(null);
  const windowRef = useRef(null);
  const { windowProps, titleProps } = useWindowAccessibility({ windowRef, onClose, isMaximized, setPosition });

  const handleMouseDown = event => {
    if (isMaximized || event.target.closest('.window-controls')) return;
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };
  const handleMouseMove = event => {
    if (!dragOffset || isMaximized) return;
    setPosition({ x: event.clientX - dragOffset.x, y: event.clientY - dragOffset.y });
  };
  const handleMouseUp = () => setDragOffset(null);

  return (
    <>
      {dragOffset && <div className="pdf-drag-overlay" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />}
      <div
        ref={windowRef}
        {...windowProps}
        className={`cvnew-window pdf-document-window ${theme?.windowAppearance || 'dark'} ${isMaximized ? 'maximized' : ''}`}
        style={!isMaximized ? { left: `${position.x}px`, top: `${position.y}px` } : {}}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="cvnew-titlebar" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <button type="button" aria-label={`Close ${fileName}`} title="Close" className="control-btn close" onClick={onClose} />
            <button type="button" aria-label={`Minimize ${fileName}`} title="Minimize" className="control-btn minimize" onClick={onMinimize} />
            <button type="button" aria-label={`${isMaximized ? 'Restore size of' : 'Maximize'} ${fileName}`} title={isMaximized ? 'Restore size' : 'Maximize'} className="control-btn maximize" onClick={onMaximize} />
          </div>
          <div {...titleProps} className="cvnew-window-title" title={fileName}>{fileName}</div>
          <div className="window-controls-spacer" />
        </div>
        <nav className="pdf-window-toolbar" aria-label="PDF actions">
          <span>Original PDF</span>
          <div className="pdf-window-actions">
            <a href={url} target="_blank" rel="noopener noreferrer">Open PDF<span className="a11y-only"> (opens in a new tab)</span></a>
            <a href={url} download={fileName}>Download PDF</a>
          </div>
        </nav>
        <div className="pdf-window-viewer" role="document" aria-label={fileName}>
          {pages.map((page, index) => (
            <figure className="pdf-window-page" key={page.image}>
              <img src={page.image} alt="" aria-hidden="true" loading={index === 0 ? 'eager' : 'lazy'} />
              <figcaption>Page {index + 1} of {pages.length}</figcaption>
              <p className="a11y-only">{page.text}</p>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
