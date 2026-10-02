# Defenseflow

A cinematic, dark-themed marketing landing site built with Next.js 16, React 19, Tailwind CSS, and shadcn/ui components. Features an animated hero, stats sections, feature grids, and a full component library.

## Features

- **Dark cinematic design** — full-bleed hero, animated sections, premium typography
- **shadcn/ui component library** — accordion, dialog, dropdown, tabs, tooltips, and more
- **Framer Motion animations** — scroll-triggered reveals and micro-interactions
- **Drag-and-drop** — dnd-kit powered sortable components
- **Rich text editing** — MDXEditor integration
- **Prisma + SQLite** — optional data layer (`src/lib/db.ts`) for User/Post models

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | App Router framework |
| React 19 | UI library |
| Tailwind CSS | Utility-first styling |
| shadcn/ui + Radix UI | Accessible component primitives |
| Framer Motion | Animations |
| Prisma 6 (SQLite) | Optional ORM data layer |
| TypeScript | Type safety |

## Quick Start

```bash
git clone https://github.com/girishlade111/Defenseflow.git
cd Defenseflow
npm install
npm run dev
```

Open http://localhost:3000

### Production build (static export)

```bash
npx next build     # outputs to out/
```

The live site is deployed as a static export (`output: "export"` in `next.config.ts`).

## Project Structure (source)

```
Defenseflow/
├── next.config.ts          # Next config (static export + unoptimized images)
├── src/
│   ├── app/
│   │   ├── page.tsx        # Landing page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── defenseflow/    # Header, Hero, StatsSection, grids, CTA, Footer
│   │   └── ui/             # shadcn/ui primitives
│   ├── lib/
│   │   └── db.ts           # Prisma client (optional data layer)
│   ├── hooks/
│   └── components.json     # shadcn/ui config
├── prisma/schema.prisma    # User/Post models (SQLite)
└── public/                 # Static assets
```

Full source is retained in git history (commits before this deploy snapshot).

## Env Vars

- `DATABASE_URL` — only needed if you use the Prisma data layer (`src/lib/db.ts`); the deployed static site does not require it.

## Deploy Notes

Deploys as a fully static site to any static host (Netlify, GitHub Pages, Cloudflare Pages, Vercel). The demo `/api` route was excluded from the static export build; re-enable SSR/standalone output if you need server features.

---

Built by Girish Lade · https://ladestack.in
