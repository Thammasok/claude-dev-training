# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 16+ application built with TypeScript and Tailwind CSS v4. The project uses the App Router architecture introduced in Next.js 13 and follows modern React patterns.

## Tech Stack

- **Framework**: Next.js 16.1.3 (TypeScript)
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono (via next/font)
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js recommended configs

## Project Structure

```text
hookhub/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with font configuration
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind imports
├── public/                # Static assets
├── .next/                 # Build output (generated)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── eslint.config.mjs      # ESLint configuration (v9+)
├── postcss.config.mjs     # PostCSS configuration
└── pnpm-workspace.yaml    # pnpm workspace configuration
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Key Configuration Details

### TypeScript Configuration

- **Target**: ES2017
- **JSX**: react-jsx
- **Module Resolution**: bundler
- **Path Alias**: `@/*` maps to project root
- **Strict Mode**: Enabled

### Tailwind CSS v4

- Uses the new Tailwind v4 architecture with PostCSS plugin `@tailwindcss/postcss`
- Global styles imported via `@import "tailwindcss"` in `globals.css`
- Custom CSS variables defined with `@theme inline` directive
- Dark mode support via `prefers-color-scheme` media query
- Custom color tokens: `--color-background` and `--color-foreground`
- Font tokens: `--font-sans` and `--font-mono` (mapped to Geist fonts)

### ESLint Configuration

- Uses ESLint v9+ flat config format
- Extends Next.js recommended configs:
  - `eslint-config-next/core-web-vitals`
  - `eslint-config-next/typescript`
- Ignores build directories: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Next.js App Router

This project uses the App Router (not Pages Router):

- All routes are defined in the `app/` directory
- Server Components by default
- `layout.tsx` defines the root layout with shared UI
- `page.tsx` files define route pages
- Font optimization handled via `next/font/google`
- Metadata exported from layout/page components

## Development Notes

- The project uses pnpm workspaces (configured in `pnpm-workspace.yaml`)
- Path alias `@/*` allows importing from project root: `import Component from '@/app/component'`
- Tailwind CSS v4 syntax differs from v3 - uses `@theme inline` for custom theme values
- Dark mode is automatically handled by CSS media queries
- Next.js Image component is used for optimized images
