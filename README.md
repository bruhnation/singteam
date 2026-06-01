# Sing Real Estate Team — Website

React + CSS rebuild of [singrealestateteam.ca](https://www.singrealestateteam.ca), using [Vite](https://vite.dev) for development and production builds.

## Stack

- **React** — UI components (`src/components/`)
- **CSS** — global styles in `src/index.css` (same design as before)
- **Vite** — dev server and bundler (not Python)

## Run locally

```powershell
cd C:\Users\diego\desktop\git\singteam
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```powershell
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

## Project layout

```
src/
  components/   Header, Hero, Listings, etc.
  data/         Listings, services, contact copy
  hooks/        Scroll header, hero carousel
  index.css     All styles
  App.jsx       Page layout
  main.jsx      React entry point
```

## Note on Python

Python was only ever suggested as `python -m http.server` to preview the old static HTML files. This project uses **`npm run dev`** instead — that is the normal way to run React apps.
