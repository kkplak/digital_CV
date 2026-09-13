import { useState } from 'react';

export function ProjectImage({ src, alt = '', className = '', loading = 'lazy', fallback = 'Image unavailable' }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <span className={`project-image-fallback ${className}`} role={alt ? 'img' : undefined} aria-label={alt ? `${alt} — image unavailable` : undefined} aria-hidden={alt ? undefined : true}>{fallback}</span>;
  return <img className={className} src={src} alt={alt} loading={loading} decoding="async" onError={() => setFailed(true)} />;
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
