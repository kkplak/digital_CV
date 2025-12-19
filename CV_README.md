# Digital CV - Konrad Plak

A responsive, print-optimized digital CV webpage that matches the original PDF design.

## 🚀 How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Editing Content

All CV content is centralized in a single file for easy editing:

**`/src/data/cv.js`**

This file contains all:
- Personal information and contact details
- Professional experience entries
- Education history
- Skills, languages, and expertise areas
- Achievements (personal and professional)
- Hobbies and goals

Simply edit the data in this file to update the CV content. No need to touch any components or styling files.

## 🖨️ Print to PDF

The webpage includes optimized print styles that ensure the CV prints correctly on A4 paper:

1. Open the webpage in your browser
2. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows/Linux)
3. Select "Save as PDF" as the destination
4. Ensure margins are set to "Default" or "Minimum"
5. Save the PDF

The print output will maintain:
- Two-column layout
- Proper typography and spacing
- No page breaks inside experience items
- Clean A4 proportions

## 📱 Responsive Design

- **Desktop/Tablet:** Two-column layout matching the original PDF
- **Mobile:** Stacked single-column layout with preserved content hierarchy

## 🏗️ Project Structure

```
src/
├── data/
│   └── cv.js              # Single source of truth for all CV content
├── components/
│   ├── Section.jsx        # Reusable section component
│   ├── ExperienceItem.jsx # Job/role display component
│   ├── TagList.jsx        # Skills/tech list component
│   └── ContactInfo.jsx    # Contact details component
├── App.jsx                # Main CV layout (two-column)
├── App.css                # Layout and responsive styles
└── index.css              # Global styles and print optimization
```

## ✅ Features

- ✨ Matches original PDF design (layout, typography, spacing)
- 📄 A4-proportioned page frame on desktop
- 📱 Mobile-responsive with stacked layout
- 🖨️ Print-optimized for A4 paper output
- ♿ Semantic HTML and accessible structure
- 🎯 No external UI libraries (minimal, production-ready)
- 📊 Centralized content management

## 🛠️ Tech Stack

- React 19
- Vite 7
- CSS (no external frameworks)
- Modern ES6+ JavaScript

---

**Built with attention to detail to match the original CV design exactly.**
