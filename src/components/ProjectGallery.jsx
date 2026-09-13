import { useRef, useState } from 'react';

export function ProjectImage({ src, alt = '', className = '', loading = 'lazy', fallback = 'Image unavailable' }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <span className={`project-image-fallback ${className}`} role={alt ? 'img' : undefined} aria-label={alt ? `${alt} — image unavailable` : undefined} aria-hidden={alt ? undefined : true}>{fallback}</span>;
  return <img className={className} src={src} alt={alt} loading={loading} decoding="async" onError={() => setFailed(true)} />;
}

function SoundOnIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M4 9v6h4l5 5V4L8 9zm11.5 3a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 15.5 12z" /></svg>;
}

function SoundOffIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M4 9v6h4l5 5V4L8 9zm10.73 3 2.54 2.54-1.06 1.06L14.67 13l-2.54 2.54-1.06-1.06L13.61 12l-2.54-2.54 1.06-1.06L14.67 11l2.54-2.54 1.06 1.06z" /></svg>;
}

// Autoplays muted (like the memory clips) but lets the user opt into sound.
export function ProjectVideo({ src, caption, projectName }) {
  const video = useRef(null);
  const [muted, setMuted] = useState(true);
  if (!src) return null;
  return (
    <figure className="project-flow-video">
      <video ref={video} src={src} autoPlay loop muted={muted} playsInline aria-label={caption || `${projectName} video`} className="project-video" />
      <button
        type="button"
        className={`project-video-toggle ${!muted ? 'is-unmuted' : ''}`}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        onClick={() => setMuted(m => !m)}
      >
        {muted ? <SoundOffIcon /> : <SoundOnIcon />}
      </button>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

// Images sit at their natural size, on their own row — never sharing a line with text.
export function FlowingImages({ images, projectName, startIndex = 0 }) {
  if (!images.length) return null;
  return (
    <div className="project-flow-gallery">
      {images.map((item, index) => (
        <figure key={`${item.url}-${index}`} className={`project-flow-figure ${item.isVertical ? 'is-vertical' : ''}`}>
          <ProjectImage src={item.url} alt={item.caption || `${projectName}, image ${startIndex + index + 1}`} className="project-flow-image" />
          {item.caption && <figcaption>{item.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
