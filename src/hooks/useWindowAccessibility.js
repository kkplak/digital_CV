import { useId, useLayoutEffect } from 'react';

const windows = [];
export function activateWindow(element) {
  const index = windows.indexOf(element);
  if (index < 0) return;
  windows.splice(index, 1);
  windows.push(element);
  windows.forEach((frame, order) => { frame.style.zIndex = String(200 + order); });
}
export function focusWindow(selector) {
  const frame = document.querySelector(selector);
  if (frame) {
    activateWindow(frame);
    frame.querySelector('[data-window-title]')?.focus({ preventScroll: true });
  }
}
export function constrainPosition(position, width, viewport = { width: window.innerWidth, height: window.innerHeight }) {
  return {
    x: Math.max(0, Math.min(position.x, Math.max(0, viewport.width - width))),
    y: Math.max(36, Math.min(position.y, Math.max(36, viewport.height - 64))),
  };
}
export default function useWindowAccessibility({ windowRef, onClose, isMaximized, setPosition }) {
  const id = useId();
  useLayoutEffect(() => {
    const frame = windowRef.current;
    const opener = document.activeElement;
    windows.push(frame);
    activateWindow(frame);
    frame.querySelector('[data-window-title]')?.focus({ preventScroll: true });
    return () => {
      const wasFocused = frame.contains(document.activeElement);
      const wasTop = windows.at(-1) === frame;
      const index = windows.indexOf(frame);
      if (index >= 0) windows.splice(index, 1);
      if (!wasFocused && !wasTop) return;
      if (opener?.isConnected && opener !== document.body && !frame.contains(opener)) {
        opener.focus({ preventScroll: true });
      } else {
        const next = windows.at(-1)?.querySelector('[data-window-title]') || document.querySelector('.desktop-icon');
        next?.focus({ preventScroll: true });
      }
    };
  }, [windowRef]);
  return {
    windowProps: {
      role: 'region',
      'aria-labelledby': id,
      'data-portfolio-window': true,
      onPointerDownCapture: () => activateWindow(windowRef.current),
      onFocusCapture: () => activateWindow(windowRef.current),
      onKeyDown: event => {
        if (event.defaultPrevented) return;
        if (event.key === 'Escape' && !event.target.matches('input,select,textarea,video')) {
          event.preventDefault();
          onClose();
        }
        if (event.target.id !== id || isMaximized || window.innerWidth <= 768) return;
        const delta = event.shiftKey ? 40 : 10;
        const directions = { ArrowLeft: [-delta, 0], ArrowRight: [delta, 0], ArrowUp: [0, -delta], ArrowDown: [0, delta] };
        if (directions[event.key]) {
          event.preventDefault();
          const [x, y] = directions[event.key];
          const width = windowRef.current.getBoundingClientRect().width;
          setPosition(old => constrainPosition({ x: old.x + x, y: old.y + y }, width));
        } else if (event.key === 'Home') {
          event.preventDefault();
          setPosition({ x: 16, y: 44 });
        }
      },
    },
    titleProps: { id, tabIndex: 0, 'data-window-title': true, 'aria-describedby': 'window-keyboard-help' },
  };
}
