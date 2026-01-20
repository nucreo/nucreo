# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server on port 8080 (hot reload)
pnpm build      # Production build (client + server)
pnpm start      # Run production server
pnpm typecheck  # TypeScript validation
pnpm test       # Run Vitest tests
pnpm format.fix # Format code with Prettier
```

## Architecture

This is a full-stack React SPA with an optional Express backend, using Vite for development and building.

### Project Structure

- `client/` - React SPA frontend
  - `pages/` - Route components (Index.tsx = home)
  - `components/ui/` - shadcn/ui component library (49 components)
  - `components/nucreo/` - Application-specific components
  - `App.tsx` - Entry point with routing setup
  - `global.css` - TailwindCSS theming (CSS variables)
- `server/` - Express API backend (create routes only when necessary)
- `shared/` - Types shared between client and server

### Path Aliases

- `@/*` - Client folder (`./client/*`)
- `@shared/*` - Shared folder (`./shared/*`)

### Key Patterns

**Routing**: React Router 6 in `client/App.tsx`. Add new routes above the catch-all `*` route.

**Styling**: TailwindCSS 3 with CSS variable-based theming. Use the `cn()` utility from `@/lib/utils` for conditional classes.

**UI Components**: shadcn/ui components in `client/components/ui/`. Configure via `components.json`.

**API Routes**: Only create server endpoints when strictly necessary (private keys, DB operations). Pattern:
1. Define interface in `shared/api.ts`
2. Create handler in `server/routes/`
3. Register in `server/index.ts` with `/api/` prefix

### Tech Stack

- React 18 + TypeScript + Vite + TailwindCSS 3
- Radix UI primitives + Lucide React icons
- React Query for data fetching
- Framer Motion for animations
- React Three Fiber for 3D graphics
