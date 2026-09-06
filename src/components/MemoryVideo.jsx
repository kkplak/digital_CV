import { useRef, useState } from 'react';

function PlayIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;
}

function PauseIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>;
}

export default function MemoryVideo({ media }) {
  const video = useRef(null);
  const [paused, setPaused] = useState(false);
  return <><video ref={video} src={media.url} autoPlay loop muted playsInline className="memory-video" aria-label={media.caption} onPause={() => setPaused(true)} onPlay={() => setPaused(false)} /><button type="button" className={`memory-toggle ${paused ? 'is-paused' : ''}`} aria-label={`${paused ? 'Play' : 'Pause'} video: ${media.caption}`} onClick={() => { if (video.current.paused) video.current.play().catch(() => setPaused(true)); else video.current.pause(); }}>{paused ? <PlayIcon /> : <PauseIcon />}</button></>;
}
