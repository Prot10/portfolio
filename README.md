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
- **Deploy**: FTP upload of `out/` after CI passes

## License

MIT
