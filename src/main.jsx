import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Desktop from './components/Desktop'
import memories from './data/memories'

// Preload all memories media on page load
memories.forEach((media) => {
  if (media.type === 'image') {
    const img = new Image();
    img.src = media.url;
  } else if (media.type === 'video') {
    const video = document.createElement('video');
    video.src = media.url;
    video.preload = 'auto';
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
)
