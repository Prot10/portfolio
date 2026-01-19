# Andrea Protani - Portfolio

Personal portfolio website showcasing my research, publications, and projects in AI for Neuroscience.

## Live Site

[andreaprotani.com](https://andreaprotani.com)

## Tech Stack

- **Framework**: Next.js 14.2
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Deployment**: Hostinger (via FTP)

## Features

- Responsive design optimized for all screen sizes
- Interactive 3D globe visualization
- Animated UI components
- Publications showcase with links to papers
- Project portfolio with detailed descriptions
- Work experience timeline

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                # Next.js app router pages
├── components/         # React components
│   └── ui/            # Reusable UI components
├── data/              # Static data (projects, experience, etc.)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── public/            # Static assets (images, icons)
```

## CI/CD

The project uses GitHub Actions for continuous integration and deployment:

- **CI**: Runs on every push - linting, type checking, and build verification
- **Deploy**: Automatically deploys to Hostinger via FTP when CI passes on main branch

## License

MIT
