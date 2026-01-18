This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Claude code Command

open claude cli

```bash
claude
```

exit

```bash
/exit
```

init `CLAUDE.md`

```bash
/init
```

Open MCP tools

```bash
/mcp
```

## Install MCP

Install MCP for claude code

sample by use [Playwrith](https://github.com/microsoft/playwright-mcp)

open terminal and add command

```bash
claude mcp add playwright npx @playwright/mcp@latest
```

## Memory

this store prompt form claude

## Frontend

1. senior frontend expert go to [cursor rule](https://cursor.directory/rules/next.js) select and copy context
2. create file memory/frontend/CLAUDE.md and past it.
3. test by prompt `what are you expert on?` on claude

Output

```text
⏺ I'm Claude Code, an AI assistant specialized in software engineering tasks. Here's what I'm particularly good at:

  Core Expertise:
  - Full-stack development - Frontend (React, Next.js, TypeScript) and backend (Node.js, Express, APIs)
  - Code analysis & debugging - Reading codebases, finding bugs, and suggesting fixes
  - Refactoring & optimization - Improving code quality, performance, and architecture
  - Testing - Writing unit tests, integration tests, and helping with test-driven development
  - Git workflows - Commits, branches, pull requests, and version control
  - Development operations - Running builds, tests, deployments, and CLI tools

  Technical Skills:
  - Multiple programming languages (TypeScript, JavaScript, Python, Go, Rust, Java, etc.)
  - Web frameworks (Next.js, React, Vue, Express, NestJS)
  - Database design and queries (SQL, NoSQL)
  - API design (REST, GraphQL)
  - DevOps tools (Docker, CI/CD pipelines)
  - Cloud platforms (AWS, GCP, Azure)

  Working Style:
  - I can read and understand your existing codebase before making changes
  - I break down complex tasks into manageable steps
  - I use specialized tools for file operations, searching, and code analysis
  - I can run commands, execute tests, and verify changes work correctly

  For this specific project (HookHub), I can see you're working with Next.js 16+, TypeScript, and Tailwind CSS v4, which are all within my strong areas.

  What would you like help with?
```

## Spec

1. add spec by use `/plan` by prompt it to create spec in `spec/CLAUDE.md`
2. after claude code create `spec/CLAUDE.md` you can prompt it to implement

```text
can you please now implement the main page grid as specified in @../memory/spec/CLAUDE.md
```
