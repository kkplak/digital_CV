export const actions = ['up', 'down', 'left', 'right', 'confirm'];
export const defaultKeys = { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight', confirm: 'Enter' };
export const defaultButtons = { up: 12, down: 13, left: 14, right: 15, confirm: 0 };
export const initialGame = { x: 0, y: 2, confirmations: 0, message: 'Ready. Target: column 7, row 3.' };
export function swapBinding(bindings, action, value) {
  const conflict = actions.find(name => name !== action && bindings[name] === value);
  return { ...bindings, ...(conflict ? { [conflict]: bindings[action] } : {}), [action]: value };
}
export function normalizeKey(key) {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', ' '].includes(key)) return key;
  return /^[a-z0-9]$/i.test(key) ? key.toLowerCase() : null;
}
export function gameReducer(state, event) {
  if (event.action === 'reset') return initialGame;
  if (event.action === 'confirm') return { ...state, confirmations: state.confirmations + 1, message: state.x === 6 && state.y === 2 ? `Target confirmed! ${event.source} input.` : `Confirm received from ${event.source}. Reach column 7, row 3 to finish.` };
  const direction = { up: [0,-1], down: [0,1], left: [-1,0], right: [1,0] }[event.action];
  if (!direction) return state;
  const x = Math.max(0, Math.min(6, state.x + direction[0]));
  const y = Math.max(0, Math.min(4, state.y + direction[1]));
  return { ...state, x, y, message: `${event.source}: column ${x + 1}, row ${y + 1}.${x === 6 && y === 2 ? ' Target reached. Confirm to finish.' : ''}` };
}
// Physical inputs are translated to the same actions used by keyboard and touch.
export function readGamepad(pad, bindings, deadZone) {
  const pressed = new Set(actions.filter(action => pad.buttons[bindings[action]]?.pressed));
  if (pad.mapping === 'standard') {
    const x = pad.axes[0] || 0, y = pad.axes[1] || 0;
    if (Math.max(Math.abs(x), Math.abs(y)) > deadZone) {
      pressed.add(Math.abs(x) > Math.abs(y) ? (x > 0 ? 'right' : 'left') : (y > 0 ? 'down' : 'up'));
    }
  }
  return pressed;
}
export function frameActions(pressed, previous, elapsed) {
  return actions.filter(action => pressed.has(action) && (!previous.has(action) || (action !== 'confirm' && elapsed >= 160)));
}
