# Annet's Portfolio

A personal portfolio website built with React and Vite, styled after the macOS Finder window aesthetic.

## Features

- **Finder-style UI:** traffic-light window controls, menu bar with Apple-menu dropdown, dock-free layout
- **Projects grid:** 3×2 desktop grid that collapses to a single-column list on mobile, with live search
- **Project detail pages:** full case-study articles with real outputs from my projects

## Tech Stack

- React 18 + React Router 6
- Vite 5
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Fonts: Instrument Serif, Inter, Shantell Sans (Google Fonts)

## Structure

```
annet-portfolio/
├── public/
│   ├── assets/      # favicon, apple/menu icons
│   └── images/      # project screenshots
├── src/
│   ├── components/  # Menubar (+ About modal), ProjectArt
│   ├── data/        # projects.js for all project content
│   ├── pages/       # Projects grid + ProjectDetail
│   └── App.jsx      # routes
├── index.html
├── vercel.json
└── vite.config.js
```