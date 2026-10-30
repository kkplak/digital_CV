import './HighlightBadge.css';

export default function HighlightBadge() {
  return (
    <span className="highlight-badge" title="Highlight">
      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path d="m10 2 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L2.2 7.7l5.4-.8Z" fill="currentColor" />
      </svg>
      <span className="a11y-only">Highlight</span>
    </span>
  );
}
