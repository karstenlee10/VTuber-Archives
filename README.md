# VTuber Community Archives - GitHub Pages Website

A professional GitHub Pages website showcasing two independent VTuber stream preservation projects. Features automated archiving for Neuro-sama (AI VTuber), Filian, and NeuroVerse community using a custom Python automation script.

🌐 **Live Website**: [View on GitHub Pages](https://neuroverse-vods-website-fc1a9ffe.scout.site)
📺 **NeuroVerse Archive**: [@NeuroVerseUnofficialVODS](https://youtube.com/@NeuroVerseUnofficialVODS) (607 subs, 437 videos)
📺 **Filian Archive**: [@FilianVODSArchive](https://youtube.com/@FilianVODSArchive) (592 subs, 137 videos)
🛠️ **Automation Script**: [Twitch_Stream_To_YouTube](https://github.com/karstenlee10/Twitch_Stream_To_YouTube)

## Project Overview

This website showcases two archive projects:
- **NeuroVerse Archive**: 1 AI VTuber (Neuro-sama) and 5 community creators
- **Filian Archive**: Independent VTuber preservation project
- **Combined Stats**: 1,199 total subscribers, 574 preserved videos
- **Open-source automation** for stream preservation
- **24/7 monitoring** to ensure no stream is lost

## Technology Stack

Built with modern web technologies:
- [Vite](https://vite.dev) + React + TypeScript
- TailwindCSS V4 with custom cyber theme
- ShadCN UI components
- Orbitron & Rajdhani fonts for cyber aesthetic

## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

## Project Configuration

### Package Management

This project uses [Bun](https://bun.sh/) as the package manager:

- Install dependencies: `bun add <package-name>`
- Run scripts: `bun <script-name>`
- Manage dev dependencies: `bun add -d <package-name>`

### Theme Customization

The project uses Tailwind CSS V4 with a theme defined in:

- `src/index.css` - For CSS variables including colors in OKLCH format and custom theming
- Tailwind V4 uses the new `@theme` directive for configuration

### ShadCN UI Components

This project uses [ShadCN UI](https://ui.shadcn.com) for styled components. The components are incorporated directly into the codebase (not as dependencies), making them fully customizable. All components have been installed:

- accordion
- alert-dialog
- alert
- aspect-ratio
- avatar
- badge
- breadcrumb
- button
- calendar
- card
- carousel
- chart
- checkbox
- collapsible
- command
- context-menu
- dialog
- drawer
- dropdown-menu
- form
- hover-card
- input-otp
- input
- label
- menubar
- navigation-menu
- pagination
- popover
- progress
- radio-group
- scroll-area
- select
- separator
- sheet
- skeleton
- slider
- sonner
- switch
- table
- tabs
- textarea
- toast
- toggle-group
- toggle

### Icon Library

[Lucide React](https://lucide.dev/) is the preferred icon library for this project, as specified in components.json. Always use Lucide icons to maintain consistency:

```tsx
import { ArrowRight } from "lucide-react";

// Use in components
<Button>
  <span>Click me</span>
  <ArrowRight />
</Button>;
```

### Custom Cyber Theme

The website features a custom dark cyber theme with:

- **Dark Background**: Deep blue-black base colors
- **Accent Colors**: Cyan and purple gradients
- **Typography**: Orbitron and Rajdhani fonts for futuristic feel
- **Visual Effects**: Glowing borders, pulse animations, custom scrollbars

Fonts used:
- **Orbitron**: Headlines and display text
- **Rajdhani**: Body text and UI elements
- **Inter**: Fallback and accessibility

### Featured Creators

Currently preserving streams from:
- **Neuro-sama** (@Vedal987) - 113 streams (AI VTuber)
- **Cerber** (@cerbervt) - 190 streams (Community)  
- **Mini** (@minikomew) - 97 streams (Community)
- **Mega** (@megalodonvt) - 33 streams (Community)
- **Aquwa** (@aquwa) - 10 streams (Community)
- **Anny** (@not_anny) - 50 streams (Community)

## GitHub Pages Deployment

### Automatic Deployment
The website is automatically built and deployed using GitHub Pages. Any changes pushed to the main branch will trigger a new build.

### Manual Build

```bash
# Install dependencies
bun install

# Build for production
bun run build

# Preview build locally
bun run preview
```

### Project Structure

```
src/
├── App.tsx          # Main application component
├── index.css        # Global styles and cyber theme
├── components/ui/   # ShadCN UI components
└── assets/          # Images and static assets

public/
├── neuro-sama.jpg   # Neuro-sama character image
├── neuro-sama-ai.png # AI VTuber artwork
└── cyber-bg.jpg     # Cyber background
```

## Links

- 🎥 [YouTube Channel](https://youtube.com/@NeuroVerseUnofficialVODS) - Browse preserved streams
- 💻 [Python Script](https://github.com/karstenlee10/Twitch_Stream_To_YouTube) - Automation source code
- 🌐 [Live Website](https://neuroverse-vods-website-fc1a9ffe.scout.site) - This GitHub Pages site

---

*Built with Scout for the NeuroVerse community preservation project 🤖📚*
