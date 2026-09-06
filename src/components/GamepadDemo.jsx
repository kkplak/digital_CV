import { useEffect, useId, useReducer, useRef, useState } from 'react';
import { actions, defaultButtons, defaultKeys, frameActions, gameReducer, initialGame, normalizeKey, readGamepad, swapBinding } from '../demo/controls';
import './GamepadDemo.css';
const keyName = key => key === ' ' ? 'Space' : key.replace('Arrow', '');
const buttonName = index => ({ 0: '0 · bottom face', 1: '1 · right face', 2: '2 · left face', 3: '3 · top face', 12: '12 · D-pad up', 13: '13 · D-pad down', 14: '14 · D-pad left', 15: '15 · D-pad right' })[index] || String(index);
export default function GamepadDemo() {
  const id = useId();
  const board = useRef(null);
  const [game, dispatch] = useReducer(gameReducer, initialGame);
  const [keys, setKeys] = useState(defaultKeys);
  const [buttons, setButtons] = useState(defaultButtons);
  const [capture, setCapture] = useState(null);
  const [notice, setNotice] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageVisible, setPageVisible] = useState(document.visibilityState !== 'hidden');
  const [device, setDevice] = useState('No controller detected yet.');
  const [deadZone, setDeadZone] = useState(.25);
  const [size, setSize] = useState(44);
  const [side, setSide] = useState('center');
  const available = typeof navigator.getGamepads === 'function';
  useEffect(() => {
    const changed = () => setPageVisible(document.visibilityState !== 'hidden');
    document.addEventListener('visibilitychange', changed);
    return () => document.removeEventListener('visibilitychange', changed);
  }, []);
  useEffect(() => {
    if (!enabled || !focused || !available || !pageVisible) return;
    let frame, previous = new Set(), lastMove = 0;
    const poll = now => {
      try {
        const pad = Array.from(navigator.getGamepads()).find(p => p?.connected);
        if (pad) {
          setDevice(pad.id + (pad.mapping === 'standard' ? '' : ' · Custom mapping: configure button numbers below.'));
          const pressed = readGamepad(pad, buttons, deadZone);
          const events = frameActions(pressed, previous, now - lastMove);
          events.forEach(action => dispatch({ action, source: 'Gamepad' }));
          if (events.some(action => action !== 'confirm')) lastMove = now;
          previous = pressed;
        } else {
          setDevice('Connect a controller and press a controller button.');
          previous = new Set();
        }
      } catch {
        setDevice('This browser blocked controller access. Keyboard and on-screen controls still work.');
        return;
      }
      frame = requestAnimationFrame(poll);
    };
    frame = requestAnimationFrame(poll);
    return () => cancelAnimationFrame(frame);
  }, [enabled, focused, available, pageVisible, buttons, deadZone]);
  function resetControls() {
    setKeys(defaultKeys); setButtons(defaultButtons); setDeadZone(.25); setSize(44); setSide('center'); setCapture(null);
    setNotice('Default controls restored.');
  }
  return <section className="gamepad-demo" aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>Try the controls</h2>
    <p id={`${id}-help`}>Move the marker to the target and confirm. Focus the play area for keyboard or gamepad input, or use the buttons below.</p>
    <div ref={board} className="gamepad-demo-board" role="group" tabIndex={0} aria-label="Play area" aria-describedby={`${id}-help ${id}-position`} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onKeyDown={event => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      const key = normalizeKey(event.key);
      const action = actions.find(a => keys[a] === key);
      if (action) { event.preventDefault(); if (action !== 'confirm' || !event.repeat) dispatch({ action, source: 'Keyboard' }); }
    }}>{Array.from({ length: 35 }, (_, cell) => <span key={cell} aria-hidden="true" className={`gamepad-demo-cell ${cell === game.y * 7 + game.x ? 'is-player' : ''} ${cell === 20 ? 'is-target' : ''}`}>{cell === game.y * 7 + game.x ? '●' : cell === 20 ? '◎' : ''}</span>)}</div>
    <p id={`${id}-position`} className="a11y-only">Marker: column {game.x + 1}, row {game.y + 1}. Target: column 7, row 3.</p>
    <p className="gamepad-demo-status" role="status" aria-live="polite" aria-atomic="true">{game.message}</p>
    <div className="gamepad-demo-touch" style={{ '--control-size': `${size}px`, justifyContent: side === 'left' ? 'flex-start' : side === 'right' ? 'flex-end' : 'center' }}><div className="gamepad-demo-dpad" role="group" aria-label="On-screen controls">{[['up','↑'],['left','←'],['down','↓'],['right','→']].map(([action,label]) => <button key={action} type="button" className={action} aria-label={`Move ${action}`} onClick={() => dispatch({ action, source: 'On-screen controls' })}>{label}</button>)}</div><button type="button" className="gamepad-demo-confirm" onClick={() => dispatch({ action: 'confirm', source: 'On-screen controls' })}>Confirm</button></div>
    <div className="gamepad-demo-toolbar"><button type="button" onClick={() => { dispatch({ action: 'reset' }); board.current.focus(); }}>Reset position</button><button type="button" disabled={!available} aria-pressed={enabled} onClick={() => { setEnabled(v => !v); board.current.focus(); }}>{enabled ? 'Disable gamepad' : 'Enable gamepad'}</button><span>Confirm events: {game.confirmations}</span></div>
    <p className="gamepad-demo-note">{!available ? 'Gamepad API is unavailable in this browser. You can still try keyboard and on-screen input.' : enabled ? `${device} ${!focused || !pageVisible ? 'Focus the play area to resume gamepad input.' : ''}` : 'Optional: connect a controller and enable gamepad input.'}</p>
    <details className="gamepad-demo-config"><summary>Configure controls</summary><p>Choose a key or controller button for each action. Assigning an occupied input swaps the two bindings. Controller labels below follow the standard mapping.</p><div className="gamepad-demo-mappings">{actions.map(action => <div className="gamepad-demo-binding" key={action}><strong>{action}</strong><button type="button" aria-label={`Change ${action} key, currently ${keyName(keys[action])}`} onClick={() => { setCapture(action); setNotice(`Press a letter, number, arrow, Space or Enter for ${action}. Escape cancels.`); }} onBlur={() => setCapture(null)} onKeyDown={event => {
      if (capture !== action) return;
      if (event.key === 'Tab') { setCapture(null); return; }
      event.preventDefault();
      if (event.key === 'Escape') { setCapture(null); setNotice('Key change cancelled.'); return; }
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      const value = normalizeKey(event.key);
      if (!value) { setNotice('Use a letter, number, arrow, Space or Enter.'); return; }
      setKeys(old => swapBinding(old, action, value)); setCapture(null); setNotice(`${action} now uses ${keyName(value)}.`);
    }}>{capture === action ? 'Press a key…' : `Key: ${keyName(keys[action])}`}</button><label><span className="a11y-only">Controller button for {action}</span><select value={buttons[action]} onChange={event => { const value = Number(event.target.value); setButtons(old => swapBinding(old, action, value)); setNotice(`${action} now uses controller button ${value}.`); }}>{Array.from({ length: 24 }, (_, index) => <option key={index} value={index}>Button {buttonName(index)}</option>)}</select></label></div>)}</div><div className="gamepad-demo-options"><label>Control size: {size}px<input type="range" min="44" max="64" step="4" value={size} onChange={event => setSize(Number(event.target.value))} /></label><label>Control position<select value={side} onChange={event => setSide(event.target.value)}><option value="left">Left</option><option value="center">Centre</option><option value="right">Right</option></select></label><label>Stick dead zone: {Math.round(deadZone * 100)}%<input type="range" min="0.1" max="0.6" step="0.05" value={deadZone} onChange={event => setDeadZone(Number(event.target.value))} /></label></div><p className="gamepad-demo-note">The left stick works with standard gamepads. Button remapping also works with custom mappings. Gamepad input pauses when you leave the play area.</p><button type="button" onClick={resetControls}>Restore default controls</button><p role="status" className="gamepad-demo-note">{notice}</p></details>
  </section>;
}
