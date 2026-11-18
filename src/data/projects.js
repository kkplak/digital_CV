export const projects = [
  {
    id: 23,
    name: "Pokémon 30",
    windowTheme: {
      image: "/pokemon30/level-select-sheet.png",
      position: "center 12%",
      accent: "#bd243a",
      accentDark: "#ff9bad",
      credit: "Nintendo / The Pokémon Company / McDonald's · archived by DogToon64",
      sourceUrl: "https://www.spriters-resource.com/browser_games/pokemonhappymealdigitalexperience/asset/635479/",
    },
    portfolioRank: 2,
    iconImage: "/pokemon30/anniversary-mark.svg",
    description:
      "Led frontend development and technical delivery for the Pokémon 30 collaboration with McDonald's Happy Meal.",
    projectType: "Digital Experience",
    portfolioCategories: ["engineering"],
    date: "2026",
    role: "Lead Frontend Developer / Technical Delivery",
    details:
      "Led frontend development and technical delivery for the Pokémon 30 collaboration with McDonald's Happy Meal. The campaign connects the physical Happy Meal to a QR-code digital game, where players search a virtual classroom and playground for 15 Pokémon toys.\n\nBuilt with the React and TypeScript stack also used for the Super Mario Galaxy Happy Meal experience. The U.S. campaign launched on 10 November 2026.",
    focusAreas: [
      "Frontend Leadership",
      "Technical Delivery",
      "Interactive Web Games",
      "React & TypeScript",
      "Accessibility",
      "State Management",
      "Animation & Web Audio",
    ],
    techStack: [
      "TypeScript",
      "React 18",
      "Vite 6",
      "HTML",
      "CSS",
      "WCAG 2.2",
      "Tone.js",
      "pnpm",
      "zustand",
      "framer-motion",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    images: [
      {
        url: "/pokemon30/title-screen-sheet.png",
        isWide: true,
        crop: { x: 1, y: 1, width: 1800, height: 1200, sourceWidth: 1836 },
        caption: "Pokémon Happy Meal Digital Experience — title-screen artwork.",
        credit: "Artwork: Nintendo, The Pokémon Company and McDonald's. Archived by DogToon64.",
        sourceLabel: "The Spriters Resource — Title Screen",
        sourceUrl: "https://www.spriters-resource.com/browser_games/pokemonhappymealdigitalexperience/asset/635485/",
      },
      {
        url: "/pokemon30/level-select-sheet.png",
        crop: { x: 2, y: 3604, width: 312, height: 134, sourceWidth: 3604 },
        caption: "Classroom scene-selection artwork featuring Bulbasaur.",
        credit: "Artwork: Nintendo, The Pokémon Company and McDonald's. Archived by DogToon64.",
        sourceLabel: "The Spriters Resource — Level Select",
        sourceUrl: "https://www.spriters-resource.com/browser_games/pokemonhappymealdigitalexperience/asset/635479/",
      },
      {
        url: "/pokemon30/level-select-sheet.png",
        crop: { x: 316, y: 3604, width: 312, height: 134, sourceWidth: 3604 },
        caption: "Playground scene-selection artwork featuring Squirtle.",
        credit: "Artwork: Nintendo, The Pokémon Company and McDonald's. Archived by DogToon64.",
        sourceLabel: "The Spriters Resource — Level Select",
        sourceUrl: "https://www.spriters-resource.com/browser_games/pokemonhappymealdigitalexperience/asset/635479/",
      },
      {
        url: "/pokemon30/level-select-sheet.png",
        crop: { x: 630, y: 3604, width: 312, height: 134, sourceWidth: 3604 },
        caption: "Art-room scene-selection artwork featuring Charmander.",
        credit: "Artwork: Nintendo, The Pokémon Company and McDonald's. Archived by DogToon64.",
        sourceLabel: "The Spriters Resource — Level Select",
        sourceUrl: "https://www.spriters-resource.com/browser_games/pokemonhappymealdigitalexperience/asset/635479/",
      },
      {
        url: "/pokemon30/happy-meal-campaign.jpg",
        isVertical: true,
        caption:
          "Official Pokémon Happy Meal campaign artwork from McDonald's.",
        credit: "Campaign artwork supplied by McDonald's.",
        sourceLabel: "McDonald's campaign announcement",
        sourceUrl: "https://corporate.mcdonalds.com/corpmcd/our-stories/article/USmenuspotter.html",
      },
    ],
    links: [
      {
        label: "McDonald's campaign announcement",
        url: "https://corporate.mcdonalds.com/corpmcd/our-stories/article/USmenuspotter.html",
      },
      {
        label: "Game listing on IGDB",
        url: "https://www.igdb.com/games/pokemon-happy-meal-digital-experience",
      },
      {
        label: "Public game artwork collection",
        url: "https://www.spriters-resource.com/browser_games/pokemonhappymealdigitalexperience/",
        attributionOnly: true,
      },
      {
        label: "Launch coverage — Good Morning America",
        url: "https://www.goodmorningamerica.com/food/story/mcdonalds-brings-back-pokemon-happy-meals-138022291",
      },
      {
        label: "Pokémon 30th anniversary",
        url: "https://30.pokemon.com/en-us",
      },
    ],
  },
  {
    id: 22,
    name: "Folio PDF Editor",
    portfolioRank: 4,
    icon: "📄",
    iconImage: "/folio-logo.svg",
    description:
      "Built for a friend in insurance: a PDF workspace that replaces repeated typing with linked fields, reusable templates and configurable rules.",
    projectType: "Document Workflow Application",
    category: "personal",
    portfolioCategories: ["engineering", "design", "ai"],
    date: "2026",
    role: "Product Design & Engineering",
    details:
      "Created Folio after a friend working in insurance described the repetitive paperwork involved in every client meeting. Turned that frustration into a browser-based PDF workspace with reusable templates, linked variables and configurable conditional rules. A client name or address can be entered once and reused across pages, while one selection can update related greetings, values and checkboxes. Designed separate template-editing, document-filling and preview modes, with PDF export and a local workspace that requires no account.",
    focusAreas: [
      "Product Discovery & Problem Solving",
      "End-to-End Product Ownership",
      "Workflow Automation",
      "UX & Interaction Design",
      "Reusable PDF Templates",
      "Linked Fields & Variables",
      "Conditional Logic",
    ],
    techStack: ["PDF", "Vercel"],
    images: [
      {
        url: "/folio-workspace.png",
        caption:
          "Folio's sample template: one client name and address, linked to four locations across the document. Fictional details shown.",
      },
      {
        url: "/folio-rules.png",
        caption:
          "Configurable rules connect a salutation to greetings, translated values and checkboxes without writing code.",
      },
    ],
    links: [
      {
        label: "Try Folio PDF Editor",
        url: "https://pdfwebapp.vercel.app/",
      },
    ],
  },
  {
    video: {
      "url": "/project-assets/mario-game-intro.mp4",
      "caption": "Opening animation from the Super Mario Galaxy Movie Happy Meal digital experience.",
      "credit": "Nintendo / Illumination / Universal and McDonald's. Public Happy Meal Digital intro clip.",
      "sourceLabel": "Happy Meal Digital — original intro video",
      "sourceUrl": "https://media.happymealdigital.com/supermario/project_santa_intro_branded_v004.mp4"
    },
    id: 1,
    name: "Nintendo Super Mario Galaxy",
    windowTheme: { accent: "#2264b4", accentDark: "#9bc9ff", position: "center 35%" },
    highlight: true,
    portfolioRank: 1,
    iconImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/960px-Mario_Series_Logo.svg.png",
    description: "Super Mario Galaxy collaboration with McDonald's.",
    projectType: "Digital Experience",
    date: "2026",
    role: "Frontend Developer / Lead Technical Delivery",
    details:
      "Delivered the technical execution of a global Happy Meal digital experience tied to the Super Mario Galaxy collaboration, ensuring performance, stability, and consistency across markets.",
    focusAreas: [
      "Video Game Engine",
      "Requirements Translation (Business → Tech)",
      "Quality Assurance",
      "Agile Execution",
      "Accessibility",
      "Internationalization",
      "End-to-End Delivery",
      "Programming",
      "Cross-functional Collaboration",
      "Global Launch",
    ],
    techStack: [
      "TypeScript",
      "React 18",
      "Vite 6",
      "HTML",
      "CSS",
      "WCAG 2.2",
      "Tone.js",
      "pnpm",
      "zustand",
      "framer-motion",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    links: [
      {
        "label": "Official movie trailer",
        "url": "https://www.youtube.com/watch?v=SA9ohTuGl4Q"
      },
      {
        "label": "Public Happy Meal game playthrough",
        "url": "https://www.youtube.com/watch?v=tAsOy2nwmBc"
      }
    ],
    images: [
      {
        "url": "https://www.nintendo.co.jp/corporate/release/en/2026/img_260125/mv.webp",
        "caption": "Official Super Mario Galaxy Movie promotional artwork.",
        "credit": "Nintendo / Illumination / Universal. Happy Meal campaign: McDonald's.",
        "sourceLabel": "Nintendo — original promotional image",
        "sourceUrl": "https://www.nintendo.co.jp/corporate/release/en/2026/img_260125/mv.webp"
      },
      {
        "url": "https://nintenduo.com/wp-content/uploads/2026/03/Happy-Meal-Mario-Galaxy-Pelicula-Espana.avif",
        "caption": "The Super Mario Galaxy Movie Happy Meal campaign.",
        "credit": "Nintendo / Illumination / Universal. Happy Meal campaign: McDonald's.",
        "sourceLabel": "Nintenduo — campaign image",
        "sourceUrl": "https://nintenduo.com/wp-content/uploads/2026/03/Happy-Meal-Mario-Galaxy-Pelicula-Espana.avif"
      }
    ],
  },
  {
    id: 17,
    name: "Web Accessibility Research",
    highlight: true,
    portfolioRank: 6,
    iconImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Accessibility.svg/960px-Accessibility.svg.png",
    description:
      "Researching and implementing accessibility features to broaden the reach of web applications.",
    projectType: "Accessibility Research Website",
    category: "personal",
    portfolioCategories: ["engineering", "specialist"],
    date: "2023 - 2026",
    role: "Frontend Developer",
    details:
      "Conducted extensive accessibility research and testing across modern assistive technologies and mobile platforms.\n\nEvaluated interfaces using screen readers (VoiceOver, TalkBack), eye-tracking systems, voice control, closed captions, and other accessibility features used by people with disabilities.\n\nTested applications on both Android and iOS, including developer beta releases months before public launch, to understand how upcoming accessibility changes affect web behavior.\n\nIdentified edge cases between browser focus and screen reader virtual cursors, improved keyboard navigation, semantic structure, and ARIA usage, and validated compatibility with evolving assistive technology ecosystems.\n\nDocumented findings and translated them into practical development patterns that improve inclusive user experiences.",
    focusAreas: [
      "Assistive Technology Testing",
      "Eye-Tracking & Voice Control",
      "WCAG Compliance",
      "Keyboard Navigation",
      "Focus Order",
      "Closed Captions",
      "Audio Descriptions",
      "Cross-Platform Accessibility Testing",
      "Quality Assurance",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "WAI-ARIA",
      "WCAG 2.2",
      "VoiceOver",
      "Screen Reader",
      "iOS",
      "Android",
    ],
    links: [
      {
        label: "Link to my accessibility playground",
        url: "https://codeline-a11y-demo.vercel.app",
      },
      {
        label: " Official Web Content Accessibility Guidelines (WCAG) 2.1",
        url: "https://www.w3.org/TR/WCAG21/",
      },
      {
        label: "iOS Eye Tracking Accessibility Feature from Apple Support",
        url: "https://www.youtube.com/watch?v=z8LimeLV_Kk",
      },
    ],
    images: [{ url: "/a11y1.png" }, { url: "/a11y2.png" }],
  },
  {
    id: 1,
    name: "TinyTAN BTS",
    windowTheme: { accent: "#7850ac", accentDark: "#d2b0ff", position: "center 40%" },
    highlight: true,
    portfolioRank: 8,
    iconImage: "/tinytan-logo.png",
    description: "BTS TinyTAN collaboration with McDonald's.",
    projectType: "Web Mobile Game",
    date: "2025",
    role: "Frontend Developer / Technical Delivery",
    details:
      "Delivered the technical execution of a global Happy Meal digital experience tied to the BTS TinyTAN collaboration, ensuring performance, stability, and consistency across markets.",
    focusAreas: [
      "Video Game Engine",
      "Requirements Translation (Business → Tech)",
      "Quality Assurance",
      "Agile Execution",
      "Accessibility",
      "End-to-End Delivery",
      "Programming",
      "Cross-functional Collaboration",
      "Global Launch",
    ],
    techStack: [
      "TypeScript",
      "React 18",
      "Vite 6",
      "HTML",
      "CSS",
      "WCAG 2.2",
      "Tone.js",
      "pnpm",
      "zustand",
      "framer-motion",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    links: [
      {
        "label": "TinyTAN campaign and digital game coverage",
        "url": "https://thepopinsider.com/mcdonalds-tinytan-happy-meal-news/"
      },
      {
        "label": "McDonald's Swiss TinyTAN activity sheet (PDF)",
        "url": "https://www.mcdonalds.com/content/dam/sites/ch/nfl/pdf/mcdonalds_happymeal_BTS.pdf"
      }
    ],
    images: [
      {
        "url": "https://thepopinsider.com/wp-content/uploads/sites/6/2025/08/MCDONALDS_TinyTANHappyMealsZoom.jpg",
        "caption": "TinyTAN Happy Meal campaign artwork.",
        "credit": "BIGHIT MUSIC / HYBE and McDonald's. Campaign artwork supplied by McDonald's.",
        "sourceLabel": "The Pop Insider — TinyTAN launch coverage",
        "sourceUrl": "https://thepopinsider.com/mcdonalds-tinytan-happy-meal-news/"
      }
    ],
  },

  {
    id: 2,
    name: "Playmobil",
    windowTheme: { accent: "#0873a9", accentDark: "#83d6ff", position: "center 40%" },
    highlight: true,
    portfolioRank: 7,
    iconImage:
      "https://images.seeklogo.com/logo-png/21/2/playmobil-logo-png_seeklogo-214107.png",
    description: "Playmobil collaboration with McDonald's.",
    projectType: "Web Mobile Game",
    date: "2025",
    role: "Frontend Developer / Technical Delivery",
    details:
      "Led technical delivery for the Playmobil Happy Meal digital experience, coordinating implementation across regions and aligning with brand and campaign requirements.",
    focusAreas: [
      "3D Development",
      "Requirements Translation (Business → Tech)",
      "Quality Assurance",
      "Agile Execution",
      "Accessibility",
      "End-to-End Delivery",
      "Programming",
      "Cross-functional Collaboration",
      "Global Launch",
    ],
    techStack: [
      "TypeScript",
      "React 18",
      "HTML",
      "PlayCanvas",
      "styled-components",
      "WCAG 2.2",
      "Tone.js",
      "pnpm",
      "zustand",
      "framer-motion",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    links: [
      {
        label: "Public game playthrough",
        url: "https://youtu.be/jK16_pGzknw?t=87",
      },
    ],
    images: [
      {
        "url": "https://mcdonalds.bg/wp-content/uploads/2025/11/mcd_hm_playmobile_gma_envg_1200x1200-1-1024x1024.jpg",
        "caption": "Official Playmobil Happy Meal campaign artwork.",
        "credit": "PLAYMOBIL and McDonald's. Public campaign artwork.",
        "sourceLabel": "McDonald's Bulgaria — campaign image",
        "sourceUrl": "https://mcdonalds.bg/wp-content/uploads/2025/11/mcd_hm_playmobile_gma_envg_1200x1200-1-1024x1024.jpg"
      },
      {
        "url": "https://cdn.singpromos.com/wp-content/uploads/2025/06/McDonalds-8-singpromos.com-12-Jun-2025.jpg",
        "caption": "Playmobil Happy Meal collectible characters.",
        "credit": "PLAYMOBIL and McDonald's. Public campaign artwork.",
        "sourceLabel": "SingPromos — campaign image",
        "sourceUrl": "https://cdn.singpromos.com/wp-content/uploads/2025/06/McDonalds-8-singpromos.com-12-Jun-2025.jpg"
      }
    ],
  },
  {
    id: 3,
    name: "Jurassic World: Chaos Theory",
    windowTheme: { accent: "#22754e", accentDark: "#94ddb2", position: "center 35%" },
    portfolioRank: 3,
    iconImage: "/jurassic-logo.webp",
    description: "Jurassic World: Chaos Theory Happy Meal promotion.",
    projectType: "Web Mobile Game",
    date: "2024",
    role: "Frontend Developer / Technical Delivery",
    video: { url: "/JurrasicAD.mp4" },
    details:
      "Created immersive digital experiences for the Jurassic World: Chaos Theory Happy Meal digital experience, featuring interactive elements in 3D VR and AR environments.",
    focusAreas: [
      "Augmented Reality / Virtual Reality Development",
      "Requirements Translation (Business → Tech)",
      "Quality Assurance",
      "Agile Execution",
      "Accessibility",
      "End-to-End Delivery",
      "Programming",
      "Cross-functional Collaboration",
    ],
    techStack: [
      "TypeScript",
      "React 18",
      "8thwall",
      "HTML",
      "CSS",
      "uuid",
      "WCAG 2.2",
      "Tone.js",
      "npm",
      "zustand",
      "framer-motion",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    links: [
      {
        "label": "Public digital experience playthrough",
        "url": "https://youtu.be/bxCB2pJf9RA?t=399"
      },
      {
        "label": "8th Wall WebAR project showcase",
        "url": "https://info.nianticspatial.com/blog/5-brands-show-how-3d/ar-experiences-drive-customer-engagement"
      }
    ],
    images: [
      {
        "url": "/project-assets/jurassic-8thwall-original.png",
        "caption": "Title screen, dinosaur encounter and completion screen from the Jurassic World: Chaos Theory digital experience.",
        "credit": "Jurassic World ©2024 Universal City Studios LLC and Amblin Entertainment, Inc. TV series ©2024 DreamWorks Animation LLC. Published by 8th Wall / Niantic Spatial.",
        "sourceLabel": "8th Wall — WebAR showcase",
        "sourceUrl": "https://info.nianticspatial.com/blog/5-brands-show-how-3d/ar-experiences-drive-customer-engagement",
        "isWide": true
      },
      {
        "url": "https://www.gulliversretailpark.ie/wp-content/uploads/wwwgulliversretailpark.ie-Mcdonalds.png",
        "caption": "Jurassic World: Chaos Theory Happy Meal campaign artwork.",
        "credit": "Jurassic World / Universal / DreamWorks and McDonald's. Public campaign imagery.",
        "sourceLabel": "Gullivers Retail Park — campaign image",
        "sourceUrl": "https://www.gulliversretailpark.ie/wp-content/uploads/wwwgulliversretailpark.ie-Mcdonalds.png"
      },
      {
        "url": "https://m.blog.hu/jp/jphungary/image/mobile1.jpg",
        "caption": "Publicly shared mobile view of the Jurassic World Happy Meal experience.",
        "credit": "Jurassic World / Universal / DreamWorks and McDonald's. Public campaign imagery.",
        "sourceLabel": "Jurassic Park Hungary — mobile image",
        "sourceUrl": "https://m.blog.hu/jp/jphungary/image/mobile1.jpg"
      }
    ],
  },
{
  id: 19,
  name: "Movie Nights",
  portfolioRank: 5,
  icon: "🎬",
  iconImage: "/ai-projects/movie-nights.svg",
  description:
    "Turned a personal tracking problem into a full-stack media management app, combining product thinking, intuitive UX and real-world integrations.",
  projectType: "Full-Stack Web Application",
  category: "personal",
  portfolioCategories: ["engineering", "design", "ai"],
  date: "2026",
  role: "Product Design & Engineering / AI-assisted Development",
  details:
    "Designed and built Movie Nights to replace my scattered movie and TV tracking notes with a more intuitive, centralized experience. Took ownership of the product from identifying user needs and defining features to designing the interface, integrating services and refining the application through everyday use. Implemented TMDB-powered search and metadata, Supabase authentication and cloud-synced personal libraries, alongside watchlists, ratings, viewing progress and a release calendar. Iterated on navigation, content discovery, visual presentation and mobile usability, balancing useful functionality with a clean, enjoyable experience. Used AI-assisted development to accelerate implementation while guiding product decisions, testing workflows and continuously improving the result.",
  focusAreas: [
    "Product Discovery & Problem Solving",
    "End-to-End Product Ownership",
    "Full-Stack Development",
    "UX & Interface Design",
    "API Integration & Data Management",
    "Authentication & Cloud Synchronization",
    "AI-assisted Development",
    "Usability Testing & Iteration",
  ],
  techStack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Supabase",
    "TMDB API",
    "Vercel",
  ],
   images: [{ url: "/mn1.png" }, { url: "/mn2.jpeg" },{ url: "/mn3.jpeg" },{ url: "/mn4.jpeg" },{ url: "/mn5.jpeg" }],
  links: [
    {
      label: "Explore Movie Nights",
      url: "https://tv-nights.vercel.app/",
    },
  ],
},
{
  id: 4,
  name: "Galactic Jumpers",
  windowTheme: { accent: "#7145b5", accentDark: "#c9a7ff", position: "center 40%" },
  portfolioRank: 10,
  icon: "👾",
  iconImage: "/ai-projects/galactic-jumpers.png",
  description:
    "Turned an early JavaScript platformer prototype into a complete browser game, combining frontend engineering, product design and iterative development.",
  projectType: "Interactive Web Product",
  category: "personal",
  portfolioCategories: ["engineering", "design", "ai"],
  date: "2024 prototype → 2026 game",
  role: "Product Design & Engineering / AI-assisted Development",
  details:
    "Evolved my original JavaScript platformer prototype into Galactic Jumpers, a playable browser adventure featuring three characters with distinct abilities and 18 story chapters. Owned the development process from defining gameplay mechanics and designing the player experience to implementing interactive systems and refining the final product. Built on the original movement and collision detection logic, introducing character abilities, progression, checkpoints, collectibles and persistent save functionality. Used AI-assisted development to accelerate implementation while evaluating technical solutions, testing gameplay, resolving usability issues and iterating on controls, difficulty and overall experience across desktop and mobile.",
  focusAreas: [
    "End-to-End Product Ownership",
    "Frontend Engineering",
    "Product & Interaction Design",
    "Prototype to Product",
    "Gameplay Systems & Architecture",
    "AI-assisted Development",
    "Cross-Device User Experience",
    "Testing & Iterative Improvement",
  ],
  techStack: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "AABB Collision Detection",
    "Vercel",
  ],
  images: [
    { url: "/gj1.jpeg" },
    { url: "/gj2.jpeg" },
    { url: "/gj3.jpeg" },
    { url: "/gj4.jpeg" },
    { url: "/gj5.jpeg" },
    { url: "/gj6.jpeg" },
    { url: "/gj8.jpeg" },
  ],
  links: [
    {
      label: "Play Galactic Jumpers",
      url: "https://galactic-jumpers.vercel.app/",
    },
    {
      label: "Explore the original prototype",
      url: "https://tom-platformer.vercel.app/",
    },
  ],
},
 {
  id: 21,
  name: "The Sound Adventures of Roxie",
  portfolioRank: 18,
  iconImage: "/ai-projects/roxie.png",
  description:
    "Designed and built an audio-first browser game, turning a creative concept into an interactive product through rapid prototyping, UX decisions and iterative development.",
  projectType: "Interactive Web Product",
  category: "personal",
  portfolioCategories: ["engineering", "design", "ai"],
  date: "2026",
  role: "Product Design & Engineering / AI-assisted Development",
  details:
    "Took The Sound Adventures of Roxie from an initial concept to a playable browser experience, owning the process from product direction and interaction design to implementation and refinement. Built the experience around a clear product principle: making sound a central part of exploration rather than just background audio. Designed distinct environments, gameplay interactions and visual feedback to support an intuitive, immersive experience. Used AI-assisted development to accelerate prototyping and implementation while directing design decisions, evaluating results, identifying issues and iterating on usability, audio consistency and overall product quality.",
  focusAreas: [
    "Product Thinking & Ownership",
    "Rapid Prototyping",
    "UX & Interaction Design",
    "Frontend Engineering",
    "AI-assisted Development",
    "Iterative Product Development",
    "Testing & Quality Assurance",
    "Audio Experience Design",
  ],
  techStack: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Vercel",
  ],
    images: [{ url: "/roxie1.jpeg" }, { url: "/roxie2.jpeg" },{ url: "/roxie3.jpeg" },{ url: "/roxie4.jpeg" }],
    links: [
      { label: "Play the game", url: "https://the-sound-adventures-of-roxy.vercel.app/" },
    
    ],
  },
  {
    id: 20,
    name: "Codeline",
    portfolioRank: 22,
    icon: "💻",
    iconImage: "/ai-projects/codeline.svg",
    description: "A company website for my independent web and design practice, created with AI-assisted development.",
    projectType: "Company Website",
    category: "personal",
    portfolioCategories: ["engineering", "design"],
    date: "2026",
    role: "Creator / Design Direction & AI-assisted Development",
    details:
      "Created a website for Codeline, my independent practice offering websites, digital campaign work and print design. Used AI-assisted development to turn the visual direction and content into a responsive site that presents services, selected work and a direct way to get in touch.",
    focusAreas: [
      "AI-assisted Development",
      "Design Direction",
      "Content Structure",
      "Responsive Web Design",
      "Business Communication",
    ],
    techStack: ["Next.js", "React", "CSS", "Vercel"],
    images: [
      {
        url: "/codeline-google.png",
        caption: "Codeline homepage introducing the web, digital and print practice.",
      },
      {
        url: "/codeline-google2.png",
        caption: "Codeline services: websites and digital campaign work.",
      },
    ],
    links: [
      { label: "Visit Codeline", url: "https://codeline-digital.vercel.app/" },
    ],
  },
  {
    id: 5,
    name: "Warner Bros. MultiVersus",
    portfolioRank: 11,
    iconImage: "/multiversus-logo.svg",
    description: "Warner Bros. MultiVersus Happy Meal promotion.",
    projectType: "Web Mobile Game",
    date: "2024",
    role: "Frontend Developer / Technical Delivery",
    details:
      "McDonald's Happy Meal campaign featuring Warner Bros. MultiVersus collectibles and digital experience.",
    focusAreas: [
      "Video Game Engine",
      "Technical Ownership",
      "Requirements Translation (Business → Tech)",
      "Accessibility",
      "Agile Execution",
      "Quality Assurance",
      "End-to-End Delivery",
      "Programming",
      "Cross-functional Collaboration",
    ],
      techStack: [
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "WCAG",
      "Tone.js",
      "npm",
      "zustand",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    links: [
      {
        "label": "Campaign and digital game overview",
        "url": "https://multiversus.wiki.gg/wiki/McDonald%27s"
      },
      {
        "label": "tms campaign case study",
        "url": "https://www.tmsw.com/trending/tms-and-mcdonalds-joined-forces-with-warner-bros-discovery-global-consumer-products-for-multiversus-happy-meal/"
      }
    ],
    images: [
      {
        "url": "/project-assets/multiversus-splash.png",
        "caption": "The MultiVersus Happy Meal digital experience — title screen.",
        "credit": "Warner Bros. Discovery and McDonald's. Digital experience imagery published by tms.",
        "sourceLabel": "tms — MultiVersus case study",
        "sourceUrl": "https://www.tmsw.com/trending/tms-and-mcdonalds-joined-forces-with-warner-bros-discovery-global-consumer-products-for-multiversus-happy-meal/",
        "isVertical": true
      },
      {
        "url": "https://www.tmsw.com/wp-content/uploads/hero_update.jpg",
        "caption": "MultiVersus Happy Meal campaign artwork.",
        "credit": "Warner Bros. Discovery and McDonald's. Campaign artwork.",
        "sourceLabel": "tms — MultiVersus case study",
        "sourceUrl": "https://www.tmsw.com/trending/tms-and-mcdonalds-joined-forces-with-warner-bros-discovery-global-consumer-products-for-multiversus-happy-meal/"
      },
      {
        "url": "https://popculturewonders.com/wp-content/uploads/multiversus-happy-meal-toys.webp",
        "caption": "Happy Meal collectible tins and campaign artwork.",
        "credit": "Warner Bros. Discovery and McDonald's. Campaign artwork.",
        "sourceLabel": "Pop Culture Wonders — campaign image",
        "sourceUrl": "https://popculturewonders.com/wp-content/uploads/multiversus-happy-meal-toys.webp"
      },
      {
        "url": "/project-assets/multiversus-transition.png",
        "caption": "Character duo reveal in the digital experience.",
        "credit": "Warner Bros. Discovery and McDonald's. Digital experience imagery published by tms.",
        "sourceLabel": "tms — MultiVersus case study",
        "sourceUrl": "https://www.tmsw.com/trending/tms-and-mcdonalds-joined-forces-with-warner-bros-discovery-global-consumer-products-for-multiversus-happy-meal/",
        "isVertical": true
      },
      {
        "url": "/project-assets/multiversus-completion.png",
        "caption": "Completion screen from the MultiVersus digital experience.",
        "credit": "Warner Bros. Discovery and McDonald's. Digital experience imagery published by tms.",
        "sourceLabel": "tms — MultiVersus case study",
        "sourceUrl": "https://www.tmsw.com/trending/tms-and-mcdonalds-joined-forces-with-warner-bros-discovery-global-consumer-products-for-multiversus-happy-meal/",
        "isVertical": true
      }
    ],
  },
  {
    id: 6,
    name: "Captain America: Brave New World",
    portfolioRank: 13,
    iconImage: "https://www.pngall.com/wp-content/uploads/2016/05/Captain-America-PNG-HD.png",
    description:
      "McDonald's Happy Meal campaign featuring Captain America: Brave New World collectibles and digital experience.",
    projectType: "Web Mobile Game",
    date: "2024",
    role: "Frontend Developer / Technical Delivery",
    details:
      "Delivered the digital experience supporting the Captain America: Brave New World Happy Meal campaign, ensuring smooth video based web game and campaign timelines.",
    focusAreas: [
      "Video Game Engine",
      "Technical Ownership",
      "Requirements Translation (Business → Tech)",
      "Accessibility",
      "Quality Assurance",
      "Agile Execution",
      "End-to-End Delivery",
      "Programming",
      "Cross-functional Collaboration",
    ],
     techStack: [
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "WCAG",
      "npm",
      "zustand",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    links: [
      {
        "label": "Happy Meal campaign commercial (2024)",
        "url": "https://www.youtube.com/watch?v=WbdujKzxBPc"
      },
      {
        "label": "Digital experience review",
        "url": "https://noscoopsclub.com/2024/05/04/captain-america-brave-new-world-happy-meal-red-hulk/"
      }
    ],
    images: [
      {
        "url": "https://noscoopsclub.com/wp-content/uploads/2024/05/mg-floats-2.png",
        "isVertical": true,
        "caption": "A flying sequence in the Captain America Happy Meal digital experience.",
        "credit": "Marvel and McDonald's. Screenshots published by Ian Grimm / No Scoops Club.",
        "sourceLabel": "No Scoops Club — digital experience review",
        "sourceUrl": "https://noscoopsclub.com/2024/05/04/captain-america-brave-new-world-happy-meal-red-hulk/"
      },
      {
        "url": "https://noscoopsclub.com/wp-content/uploads/2024/05/mg-home-screen-2.png",
        "isVertical": true,
        "caption": "Captain America Happy Meal digital experience — home screen.",
        "credit": "Marvel and McDonald's. Screenshots published by Ian Grimm / No Scoops Club.",
        "sourceLabel": "No Scoops Club — digital experience review",
        "sourceUrl": "https://noscoopsclub.com/2024/05/04/captain-america-brave-new-world-happy-meal-red-hulk/"
      },
      {
        "url": "/project-assets/captain-red-hulk.webp",
        "caption": "Captain America and Falcon stop Red Hulk in the digital experience.",
        "credit": "Marvel and McDonald's. Screenshot published by Comic Book Club.",
        "sourceLabel": "Comic Book Club — digital experience coverage",
        "sourceUrl": "https://comicbookclublive.com/2024/04/29/mcdonalds-happy-meal-new-falcon-costume-red-hulk/"
      }
    ],
  },
  {
    id: 7,
    name: "MyHealth",
    portfolioRank: 12,
    iconImage: "/myhealth-logo.png",
    description: "Website rebuild, brand collateral, and digital marketing materials for a health services business.",
    projectType: "Website & Digital Marketing",
    portfolioCategories: ["engineering", "design"],
    date: "2026",
    role: "Frontend Developer / Digital Specialist / UI Designer",
    details:
      "Led the redesign and rebuild of a health services website, creating a clear, contemporary digital presence aligned with the business's new direction. Designed business cards, website interfaces, and supporting digital marketing materials, then delivered the frontend implementation from design through launch.",
    focusAreas: [
      "Website Redesign & Rebuild",
      "UI Design",
      "Business Card Design",
      "Digital Marketing Materials",
      "Brand Consistency",
      "Frontend Development",
    ],
    techStack: [
      "React",
      "CSS",
      "JavaScript",
      "JSON",
      "i18n",
      "Figma",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Print Production",
    ],
    links: [{ label: "Live Website", url: "https://ask-lucas.ch/" }],
    images: [
      { url: "/protegos1.png" },
        { url: "/protegos2.png" },
          { url: "/protegos3.png" },
      {
        url: "/protegos4.png",
      },
    ],
  },
  {
    id: 8,
    name: "FAMA",
    portfolioRank: 17,
    icon: "🎬",
    description: "Film and media arts production project.",
    projectType: "Website",
    portfolioCategories: ["engineering", "design"],
    date: "2024",
    role: "Frontend Developer / Digital Specialist",
    details:
      "Co-defined digital strategy with business owners. Designed and built a multilingual website for a film production company.",
    focusAreas: [
      "Digital Strategy",
      "Web Design",
      "Multilingual Content",
      "Technical Delivery",
    ],
    techStack: ["React", "CSS", "Tailwind CSS", "JavaScript", "JSON"],
    links: [{ label: "FAMA's Website", url: "https://famafilm.pl" }],
    images: [
      { url: "/fama1.png" },
      {
        url: "/fama2.png",
      },
    ],
  },
  {
    id: 9,
    name: "Three.js Shaders Case Study",
    portfolioRank: 20,
    icon: "🎨",
    description: "WebGL shader visualization case study.",
    projectType: "Creative WebGL Website",
    category: "personal",
    portfolioCategories: ["engineering", "design"],
    date: "2024",
    role: "Frontend Developer",
    details:
      "Developed WebGL-based visualization website demonstrating advanced web graphics capabilities.",
    focusAreas: [
      "Design",
      "WebGL Development",
      "Shader Programming",
      "Creative Coding",
    ],
    techStack: ["JavaScript", "WebGL", "Three.js", "React", "GLSL"],
    links: [
      {
        label: "Project's Website",
        url: "https://codeline-solutions.vercel.app",
      },
    ],
    images: [
      {
        url: "/shader1.png",
      },
      { url: "/shader2.png" },
    ],
  },
  {
    id: 10,
    name: "Disney Elemental",
    portfolioRank: 16,
    iconImage: "/elemental-logo.png",
    description:
      "McDonald's Happy Meal campaign featuring Pixar's Elemental movie collectibles and digital experience.",
    projectType: "Web Mobile Game",
    date: "2023",
    role: "Frontend Developer / Technical Delivery",
    details:
      "Contributed to the delivery of the Elemental Happy Meal digital experience, supporting interactive content and campaign execution across multiple regions.",
    focusAreas: [
      "Video Game Engine",
      "Requirements Translation (Business → Tech)",
      "Agile Execution",
      "Quality Assurance",
      "Accessibility",
      "End-to-End Delivery",
      "Programming",
      "Cross-functional Collaboration",
    ],
   techStack: [
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "WCAG",
      "npm",
      "zustand",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    links: [
      {
        "label": "Elemental Happy Meal Toys Commercial",
        "url": "https://www.youtube.com/watch?v=lVokK1dKIRg"
      },
      {
        "label": "Digital experience case study",
        "url": "https://www.icantdrawhands.com/work/elemental"
      }
    ],
    images: [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/65184db1bc72ea7f9287a8e2/09db01dd-4113-4e72-91b5-69127f297485/2023-10-13+15+40+54.png",
        "isVertical": true,
        "caption": "Elemental digital experience — mobile interface.",
        "credit": "Disney/Pixar and McDonald's. Digital experience imagery published by icantdrawhands.",
        "sourceLabel": "icantdrawhands — Elemental case study",
        "sourceUrl": "https://www.icantdrawhands.com/work/elemental"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/65184db1bc72ea7f9287a8e2/3f0d847c-0ff1-4265-b40d-c9bc4caf1da0/elemental_frame-03.png",
        "isVertical": true,
        "caption": "Elemental digital experience — interactive world view.",
        "credit": "Disney/Pixar and McDonald's. Digital experience imagery published by icantdrawhands.",
        "sourceLabel": "icantdrawhands — Elemental case study",
        "sourceUrl": "https://www.icantdrawhands.com/work/elemental"
      },
      {
        "url": "/project-assets/elemental-menu.png",
        "caption": "Explore A Place menu, with the Happy Meal toy placed on the phone.",
        "credit": "Disney/Pixar and McDonald's. Digital experience imagery published by icantdrawhands.",
        "sourceLabel": "icantdrawhands — Elemental case study",
        "sourceUrl": "https://www.icantdrawhands.com/work/elemental",
        "isVertical": true
      }
    ],
  },
  {
    id: 11,
    name: "Roblox Adopt Me!",
    portfolioRank: 15,
    iconImage: "/adoptme-logo.png",
    description: "Adopt Me! partnership campaign with McDonald's Happy Meal.",
    projectType: "Web Mobile Game",
    date: "2023",
    role: "Frontend Developer / Technical Delivery",
    details:
      "Developed and supported a digital experience for the Roblox Adopt Me! Happy Meal partnership, aligning gameplay elements with brand and product launch requirements.",
    focusAreas: [
      "Video Game Engine",
      "Technical Ownership",
      "Requirements Translation (Business → Tech)",
      "Accessibility",
      "Quality Assurance",
      "Agile Execution",
      "End-to-End Delivery",
      "Cross-functional Collaboration",
    ],
      techStack: [
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "WCAG",
      "npm",
      "zustand",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    links: [
      {
        "label": "Official McDonald’s product launch article",
        "url": "https://www.mcdonalds.com.my/en/promotion/collect-cute-new-friends-with-adopt-me"
      }
    ],
    images: [
      {
        "url": "https://i.ytimg.com/vi/BTSfdI2IcOI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgSig2MA8=&rs=AOn4CLCWgkjUpmXwZRQbOUpWdRxZEZHFTg",
        "caption": "Public video thumbnail for the Adopt Me! Happy Meal collaboration.",
        "credit": "Adopt Me! / Uplift Games and McDonald's. Public campaign imagery.",
        "sourceLabel": "YouTube — campaign video thumbnail",
        "sourceUrl": "https://i.ytimg.com/vi/BTSfdI2IcOI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgSig2MA8=&rs=AOn4CLCWgkjUpmXwZRQbOUpWdRxZEZHFTg"
      },
      {
        "url": "https://sg.everydayonsales.com/wp-content/uploads/2023/09/McDonalds-Adopt-Me-Happy-Meal-Toys-1.jpg",
        "caption": "Adopt Me! Happy Meal campaign and collectible characters.",
        "credit": "Adopt Me! / Uplift Games and McDonald's. Public campaign imagery.",
        "sourceLabel": "EverydayOnSales — campaign image",
        "sourceUrl": "https://sg.everydayonsales.com/wp-content/uploads/2023/09/McDonalds-Adopt-Me-Happy-Meal-Toys-1.jpg"
      }
    ],
  },

  {
    id: 12,
    name: "Squishmallows",
    portfolioRank: 14,
    iconImage: "/sq-3.png",
    description:
      "McDonald's Happy Meal campaign featuring Squishmallows collectibles and digital experience.",
    projectType: "Web Mobile Game",
    date: "2023",
    role: "Frontend Developer / Technical Delivery",
    details:
      "Delivered the digital product for McDonald's Squishmallows Happy Meal promotion, creating engaging experience across multiple locales.",
    focusAreas: [
      "Programming",
      "Cross-functional Collaboration",
      "Accessibility",
      "Quality Assurance",
      "Web Audio Research",
    ],
     techStack: [
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "WCAG",
      "npm",
      "zustand",
      "lottie",
      "JSON",
      "GIT",
      "JIRA",
      "Figma",
    ],
    links: [
      {
        "label": "Official McDonald’s product launch article",
        "url": "https://corporate.mcdonalds.com/corpmcd/our-stories/article/mcdonalds-launches-squishmallows-happymeal-inthe-us.html"
      },
      {
        "label": "Happy Meal campaign commercial",
        "url": "https://www.youtube.com/watch?v=fvxpmNhW8aw"
      },
      {
        "label": "Digital experience playthrough",
        "url": "https://youtu.be/AmDucFhXLHE?t=907"
      },
      {
        "label": "tms digital experience case study",
        "url": "https://www.tmsw.com/trending/squishmallows-happy-meal-continued-its-musical-adventure-at-mcdonalds-us/"
      }
    ],
    images: [
      {
        "url": "/project-assets/squish-entry.jpg",
        "caption": "Get Ready screen from the original Squishmallows Happy Meal digital experience.",
        "credit": "Squishmallows / Jazwares and McDonald's. Digital experience imagery published by tms.",
        "sourceLabel": "tms — Squishmallows musical adventure",
        "sourceUrl": "https://www.tmsw.com/trending/squishmallows-happy-meal-continued-its-musical-adventure-at-mcdonalds-us/",
        "isVertical": true
      },
      {
        "url": "/project-assets/squish-playlist.jpg",
        "caption": "Grimace's character playlist in the Happy Meal digital experience.",
        "credit": "Squishmallows / Jazwares and McDonald's. Digital experience imagery published by tms.",
        "sourceLabel": "tms — Squishmallows musical adventure",
        "sourceUrl": "https://www.tmsw.com/trending/squishmallows-happy-meal-continued-its-musical-adventure-at-mcdonalds-us/",
        "isVertical": true
      },
      {
        "url": "https://s7d1.scene7.com/is/image/mcdonalds/HMSquishPRHero%202336x1040:hero-desktop?resmode=sharp2",
        "caption": "Official U.S. Squishmallows Happy Meal campaign artwork.",
        "credit": "Squishmallows / Jazwares and McDonald's. Campaign artwork.",
        "sourceLabel": "McDonald's — campaign announcement",
        "sourceUrl": "https://corporate.mcdonalds.com/corpmcd/our-stories/article/mcdonalds-launches-squishmallows-happymeal-inthe-us.html"
      },
      {
        "url": "https://www.licensingmagazine.com/wp-content/uploads/2023/06/Jazwares-has-announced-a-new-collaboration-with-McDonalds-to-bring-its-popular-Squishmallows-plush-figures-to-Happy-Meals-around-the-world..jpg",
        "caption": "Global Squishmallows Happy Meal campaign artwork.",
        "credit": "Squishmallows / Jazwares and McDonald's. Campaign artwork.",
        "sourceLabel": "Licensing Magazine — campaign image",
        "sourceUrl": "https://www.licensingmagazine.com/wp-content/uploads/2023/06/Jazwares-has-announced-a-new-collaboration-with-McDonalds-to-bring-its-popular-Squishmallows-plush-figures-to-Happy-Meals-around-the-world..jpg"
      }
    ],
  },

  {
    id: 13,
    name: "FICO",
    portfolioRank: 9,
    iconImage: "/fico-logo.png",
    description: "Redesign and frontend development for FICO.com page.",
    projectType: "Company Website",
    date: "2022",
    role: "Frontend Development Lead",
    details:
      "Led frontend development for FICO.com, managing client communication, task planning, time estimation, and delivery coordination.",
    focusAreas: [
      "Project Frontend Management",
      "Direct Client Communication",
      "Time Estimation",
      "Cross-functional Collaboration",
    ],
    techStack: ["React", "JavaScript", "CSS Animations", "Trello", "Figma"],
    links: [{ label: "FICO Website", url: "https://www.fico.com/" }],
    images: [
      {
        url: "/fico-1.png",
      },  {
        url: "/fico-2.png",
      },
    ],
  },

  {
    id: 15,
    name: "Menusso",
    portfolioRank: 19,
    iconImage: "/menusso-logo.png",
    description: "Menusso, the complete restaurant menu system.",
    projectType: "Company Website Platform",
    date: "2022",
    role: "Frontend Developer",
    details:
      "Developed frontend components for a restaurant menu management platform, collaborating closely with designers to translate Figma designs into production-ready React interfaces.",
    focusAreas: [
      "Web Development",
      "Translating Designs to Code",
      "Collaboration with Designers",
    ],
    techStack: ["React", "SCSS", "Bootstrap", "Figma", "Trello"],
    links: [{ label: "Menusso Website", url: "https://menusso.com" }],
    images: [
      {
        "url": "/project-assets/menusso-onboarding.png",
        "caption": "Menusso onboarding screens — the original public image at full resolution.",
        "credit": "Menusso / Marotino. Public product imagery.",
        "sourceLabel": "Menusso — original onboarding artwork",
        "sourceUrl": "https://static.wixstatic.com/media/e89c40_43cde4442754415da4743458bd952d6e~mv2.png",
        "isWide": true
      },
      {
        "url": "/project-assets/menusso-overview.jpeg",
        "caption": "Public Menusso product overview.",
        "credit": "Menusso / Marotino. Public product imagery.",
        "sourceLabel": "Menusso — original product overview",
        "sourceUrl": "https://product-list.sfo3.digitaloceanspaces.com/products/menusso/images/1ef48afa-bdac-4386-b6ae-3715d9c965db.jpeg",
        "isWide": true
      }
    ],
  },
  {
    id: 14,
    name: "Sony Dreams™",
    portfolioRank: 21,
    iconImage:
      "https://assetsio.gnwcdn.com/dreams-logo.png?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    description:
      "Game creation and user-generated content platform developed by Media Molecule for PlayStation.",
    projectType: "Game QA Project",
    date: "2021",
    role: "Quality Assurance",
    details:
      "Supported the Dreams game creation system by identifying, documenting, and tracking software defects using a structured bug-tracking workflow. Reported high-impact blockers (S1) and critical issues (S2), collaborated directly with developers on resolution, and monitored fixes through to completion. Participated in regular calls with international stakeholders including Sony and Media Molecule, contributing to clear communication, prioritization, and delivery transparency.",
    focusAreas: [
      "Defect & Quality Management",
      "Bug Tracking & Triage",
      "Severity-Based Prioritization (S1/S2)",
      "Cross-functional Communication",
      "Client & Stakeholder Collaboration",
    ],
    techStack: ["TRELLO", "PlayStation 4 TestKit", "Windows", "Microsoft Excel", "Dreams engine"],
    links: [
      {
        label: "Dreams™ in PlayStation Store",
        url: "https://www.playstation.com/pl-pl/games/dreams/",
      },
      {
        label: "Launch Trailer",
        url: "https://www.youtube.com/watch?v=BrRWp83p11Q",
      },
    ],
    images: [
      {
        "url": "/project-assets/dreams-02.jpg",
        "caption": "Dream Shaping creation tools — official PlayStation screenshot.",
        "credit": "Sony Interactive Entertainment / Media Molecule. Official PlayStation imagery.",
        "sourceLabel": "PlayStation — Dreams media gallery",
        "sourceUrl": "https://www.playstation.com/en-us/games/dreams/",
        "isWide": true
      },
      {
        "url": "/project-assets/dreams-gameplay.jpg",
        "caption": "An official Dreams gameplay screenshot from the PlayStation media gallery.",
        "credit": "Sony Interactive Entertainment / Media Molecule. Official PlayStation imagery.",
        "sourceLabel": "PlayStation — Dreams media gallery",
        "sourceUrl": "https://www.playstation.com/en-us/games/dreams/",
        "isWide": true
      }
    ],
  },
  {
    id: 16,
    name: "Zulkefly",
    portfolioRank: 24,
    iconImage:
      "https://cdn.brandfetch.io/frontierdanceland.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
    description:
      "Independent short film created for Frontier Danceland in Singapore, blending documentary and performance cinema.",
    projectType: "Short Film Project",
    date: "2020",
    role: "Director & Editor",
    details:
      "Conceived, directed, cast, shot, and edited an independent short film exploring themes of identity, friendship, trauma, and personal freedom within the urban landscape of Singapore. Worked closely with the subject to shape a narrative that dissolves the boundary between documentary and performance. Defined the visual language, including a grainy black-and-white aesthetic inspired by early cinema, and oversaw the full production lifecycle from concept to final cut. The film was featured and reviewed as part of Frontier Danceland’s Dancers’ Locker program.",
    focusAreas: [
      "Creative Direction",
      "Cinematography & Visual Storytelling",
      "Editing & Post-production",
      "Independent Filmmaking",
      "Narrative Development",
      "Performance Cinema",
    ],
    techStack: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve", "Photoshop"],
    links: [
      {
        "label": "Movie review by Critic & Reviewer @BAKCHORMEEBOY",
        "url": "https://www.frontierdanceland.com/wp-content/uploads/2022/07/20200915_Dancers-Locker-2020_Media-Review_Dance-With-Me_Dancers-Locker-2020-by-Frontier-Danceland-Rreview-by-Bakchormeeboy.pdf"
      },
      {
        "label": "Read the original performance and film review",
        "url": "https://bakchormeeboy.com/2020/09/15/dance-with-me-dancers-locker-2020-by-frontier-danceland-review/"
      }
    ],
    images: [{ url: "/zulkefly.png", isVertical: true }],
  },
  {
    id: 18,
    name: "Konrad's Digital Space",
    portfolioRank: 23,
    iconImage: "/codeline-logo.png",
    description:
      "Personal digital CV and portfolio website you are currently viewing, created using AI-assisted design and development workflows.",
    projectType: "Personal Portfolio Website",
    category: "personal",
    portfolioCategories: ["engineering", "design"],
    date: "2026",
    role: "Frontend Developer / Digital Specialist",
    details:
      "Designed and delivered a complete personal website within a single day by leveraging AI-assisted workflows for ideation, layout, and implementation. Defined visual direction, structured content, validated outputs, and iterated rapidly to achieve production-ready quality in a fraction of traditional development time.",
    focusAreas: [
      "Design Direction",
      "Time-Saving through AI Tools",
      "Web Development",
      "AI-Assisted Development",
      "Prompt Engineering",
      "Content Structuring",
    ],
    techStack: ["React", "Vite", "CSS", "GitHub Copilot", "GPT5.1-Codex"],
        images: [
      {
        url: "/digitalspace1.png",
      },
      { url: "/digitalspace2.png" },
    ],
  },
];

export default projects;
