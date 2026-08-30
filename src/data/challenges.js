export const challengesSection = {
  title: 'Challenges',
  labels: {
    challenge: 'The Challenge',
    thoughtProcess: 'How I Worked Through It',
    achievement: 'Where It Left Me',
  },
};

export const challenges = [
  {
    id: 1,
    title: 'Breaking Into Dev Without a Degree',
    tag: 'Personal Development',
    icon: '🎓',
    accent: '#4f8cff',
    date: '2021',
    keyTakeaway:
      "No CS degree, a stack of rejections, and once I finally got an internship, three months of sleeping at the software house because giving up was more expensive than the discomfort.",
    challenge:
      "Every entry-level posting listed a computer science degree as a requirement, and I didn't have one. My CV looked thin next to graduates with internships and coursework to point to, and most applications went unanswered or ended in a quick rejection. Then, once a software house finally gave me an internship, commuting, rent, and the hours the work demanded didn't fit together — and that internship was my one real shot at converting into a full-time developer.",
    thoughtProcess:
      "I stopped competing on paper and started competing on proof. Instead of listing skills I couldn't back up, I built real projects, broke them, fixed them, and documented what I learned, then applied anyway and treated every rejection as data rather than a verdict. Once I got the internship, I carried that same all-in mindset into the office itself: I kept a bag with basic essentials there, worked until the rest of the team left, and slept there instead of losing hours to travel. Mornings started before anyone else arrived, giving me quiet time to go over what I'd struggled with the day before. It wasn't sustainable forever and I knew that — it was a deliberate, temporary trade of short-term discomfort for a long-term foothold in an industry I hadn't taken the 'normal' path into.",
    achievement:
      "A software house was willing to take a chance on someone without the traditional background because the projects spoke for themselves in the interview. From there, the extra hours meant I was the person who already understood the codebase changes by the time standup happened, and I converted from intern to full-time developer at the end of the three months. It's still the clearest example I have of what I was willing to sacrifice for a career that didn't have an obvious door in.",
    focusAreas: ['Self-Teaching', 'Portfolio Building', 'Persistence', 'Discipline', 'Ownership'],
  },
  {
    id: 2,
    title: 'The Pressure of 100 Million Clicks',
    tag: 'Personal Development',
    icon: '🌎',
    accent: '#4f8cff',
    date: '2023',
    keyTakeaway:
      "Watching a project I worked on cross 100 million views didn't cure my imposter syndrome — it just raised the stakes on it.",
    challenge:
      "Once the numbers on the games I'd shipped started climbing into the tens and then hundreds of millions of views, the feeling wasn't pride, it was dread. I kept waiting to be found out — the developer without a CS degree who'd somehow ended up with code running in front of an audience that size. Every bug report felt personal, every code review comment felt like evidence, and I second-guessed decisions I would have made confidently on a smaller project.",
    thoughtProcess:
      "I stopped trying to talk myself out of the feeling and started treating it as a signal instead of a verdict: if a decision made me anxious, that was a cue to slow down and double-check it, not proof I didn't belong in the room. I kept a running log of what I'd actually shipped and the problems I'd solved, so I had evidence to point to instead of just a feeling. I also started saying the quiet part out loud to teammates — that the scale was intimidating me — and found out almost everyone senior around me had felt the same thing at some point. That reframed it from a personal flaw into a normal part of doing work that matters.",
    achievement:
      "The anxiety never fully disappeared, but it stopped being able to stop me. I kept shipping features into those large-audience products, and the habit of double-checking high-stakes decisions instead of freezing on them made me a more careful engineer, not a slower one. It's the reason the more technical stories on this page exist at all — I kept showing up to the hard problems instead of avoiding them.",
    focusAreas: ['Imposter Syndrome', 'Confidence Under Pressure', 'Mindset'],
  },
  {
    id: 7,
    title: 'AI This, AI That',
    tag: 'AI',
    icon: '🤖',
    accent: '#5ec9e0',
    date: '2024–2026',
    keyTakeaway:
      "I didn't like AI coding tools at first — I've since learned to use them as a tool that makes me faster and better in a lot of cases, but not all of them.",
    challenge:
      "When AI coding assistants started showing up in every editor, I was skeptical, honestly a bit resistant. I'd spent years building the skills to solve problems myself, and it felt like the suggestions were either going to make me lazy, make my code worse, or quietly replace the judgement I'd worked to build. I saw enough confidently-wrong suggestions early on to justify not trusting it.",
    thoughtProcess:
      "Instead of adopting it wholesale or rejecting it outright, I treated it like any other tool: I tested where it actually helped and where it didn't, and I kept myself in charge of the decisions either way. It turned out to be genuinely useful for boilerplate, repetitive refactors, exploring a few different approaches quickly, and catching small mistakes before they became bugs. It was a lot less useful — sometimes actively wrong — for novel architecture decisions, nuanced product and UX calls, or understanding the specific quirks of a legacy codebase that only comes from having lived in it. So I stopped asking 'is AI good or bad' and started asking 'is this one of the cases where it helps.'",
    achievement:
      "I use AI tools daily now, and they measurably boost my output on the tasks they're good at — I ship the repetitive and well-understood parts of the work faster, which frees up time for the parts that actually need my judgement. I still don't hand it the decisions that matter most. My stance settled into something simple: it's a helpful tool that speeds up a lot of the job, not a replacement for the engineering judgement that's still mine to apply.",
    focusAreas: ['AI-Assisted Development', 'Critical Evaluation', 'Productivity'],
  },
  {
    id: 3,
    title: 'Reviving old video engine',
    tag: 'Architecture',
    icon: '🏗️',
    accent: '#9b7bff',
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
    id: 4,
    title: 'Gamepad API? Lets Go!',
    tag: 'Architecture',
    icon: '🎮',
    accent: '#9b7bff',
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
    id: 5,
    title: 'The Beta Tester',
    tag: 'Reverse Engineering',
    icon: '🐛',
    accent: '#ff9f43',
    date: '2024, 2026',
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
    id: 6,
    title: 'Math in CSS',
    tag: 'Creative Frontend',
    icon: '🎨',
    accent: '#e85d9c',
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

export default challenges;
