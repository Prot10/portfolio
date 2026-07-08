# Andrea Protani - Portfolio

Personal portfolio for research, publications, and open-source projects.

## Live Site

[andreaprotani.com](https://andreaprotani.com)

## Tech Stack

- **Framework**: Next.js 14 (static export)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Actions → Hostinger FTP

## Getting Started

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/              # Next.js app router (layout, page, global styles)
├── components/       # Page sections and UI
├── data/             # Site content (profile, publications, experience)
└── public/           # Static assets (favicon, CV, .htaccess)
```

## CI/CD

- **CI**: lint, typecheck, and build on every push to `main`
- **Deploy**: FTP upload of `out/` after CI passes (with clean slate)

### Hostinger setup (important)

Use **one** deploy path only. The repo is configured for **GitHub Actions FTP**:

1. Build command: `npm run build`
2. Publish directory: `out/` (uploaded by the Deploy workflow)

If Hostinger hPanel **Git deployment** is also enabled, it will publish the raw repository into `public_html` without building. That removes `index.html` and causes intermittent **403 Forbidden** until the GitHub FTP deploy finishes (~1-2 minutes later).

**Fix:** In hPanel, disable Git deployment for `andreaprotani.com`, or configure it with build `npm ci && npm run build` and output directory `out`.

## License

MIT
