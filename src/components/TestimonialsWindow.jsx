import useWindowAccessibility from '../hooks/useWindowAccessibility';
import { useState, useRef } from 'react';
import './TestimonialsWindow.css';
import testimonials from '../data/testimonials';
import HighlightBadge from './HighlightBadge';
import TestimonialAvatar from './TestimonialAvatar';

export default function TestimonialsWindow({ onClose, onMinimize, onMaximize, isMaximized, theme, entries = testimonials, title = 'Testimonials', heading = 'Testimonials', subtitle = 'What colleagues and clients say about my work', className = '' }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 320, y: 70 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const { windowProps, titleProps } = useWindowAccessibility({ windowRef, onClose, isMaximized, setPosition });

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
        {...windowProps}
        className={`testimonials-window ${className} ${theme?.windowAppearance || 'dark'} ${isMaximized ? 'maximized' : ''}`}
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
            <button type="button" aria-label={"Close " + title} title="Close" className="control-btn close" onClick={onClose}></button>
            <button type="button" aria-label={"Minimize " + title} title="Minimize" className="control-btn minimize" onClick={onMinimize}></button>
            <button type="button" aria-label={(isMaximized ? "Restore size of " : "Maximize ") + title} title={isMaximized ? "Restore size" : "Maximize"} className="control-btn maximize" onClick={onMaximize}></button>
          </div>
          <div {...titleProps} className="window-title">{title}</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Window Content */}
        <div className="window-content">
          <div className="testimonials-header">
            <h2>{heading}</h2>
            <p className="testimonials-subtitle">{subtitle}</p>
          </div>
          <div className="testimonials-list">
            {entries.map((testimonial) => (
              <article key={testimonial.id} className="testimonial-card" aria-label={`Recommendation from ${testimonial.name}`}>
                <div className="testimonial-header">
                  <TestimonialAvatar variant={testimonial.avatar} image={testimonial.profileImage} />
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}{testimonial.highlight && <HighlightBadge />}</h3>
                    <p className="testimonial-title">{testimonial.title}</p>
                    {(testimonial.company || testimonial.relationship) && <p className="testimonial-company">{testimonial.company || testimonial.relationship}</p>}
                  </div>
                  {testimonial.linkedIn && (
                    <a 
                      href={testimonial.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-link"
                      aria-label={`View ${testimonial.name} on LinkedIn`}
                      title="View LinkedIn Profile"
                    >
                      <img src="/linkedin.png" alt="LinkedIn" />
                    </a>
                  )}
                </div>
                <blockquote className={`testimonial-quote${testimonial.paragraphs ? ' testimonial-letter' : ''}`}>
                  {(testimonial.paragraphs || [testimonial.quote]).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </blockquote>
                {(testimonial.date || testimonial.sourceLabel) && <div className="testimonial-date">{[testimonial.sourceLabel, testimonial.date].filter(Boolean).join(' · ')}</div>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
