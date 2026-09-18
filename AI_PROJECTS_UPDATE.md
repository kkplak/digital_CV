# AI projects update

Projects now includes an **AI** collection with Movie Nights, Galactic Jumpers and Codeline. Each project has a story, technology list, focus areas and a link to the live site.

The former Platformer Game Concept entry is now Galactic Jumpers. Its story explains the progression from the 2024 JavaScript prototype to the 2026 game, with links to both versions.

Project subsections are subtly indented beneath All projects. The AI collection opens directly to its project icons; the explanation of the development process appears inside each project story. Challenges now shows titles with their icons, with the full text available after opening an item.

## Apply the update

Merge these changed files into your existing repository:

- `src/components/ProjectsWindow.jsx`
- `src/components/ProjectsWindow.css`
- `src/components/ChallengesWindow.jsx`
- `src/components/ChallengesWindow.css`
- `src/data/projects.js`
- `src/data/projectStories.js`
- `public/ai-projects/` (three new project icons)

Keep your other `public/` files. The uploaded source ZIP did not contain the existing images and videos, so this archive includes only the new project icons. The rest of the original source files are included unchanged.

No dependency or environment changes are required. Run `npm ci`, then `npm run dev` to preview, or `npm run build` for production.
