# QA Portfolio — Moji Shahi

A React-based portfolio with a dark night-sky theme: About section, central photo with decorative rings, QA & automation projects grid, software developer projects grid, and a “Get in touch” section with a contact form.

## Tech stack

- **React 18** + **Vite**
- CSS Modules per component
- No extra UI libraries

## What’s included

- **Header** — “QA Portfolio” + Download CV (no “View Portfolio” button)
- **Hero** — About Me, photo with multiple concentric rings, nav (Home, Portfolio, Software, Get in touch), social links
- **Portfolio (QA)** — “Selected QA & automation projects” — 4 cards (Cypress, OrangeHRM, API placeholder, Selenium placeholder)
- **Software** — “Software developer projects” — 4 placeholder cards
- **Get in touch** — Left: “Got a project? Let’s talk.” + email link; Right: “Estimate your project? Let me know here.” + form (name, email, message) + attach + send
- **Footer** — Logo, “Thanks for scrolling, that’s all folks.”, LinkedIn + email icons

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` (or the URL Vite prints).

**Build for production:**

```bash
npm run build
npm run preview   # preview the built site
```

## Project structure

```
Portfolio-QA/
├── index.html              # Vite entry
├── package.json
├── vite.config.js
├── public/
│   ├── assets/
│   │   └── Moji-Shahi-CV.pdf
│   └── photo.jpeg          # Your profile photo
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css           # Global styles + night-sky background
│   └── components/
│       ├── Header.jsx + Header.module.css
│       ├── Hero.jsx + Hero.module.css
│       ├── PortfolioQA.jsx + PortfolioQA.module.css
│       ├── PortfolioSoftware.jsx + PortfolioSoftware.module.css
│       ├── GetInTouch.jsx + GetInTouch.module.css
│       └── Footer.jsx + Footer.module.css
├── index-static-backup.html   # Original single-file HTML backup
└── README.md
```

## Customize

1. **Email** — Replace `moji@example.com` in `Hero.jsx`, `GetInTouch.jsx`, and `Footer.jsx`.
2. **LinkedIn** — Update the LinkedIn URL in `Hero.jsx` and `Footer.jsx`.
3. **QA projects** — Edit the `QA_PROJECTS` array in `src/components/PortfolioQA.jsx` (titles, links, descriptions).
4. **Software projects** — Edit the `SOFTWARE_PROJECTS` array in `src/components/PortfolioSoftware.jsx`.
5. **Photo** — Replace `public/photo.jpeg` (current copy of your WhatsApp image).
6. **CV** — Replace `public/assets/Moji-Shahi-CV.pdf` to update the downloadable CV.
