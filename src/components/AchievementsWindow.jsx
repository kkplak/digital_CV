import { useState, useRef } from 'react';
import './AchievementsWindow.css';
import achievements, { achievementsSection } from '../data/achievements';

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

export default function AchievementsWindow({ onClose, onMinimize, onMaximize, isMaximized, theme }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 340, y: 90 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [expandedId, setExpandedId] = useState(achievements[0]?.id ?? null);
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

  const toggleExpanded = (id) => {
    setExpandedId((current) => (current === id ? null : id));
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
        className={`achievements-window ${theme?.windowAppearance || 'dark'} ${isMaximized ? 'maximized' : ''}`}
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
          <div className="window-title">Achievements</div>
          <div className="window-controls-spacer"></div>
        </div>

        {/* Window Content */}
        <div className="window-content">
          <div className="achievements-header">
            <h2>{achievementsSection.title}</h2>
            <p className="achievements-subtitle">{achievementsSection.intro}</p>
            {Array.isArray(achievementsSection.stats) && achievementsSection.stats.length > 0 && (
              <div className="achievements-stats">
                {achievementsSection.stats.map((stat) => (
                  <div key={stat.label} className="achievements-stat">
                    <span className="achievements-stat-value">{stat.value}</span>
                    <span className="achievements-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="achievements-list">
            {achievements.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div key={item.id} className={`achievement-card ${isExpanded ? 'expanded' : ''}`}>
                  <button
                    type="button"
                    className="achievement-card-header"
                    aria-expanded={isExpanded}
                    onClick={() => toggleExpanded(item.id)}
                  >
                    <div className="achievement-card-heading">
                      <span className="achievement-tag">{item.tag}</span>
                      <h3 className="achievement-title">{item.title}</h3>
                      {item.keyTakeaway && (
                        <p className="achievement-subtitle">{item.keyTakeaway}</p>
                      )}
                    </div>
                    <div className="achievement-card-meta">
                      <span className="achievement-date">{item.date}</span>
                      <span className="achievement-chevron" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="achievement-body">
                      <div className="achievement-section section-challenge">
                        <h4>{achievementsSection.labels.challenge}</h4>
                        <p>{item.challenge}</p>
                      </div>
                      <div className="achievement-section section-process">
                        <h4>{achievementsSection.labels.thoughtProcess}</h4>
                        <p>{item.thoughtProcess}</p>
                      </div>
                      {item.codeSnippet && (
                        <div className="achievement-section section-code">
                          <h4>Code</h4>
                          <div className="achievement-code-window">
                            <div className="achievement-code-titlebar">
                              <span className="achievement-code-dot red"></span>
                              <span className="achievement-code-dot yellow"></span>
                              <span className="achievement-code-dot green"></span>
                              <span className="achievement-code-lang">{item.codeLanguage || 'js'}</span>
                            </div>
                            <pre className="achievement-code">
                              <code className={`language-${item.codeLanguage || 'js'}`}>
                                {highlightCode(item.codeSnippet)}
                              </code>
                            </pre>
                          </div>
                          {item.codeCaption && (
                            <p className="achievement-code-caption">{item.codeCaption}</p>
                          )}
                        </div>
                      )}
                      <div className="achievement-section section-achievement">
                        <h4>{achievementsSection.labels.achievement}</h4>
                        <p>{item.achievement}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
