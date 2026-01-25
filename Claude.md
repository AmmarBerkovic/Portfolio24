# Portfolio24 - Project Context for Claude

## Project Overview

This is a personal portfolio website for **Ammar Berkovic**, a Full Stack Developer. The portfolio showcases professional experience, projects, and skills with an interactive, modern design featuring particle animations and smooth scrolling.

**Live URL**: https://ammarberkovic.github.io/Portfolio24/

## Tech Stack

### Core Technologies
- **React 18.2.0** - UI framework
- **Vite 5.4.21** - Build tool and dev server (migrated from Create React App)
- **React Router DOM 6.23.0** - Client-side routing (using HashRouter for GitHub Pages)
- **SASS** - CSS preprocessor with global variables and mixins

### Key Libraries
- **@emailjs/browser** - Contact form email functionality
- **FontAwesome** - Icons throughout the site
- **react-tsparticles** - Interactive particle background animations
- **react-vertical-timeline-component** - Timeline display for experience
- **react-toastify** - Toast notifications for user feedback
- **react-router-hash-link** - Smooth scrolling to hash links

### Development Tools
- **ESLint** - Code linting with react-app config, jsx-a11y, and Prettier integration
- **Prettier** - Code formatting
- **Husky** - Git hooks management
- **lint-staged** - Pre-commit hook for linting and formatting
- **gh-pages** - Automated GitHub Pages deployment

## Project Structure

```
Portfolio24/
├── .husky/                 # Git hooks
│   └── pre-commit         # Runs lint-staged before commits
├── public/                # Static assets
├── src/
│   ├── assets/           # Images, fonts, and other media
│   ├── components/       # React components
│   │   ├── about/       # About section component
│   │   ├── contact/     # Contact form component
│   │   ├── landing/     # Hero/landing section
│   │   ├── navigation/  # Navigation bar
│   │   ├── particles/   # Particle background
│   │   └── projects/    # Projects section
│   │       └── project/ # Individual project component
│   ├── constants/       # Constant values
│   │   └── breakpoints.js  # Responsive breakpoints
│   ├── globals/         # Global styles
│   │   ├── fonts.scss
│   │   ├── mixins.scss
│   │   ├── styles.scss
│   │   └── variables.scss
│   ├── pages/           # Page components
│   │   └── Home.jsx    # Main home page
│   ├── ErrorBoundary.jsx # Error boundary wrapper
│   └── index.jsx       # Application entry point
├── .env                 # EmailJS configuration (not in git)
├── .eslintrc.json      # ESLint configuration
├── .prettierrc.json    # Prettier configuration
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Key Features

### Components
1. **Landing** - Hero section with introduction
2. **About** - Professional background and skills
3. **Projects** - Portfolio of work with project cards
4. **Contact** - Email contact form (using EmailJS)
5. **Navigation** - Fixed navigation bar with smooth scrolling
6. **Particles** - Animated background using tsparticles
7. **ErrorBoundary** - React error boundary for graceful error handling

### Styling Approach
- SASS with global variables and mixins
- Responsive design with defined breakpoints (xs: 0, sm: 576, md: 768, lg: 992, xl: 1220)
- Global SCSS automatically imported into all component styles
- Component-scoped SCSS files

## Development Setup

### Prerequisites
- Node.js and npm installed
- Git for version control

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root with EmailJS credentials:
```
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

### Running Locally
```bash
npm run dev       # Start dev server on http://localhost:3000
npm run build     # Build for production
npm run preview   # Preview production build
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server (port 3000) |
| `npm run build` | Build production bundle to `build/` directory |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all JS/JSX files |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting without changes |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run prepare` | Initialize Husky (runs automatically) |

## Configuration Files

### Vite Config (`vite.config.js`)
- Base path set to `/Portfolio24/` for GitHub Pages
- Output directory: `build/` (matching CRA setup)
- Dev server on port 3000 with auto-open
- Path aliases: `@`, `@components`, `@assets`, `@globals`
- SCSS auto-import for variables and mixins

### ESLint Config (`.eslintrc.json`)
- Extends: react-app, jsx-a11y, prettier
- Warnings for: prettier issues, a11y, prop-types, console statements
- Configured for React best practices

### Prettier Config (`.prettierrc.json`)
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2
}
```

### Git Hooks (`.husky/pre-commit`)
- Runs `lint-staged` on commit
- Auto-formats and lints staged files
- Ensures code quality before commits

### Lint-Staged Config
- JS/JSX files: ESLint auto-fix + Prettier
- SCSS/CSS/JSON files: Prettier formatting

## Deployment

The site is deployed to **GitHub Pages** using the `gh-pages` package.

### Deployment Process
```bash
npm run deploy
```

This command:
1. Runs `npm run build` (predeploy script)
2. Deploys `build/` directory to `gh-pages` branch
3. Site goes live at https://ammarberkovic.github.io/Portfolio24/

### Important Configuration for GitHub Pages
- `vite.config.js`: `base: '/Portfolio24/'`
- `package.json`: `homepage: "https://ammarberkovic.github.io/Portfolio24"`
- `index.jsx`: Uses `HashRouter` (required for GitHub Pages client-side routing)

## Code Quality

### ESLint Rules
- Prettier integration (warns on formatting issues)
- Accessibility checking (jsx-a11y plugin)
- React hooks exhaustive deps warnings
- Console.log warnings (error and warn allowed)
- Prop-types validation warnings

### Pre-commit Hooks
All staged files are automatically:
1. Linted with ESLint (auto-fix enabled)
2. Formatted with Prettier
3. Blocked from commit if issues can't be auto-fixed

## Current State (as of 2026-01-25)

### Recent Changes
Based on git status, the following files have modifications:
- `.env` - EmailJS configuration updated
- `package.json` & `package-lock.json` - Dependencies updated
- Multiple component files updated:
  - `about/about.scss`
  - `contact/Contact.jsx` & `contact.scss`
  - `landing/Landing.jsx`
  - `navigation/Navigation.jsx`
  - `particles/Particles.jsx`
  - `projects/Projects.jsx` & `project/Project.jsx`
  - `pages/Home.jsx`

### Migration Notes
- **Migrated from Create React App to Vite**
- Deleted CRA files: `src/index.js`, `reportWebVitals.js`, `setupTests.js`
- Created new Vite entry point: `src/index.jsx`
- Added `index.html` at root
- Added `vite.config.js` for configuration

### New Additions
- Error boundary component for better error handling
- Constants folder with responsive breakpoints
- Husky + lint-staged for code quality automation
- ESLint + Prettier configuration
- Toastify for user notifications

### Recent Commits
1. `638ad68` - Toastify dependency for notifications
2. `dba81ac` - Readjust landing symmetric, Breakpoints added, code cleaned up
3. `9871aeb` - Merge PR #1 from master-rubicon
4. `c0b0330` - Implement CV download
5. `70b2907` - Change title

## Notes for Future Development

### To-Do Items (from README)
- SVG to WEBP conversion
- Background remover integration
- SVG Viewer component

### Best Practices
1. Always run `npm run lint:fix` before committing
2. Use defined breakpoints from `constants/breakpoints.js` for responsive design
3. Follow the established SCSS pattern with component-scoped files
4. Wrap new sections in `ErrorBoundary` components
5. Use path aliases (`@components`, `@assets`, etc.) for cleaner imports
6. Test locally with `npm run preview` before deploying
7. Keep `.env` file out of version control (already in `.gitignore`)

### Common Tasks
- **Adding a new section**: Create component in `src/components/`, add to `Home.jsx`, wrap in `ErrorBoundary`
- **Updating styles**: Edit component SCSS file, global variables available automatically
- **Adding projects**: Update `Projects.jsx` component with new project data
- **Changing contact form**: Modify `Contact.jsx` and update EmailJS template if needed
- **Deploying changes**: Commit changes, then run `npm run deploy`

## Contact Form Integration

The contact form uses **EmailJS** for sending emails without a backend server.

### Configuration
- Service ID, Template ID, and Public Key stored in `.env`
- Variables prefixed with `VITE_` to be accessible in Vite
- Form component: `src/components/contact/Contact.jsx`

### To Update EmailJS
1. Log into EmailJS dashboard
2. Update template if needed
3. Update `.env` file with new credentials
4. Rebuild and redeploy

---

**Last Updated**: 2026-01-25
**Current Branch**: master
**Build Tool**: Vite 5.4.21
**React Version**: 18.2.0
