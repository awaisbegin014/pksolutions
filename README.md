# The Yellow Solutions — Website

A React + Tailwind CSS website for The Yellow Solutions, built with Vite and React Router.

## Pages

- `/` — Home
- `/about` — About Us
- `/careers` — Careers (includes an application form)
- `/contact` — Contact Us

Every "Join Our Team" / "Grow with us" style call-to-action across the site (navbar button, footer link, closing CTA sections) links straight to **/careers**, as requested.

## Getting started

This project was built without a live network connection, so dependencies have **not** been installed yet. On a machine with internet access:

```bash
cd yellow-solutions
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/          logo
  components/       Navbar, Footer, Button, SectionHeading, ServiceCard, TeamCard, CTASection, Reveal, ScrollToTop
  pages/            Home, About, Careers, Contact
  App.jsx           routes
  main.jsx          entry point
  index.css         Tailwind + base styles
tailwind.config.js  brand color tokens, fonts, animations
```

## Notes for next steps

- **Team photos**: the 4 team cards on the About page (`src/components/TeamCard.jsx`) are intentionally left as empty placeholders. Drop real photos into `src/assets/team/` and update `src/pages/About.jsx` (`team` array) with an `image` field per member when ready.
- **Content**: names, roles, stats, perks, and open positions are placeholder copy so the structure could be reviewed first — update the arrays at the top of each page file to swap in real content.
- **Brand color**: `#FFC107` is defined as `brand.yellow` in `tailwind.config.js`, alongside supporting tones (`brand.yellowDark`, `brand.yellowSoft`, `brand.ink`, `brand.slate`, `brand.mist`, `brand.line`) — change them there and the whole site updates.
- **Contact/Careers forms**: currently client-side only (they show a success state on submit but don't send anywhere). Wire them up to an email service or backend endpoint when ready.
