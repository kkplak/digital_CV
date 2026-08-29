export const achievementsSection = {
  title: 'Engineering highlights',
  intro:
    'A closer look at technical problems I solved while building browser-based games.',
  stats: [
    { value: '8', label: 'public web experiences' },
    { value: '100M+', label: 'combined views' },
  ],
  labels: {
    challenge: 'Problem',
    thoughtProcess: 'Approach',
    achievement: 'Result',
  },
};

export const achievements = [
  {
    id: 1,
    title: 'Refactoring a Shared Video-Game Engine',
    tag: 'Architecture',
    date: '2026',
    keyTakeaway:
      'Refactored the shared core behind multiple video-driven games without forcing active projects to be rebuilt.',
    challenge:
      'The engine mixed shared behaviour with project-specific exceptions. A change made for one game could affect other projects that depended on the same core.',
    thoughtProcess:
      'I first mapped which behaviour belonged in the engine and which belonged in project configuration. I then changed the core in small steps and regression-tested existing experiences after each step instead of attempting one large rewrite.',
    achievement:
      'Improved the stability and maintainability of the shared engine while keeping existing projects working throughout the refactor.',
    focusAreas: ['Architecture', 'Incremental Refactoring', 'Regression Testing'],
  },
  {
    id: 2,
    title: 'One Input Model for Touch, Keyboard and Controllers',
    tag: 'Input Architecture',
    date: '2025–2026',
    keyTakeaway:
      'Added key remapping, movable controls and physical-controller support around the same set of game actions.',
    challenge:
      'The games supported touch and keyboard input, but the control scheme was fixed and external controllers were not recognised. Handling each input method separately would have duplicated gameplay logic.',
    thoughtProcess:
      'I kept game actions independent from physical inputs. Touch controls, key bindings and Gamepad API events mapped to the same action names, while control position and size remained configurable. The game reacted to actions rather than the device that produced them.',
    codeLanguage: 'ts',
    codeCaption:
      'Simplified excerpt showing button-edge detection and stick-drift handling inside the Gamepad adapter.',
    codeSnippet: `type GameAction = 'confirm' | 'pause';

const DEAD_ZONE = 0.2;
const pressedLastFrame = new Map<GameAction, boolean>();

function readGamepad(gamepad: Gamepad) {
  const confirmPressed = gamepad.buttons[0]?.pressed ?? false;

  if (confirmPressed && !pressedLastFrame.get('confirm')) {
    dispatchAction('confirm');
  }

  pressedLastFrame.set('confirm', confirmPressed);

  const horizontalAxis = gamepad.axes[0] ?? 0;
  dispatchAxis(
    'moveX',
    Math.abs(horizontalAxis) < DEAD_ZONE ? 0 : horizontalAxis,
  );
}`,
    achievement:
      'Shipped controller support alongside remappable, movable and resizable controls without creating separate gameplay paths for each input method.',
    focusAreas: ['Gamepad API', 'Configurable Controls', 'Accessibility'],
  },
  {
    id: 3,
    title: 'Catching Two iOS Video Regressions Before Release',
    tag: 'Browser Debugging',
    date: '2023–2024',
    keyTakeaway:
      'Used controlled comparisons to trace two beta-only playback failures to different layers of the system.',
    challenge:
      'Video playback failed on two iOS betas for different reasons. In the first incident, the application code had not changed. In the second, there were no useful console or network errors.',
    thoughtProcess:
      'For the first incident, I kept the player unchanged and served the same asset from another host; playback returned. For the second, I reduced the page to its essential markup and reintroduced elements one at a time until the description track reproduced the failure.',
    codeLanguage: 'jsx',
    codeCaption: 'Minimal reproduction from the audio-description incident.',
    codeSnippet: `<video src={clipUrl}>
  <track
    kind="descriptions"
    src={descriptionsVtt}
    label="Audio descriptions"
  />
</video>`,
    achievement:
      'The first incident was mitigated through an alternative delivery option. The second was reduced to one HTML media feature, giving the team a specific browser issue to work around.',
    focusAreas: ['Safari / iOS', 'Root-Cause Analysis', 'Media Accessibility'],
  },
  {
    id: 4,
    title: 'Live Text With an Art-Directed Finish',
    tag: 'Creative Frontend',
    date: '2025–2026',
    keyTakeaway:
      'Built a reusable CSS treatment for dynamic level titles instead of exporting every title as an image.',
    challenge:
      'The titles needed a thick outline and dimensional shadow that matched the artwork, but their content changed at runtime. Image exports would have multiplied the number of assets and removed the text from the document structure.',
    thoughtProcess:
      'I kept each title as an `<h1>` and constructed the outline from sixteen no-blur shadows placed around each glyph. A separate drop shadow added depth. The treatment lived in Vanilla Extract and used the existing heading scale.',
    codeLanguage: 'tsx',
    codeCaption:
      'Representative excerpt combining the semantic markup with the production style; imports and animation omitted.',
    codeSnippet: `<h1 className={levelTitle}>{title}</h1>

export const levelTitle = style([
  sprinkles({ fontSize: 'h1' }),
  {
    color: 'white',
    textAlign: 'center',
    letterSpacing: '-0.5px',
    padding: '0 0.5rem',
    filter: 'drop-shadow(0 3px 0 rgba(0, 0, 0, 0.75))',
    textShadow: [
      '0.365rem 0 rgb(106, 0, 4)',
      '-0.365rem 0 rgb(106, 0, 4)',
      '0 0.365rem rgb(106, 0, 4)',
      '0 -0.365rem rgb(106, 0, 4)',
      '0.258rem 0.258rem rgb(106, 0, 4)',
      '-0.258rem 0.258rem rgb(106, 0, 4)',
      '0.258rem -0.258rem rgb(106, 0, 4)',
      '-0.258rem -0.258rem rgb(106, 0, 4)',
      '0.337rem 0.14rem rgb(106, 0, 4)',
      '-0.337rem 0.14rem rgb(106, 0, 4)',
      '0.337rem -0.14rem rgb(106, 0, 4)',
      '-0.337rem -0.14rem rgb(106, 0, 4)',
      '0.14rem 0.337rem rgb(106, 0, 4)',
      '-0.14rem 0.337rem rgb(106, 0, 4)',
      '0.14rem -0.337rem rgb(106, 0, 4)',
      '-0.14rem -0.337rem rgb(106, 0, 4)',
    ].join(', '),
  },
]);`,
    achievement:
      'One reusable style handled runtime titles while keeping the content as selectable, semantic HTML instead of per-title artwork.',
    focusAreas: ['Vanilla Extract', 'Semantic HTML', 'CSS Rendering'],
  },
];

export default achievements;

