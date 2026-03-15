# QA Portfolio — Moji Shahi

My React-based portfolio including About section, QA & automation projects , software developer projects , and a “Get in touch” section with a contact form.

## Tech stack

- **React 18** + **Vite**
- CSS Modules per component

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
