# Sing Real Estate Team — Website

React + CSS rebuild of [singrealestateteam.ca](https://www.singrealestateteam.ca), using [Next.js 16](https://nextjs.org) with the App Router.

## Stack

- **Next.js 16** — App Router (`src/app/`)
- **React** — UI components (`src/components/`)
- **CSS** — global styles in `src/app/globals.css`
- **Framer Motion** — hero scroll effects and reveal animations

## Run locally

```powershell
cd C:\Users\User\Desktop\Git\singteam
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```powershell
npm run build
npm run start
```

Deploy to Vercel for the best Next.js experience, or any platform that supports Node.js.

## Project layout

```
src/
  app/          layout, page, globals.css
  components/   Header, Hero, Listings, etc.
  data/         Listings, services, contact copy
  hooks/        Scroll header, carousel helpers
```
