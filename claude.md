# CLAUDE.md

## Project Overview

This is templete for setup claude for your project

## System Architecture

### Domain-Driven Design Structure

The application is organized into bounded contexts (domains) to facilitate future microservices extraction:

- Account Management Domain - Account and profile management
- Authentication Domain - Authentication and Authorization management

## Development Setup

## Tech Stack

### Frontend

- Framework: Next.js 16+ (TypeScript)
- Styling: Tailwind CSS
- UI Components: shadcn/ui
- State Management: Zustand
- Form Handling: React Hook Form + Zod
- HTTP Client: Axios

#### Directory Structure (Next.js 16+, TypeScript)

```text
web/
├── src/
│   ├── app/                              # App Router (routing, layouts)
│   │   ├── (public)/                     # Public routes (no auth)
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (protected)/                  # Auth required routes
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├──  settings/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/                           # shadcn/ui (generated)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── dialog.tsx
│   │   │
│   │   └── common/                       # Reusable generic components
│   │       ├── header.tsx
│   │       ├── sidebar.tsx
│   │       └── loading.tsx
│   │
│   ├── constants/
│   │
│   ├── stores/                           # Zustand stores
│   │       ├── auth.store.ts
│   │       └── setting.store.ts
│   │
│   ├── services/                         # API / external services
│   │   ├── request.ts                    # Axios instance
│   │   ├── auth.service.ts
│   │   └── user.service.ts
│   │
│   ├── schemas/                          # Zod schemas
│   │   ├── auth.schema.ts
│   │   └── user.schema.ts
│   │
│   ├── hooks/                            # Custom hooks
│   │   ├── use-auth.ts
│   │   └── use-debounce.ts
│   │
│   ├── lib/                              # Utilities / helpers
│   │   ├── env.ts
│   │   ├── constants.ts
│   │   └── utils.ts
│   │
│   ├── types/                            # Global TypeScript types
│   │   ├── api.d.ts
│   │   └── user.d.ts
│   │
├── types/
│   ├── cache-life.d.ts
│   ├── routes.d.ts
│   └── validator.ts
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

#### Frontend Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start

# Run linting
pnpm run lint

# Run type checking
pnpm run type-check

# Run tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Format code
pnpm run format
```

### Backend

- Framework: Express.js (TypeScript)
- Architecture: Layered Architecture (Router → Controller → Service → Repository)
- Validation: Joi
- Authentication: JWT
- Database: Knex js
- API Documentation: Swagger

#### Directory Structure (Domain-Driven)

```text
service/
├── src/
│   ├── shared/
│   │   ├── config/                                         # example database, env, logger
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── types/
│   │
│   ├── domains/
│   │   └── account/
│   │       ├── domain/
│   │       │   ├── tests/                                  # unit testing files
│   │       │   │   ├── account.unit.ts
│   │       │   │   └── account-profile.unit.ts
│   │       │   ├── account.entity.ts
│   │       │   ├── account-profile.entity.ts
│   │       │   └── value-objects/
│   │       │       ├── account.vo.ts
│   │       │       └── account.vo.ts
│   │       ├── repository/
│   │       │   ├── tests/                                  # integration testing files
│   │       │   │   ├── account.integrate.ts
│   │       │   │   └── account-profile.integrate.ts
│   │       │   ├── account.repository.interface.ts
│   │       │   ├── account.repository.ts
│   │       │   └── accoccunt-profile.repository.ts
│   │       ├── service/
│   │       │   ├── tests/                                  # component testing files
│   │       │   │   ├── account.component.ts
│   │       │   │   └── account-profile.component.ts
│   │       │   ├── account.service.ts
│   │       │   └── account-profile.service.ts
│   │       ├── controller/
│   │       │   └── account.controller.ts
│   │       ├── dto/
│   │       │   ├── create-account.dto.ts
│   │       │   └── update-account.dto.ts
│   │       ├── validator/
│   │       │   └── account.validator.ts
│   │       └── routes/
│   │           └── account.routes.ts
│   │
│   ├── gateways/
│   │   └── email/
│   │       ├── email.gateway.interface.ts
│   │       ├── email.gateway.ts
│   │       └── templates/
│   │           ├── welcome.template.ts
│   │           └── budget-alert.template.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── database/
│   ├── knexfile.ts
│   ├── migrations/                                         # example 20240101000001_create_accounts_table.ts
│   └── seeds/                                              # example 01_accounts.ts
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

#### Backend Commands

```bash
# Install dependencies
pnpm install

# Run development server with hot reload
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start

# Run linting
pnpm run lint

# Run type checking
pnpm run type-check

# Run tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run database migrations
pnpm run migrate

# Rollback database migrations
pnpm run migrate:rollback

# Generate Swagger API documentation
pnpm run swagger

# Format code
pnpm run format
```

### Database

- Database: PostgreSQL 18+
- Migration Tool: Liquibase Migrations
