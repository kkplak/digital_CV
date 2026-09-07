import { useState } from 'react';

export function ProjectImage({ src, alt = '', className = '', loading = 'lazy', fallback = 'Image unavailable' }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <span className={`project-image-fallback ${className}`} role={alt ? 'img' : undefined} aria-label={alt ? `${alt} — image unavailable` : undefined} aria-hidden={alt ? undefined : true}>{fallback}</span>;
  return <img className={className} src={src} alt={alt} loading={loading} decoding="async" onError={() => setFailed(true)} />;
}

export default function ProjectGallery({ images, projectName }) {
  return (
    <section className="project-gallery-section" aria-label={`${projectName} previews`}>
      <div className="project-gallery-grid">
        {images.map((item, index) => (
          <figure key={`${item.url}-${index}`} className="project-gallery-viewer">
            <div className={`project-gallery-stage ${item.isVertical ? 'is-vertical' : ''}`}>
              <ProjectImage src={item.url} alt={item.caption || `${projectName}, image ${index + 1}`} className="project-gallery-image" />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
