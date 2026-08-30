import { useState, useRef } from 'react';
import './ChallengeDetailWindow.css';
import { challengesSection } from '../data/challenges';

const KEYWORDS = [
  'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'new',
  'typeof', 'class', 'extends', 'import', 'export', 'default', 'from', 'of', 'in',
  'await', 'async', 'this', 'true', 'false', 'null', 'undefined', 'void', 'delete',
  'instanceof', 'case', 'switch', 'break', 'continue', 'try', 'catch', 'finally',
  'throw', 'yield', 'static', 'get', 'set', 'super',
];

// Regex-based tokenizer: no external highlighter dependency needed for a handful of snippets.
const TOKEN_PATTERN = new RegExp(
  [
    '(//.*)',
    '(/\\*[\\s\\S]*?\\*/)',
    '(`(?:\\\\.|[^`\\\\])*`)',
    '("(?:\\\\.|[^"\\\\])*")',
    "('(?:\\\\.|[^'\\\\])*')",
    '(</?[A-Za-z][\\w-]*)',
    `(\\b(?:${KEYWORDS.join('|')})\\b)`,
    '(\\b\\d+(?:\\.\\d+)?\\b)',
    '(\\b[A-Za-z_$][\\w$]*(?=\\())',
  ].join('|'),
  'gm'
);

function highlightCode(code) {
  const nodes = [];
  let lastIndex = 0;
  let key = 0;
  let match;

  TOKEN_PATTERN.lastIndex = 0;
  while ((match = TOKEN_PATTERN.exec(code))) {
    const [full, comment, block, template, dquote, squote, tag, keyword, number, funcCall] = match;

    if (match.index > lastIndex) {
      nodes.push(code.slice(lastIndex, match.index));
    }

    let className = 'tok-punct';
    if (comment || block) className = 'tok-comment';
    else if (template || dquote || squote) className = 'tok-string';
    else if (tag) className = 'tok-tag';
    else if (keyword) className = 'tok-keyword';
    else if (number) className = 'tok-number';
    else if (funcCall) className = 'tok-func';

    nodes.push(<span key={key++} className={className}>{full}</span>);
    lastIndex = match.index + full.length;
  }

  if (lastIndex < code.length) {
    nodes.push(code.slice(lastIndex));
  }

  return nodes;
}

export default function ChallengeDetailWindow({ challenge, onClose, onMinimize, onMaximize, isMaximized, theme }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 210, y: 90 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const accent = challenge.accent || '#8a8a92';

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
        className={`challenge-detail-window ${isMaximized ? 'maximized' : ''} ${theme?.windowAppearance || 'dark'}`}
        style={!isMaximized ? {
          left: `${position.x}px`,
          top: `${position.y}px`,
          '--accent': accent,
        } : { '--accent': accent }}
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
          <div className="window-title">{challenge.title}</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Window Content */}
        <div className="window-content">
          <div className="challenge-document">
            <div className="challenge-detail-header">
              <div className="challenge-icon-large">{challenge.icon || '📌'}</div>
              <div className="challenge-detail-info">
                <span className="challenge-detail-tag">{challenge.tag}</span>
                <h1 className="challenge-detail-title">{challenge.title}</h1>
                {challenge.date && <div className="challenge-detail-date">{challenge.date}</div>}
              </div>
            </div>

            {/* <div className="challenge-detail-content">
              {challenge.keyTakeaway && (
                <blockquote className="challenge-detail-quote">{challenge.keyTakeaway}</blockquote>
              )}

              <div className="challenge-detail-section">
                <h2>{challengesSection.labels.challenge}</h2>
                <p>{challenge.challenge}</p>
              </div>

              <div className="challenge-detail-section">
                <h2>{challengesSection.labels.thoughtProcess}</h2>
                <p>{challenge.thoughtProcess}</p>
              </div>

              {challenge.codeSnippet && (
                <div className="challenge-detail-section">
                  <h2>Code</h2>
                  <div className="challenge-code-window">
                    <div className="challenge-code-titlebar">
                      <span className="challenge-code-dot red"></span>
                      <span className="challenge-code-dot yellow"></span>
                      <span className="challenge-code-dot green"></span>
                      <span className="challenge-code-lang">{challenge.codeLanguage || 'js'}</span>
                    </div>
                    <pre className="challenge-code">
                      <code className={`language-${challenge.codeLanguage || 'js'}`}>
                        {highlightCode(challenge.codeSnippet)}
                      </code>
                    </pre>
                  </div>
                  {challenge.codeCaption && (
                    <p className="challenge-code-caption">{challenge.codeCaption}</p>
                  )}
                </div>
              )}

              <div className="challenge-detail-section">
                <h2>{challengesSection.labels.achievement}</h2>
                <p>{challenge.achievement}</p>
              </div>

              {Array.isArray(challenge.focusAreas) && challenge.focusAreas.length > 0 && (
                <div className="challenge-detail-section">
                  <h2>Focus Areas</h2>
                  <div className="challenge-focus-areas">
                    {challenge.focusAreas.map((area) => (
                      <span key={area} className="challenge-focus-chip">{area}</span>
                    ))}
                  </div>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
