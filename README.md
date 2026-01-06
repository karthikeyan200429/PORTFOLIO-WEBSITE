# Portfolio Website

A visually appealing, animated, and responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ✨ Smooth animations and transitions
- 📱 Mobile-friendly layout
- 🎯 Interactive sections (Resume, Skills, Projects, Experience, Contact)
- 🌐 Social media links
- 💫 Particle background animation

## Tech Stack

- **Frontend:** React 19.1.1 + TypeScript
- **Styling:** Tailwind CSS 3.4.7 + PostCSS
- **Build Tool:** Vite 6.2.0
- **Development:** Node.js + npm

## Run Locally

**Prerequisites:** Node.js (v16 or higher)

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

### Production Build

```bash
npm run build
npm run preview
```

The build output will be in the `dist/` folder, ready for deployment.

## Project Structure

```
.
├── components/           # React components
│   ├── IconButton.tsx
│   ├── Icons.tsx
│   ├── ParticleBackground.tsx
│   ├── PortfolioContent.tsx
│   ├── SectionPanels.tsx
│   └── SocialLink.tsx
├── public/              # Static assets
│   ├── profile.jpg
│   └── Karthikeyan[resume].pdf
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── index.html           # HTML template
├── index.css            # Global styles
├── tailwind.config.cjs  # Tailwind configuration
├── postcss.config.cjs   # PostCSS configuration
└── vite.config.ts       # Vite configuration
```

## Customization

### Custom Colors

Edit `tailwind.config.cjs` to modify the `brand-teal` color palette.

### Animations

Tailwind animations are defined in `tailwind.config.cjs`:
- `slideIn` - 0.5s slide from right
- `slideOut` - 0.5s slide to right
- `fadeIn` - 0.5s fade in
- `moveGradient` - 30s gradient animation loop

## License

This project is personal and not licensed for redistribution.
