# Claude Code Skills & Guidelines

This file contains project-specific skills, coding standards, and best practices for Claude Code to follow when working on this project.

## Project Context

This is a full-stack application using Domain-Driven Design (DDD) with Next.js frontend and Express.js backend.

## Coding Standards

### General Principles

- Write clean, readable, and maintainable code
- Follow SOLID principles
- Use TypeScript strict mode
- Prefer functional programming patterns where appropriate
- Write self-documenting code with meaningful names
- Add comments only for complex business logic

### Naming Conventions

#### Frontend (Next.js)

- **App**: Kebab Case and PascalCase (e.g., `page.tsx`, `layout.tsx`, `HomePage()`, `Layout()`)
- **Components**: Kebab Case and PascalCase (e.g., `user-profile.tsx`, `login-form.tsx`, `UserProfile()`)
- **Hooks**: Kebab Case with and Camel Case `use` prefix (e.g., `use-auth.ts`, `use-debounce.ts`, `useAuth()`, `useDebounce()`)
- **Utilities**: Kebab Case and Camel Case (e.g., `format-date.ts`, `validate-email.ts`, `formatStringToDate()`, `validateEmail()`)
- **Types/Interfaces**: PascalCase (e.g., `User`, `ApiResponse`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`, `MAX_RETRY_COUNT`)
- **Stores**: Kebab Case with `.store.ts` suffix and Camel Case `use` prefix and `Store` suffix (e.g., `auth.store.ts`, `useAuthStore()`)
- **Services**: Kebab Case with `.service.ts` suffix and Camel Case (e.g., `user.service.ts`, `getUsers()`)
- **Schemas**: Kebab Case with `.schema.ts` suffix and Camel Case with `Schema` suffix (e.g., `auth.schema.ts`, `userSchema`)

#### Backend (Express.js)

- **Shared**: PascalCase with `.entity.ts` suffix (e.g., `account.entity.ts`)
- **Entities**: PascalCase with `.entity.ts` suffix (e.g., `account.entity.ts`)
- **Value Objects**: PascalCase with `.vo.ts` suffix (e.g., `email.vo.ts`)
- **Services**: Kebab Case with `.service` and PascalCase with `Service` suffix (e.g., `account.service.ts`, `AccountService`)
- **Repositories**: PascalCase with `Repository` suffix (e.g., `AccountRepository`)
- **Controllers**: PascalCase with `Controller` suffix (e.g., `AccountController`)
- **Validators**: camelCase with `.validator.ts` suffix (e.g., `account.validator.ts`)
- **Routes**: camelCase with `.routes.ts` suffix (e.g., `account.routes.ts`)

## Domain-Driven Design Guidelines

### Domain Layer

- **Entities**: Business objects with identity and lifecycle
  - Must have an ID
  - Contain business logic
  - Should be framework-agnostic

- **Value Objects**: Immutable objects without identity
  - Validate data in constructor
  - Provide business methods
  - Examples: Email, Money, DateRange

### Repository Layer

- Interface-driven design (dependency inversion)
- Only data access concerns
- No business logic
- Return domain entities, not database records

### Service Layer

- Orchestrate business logic
- Use repositories for data access
- Handle transactions
- Coordinate between multiple entities/repositories
- No HTTP concerns (status codes, headers, etc.)

### Controller Layer

- Handle HTTP request/response
- Validate input (use validators)
- Call service methods
- Format response
- Handle errors and return appropriate status codes

## Technology-Specific Guidelines

### Frontend (Next.js 16+)

#### Server Components vs Client Components

- **Default to Server Components** for better performance
- Use Client Components (`'use client'`) only when needed:
  - Event handlers (onClick, onChange, etc.)
  - Browser APIs (localStorage, window, etc.)
  - React hooks (useState, useEffect, etc.)
  - Context providers and consumers

#### Data Fetching

- Use `fetch` with Next.js caching for Server Components
- Use Axios in client-side services
- Handle loading and error states

#### Form Handling

- Use React Hook Form with Zod schemas
- Validate on submit, not on change (for better UX)
- Show clear error messages

#### State Management

- Use Zustand for global client state
- Keep state close to where it's used
- Server state should use React Query or similar

### Backend (Express.js)

#### Error Handling

- Use custom error classes
- Global error handler middleware
- Return consistent error responses
- Log errors appropriately

#### Validation

- Validate all input with Joi
- Separate validation schemas
- Return clear validation errors

#### Authentication & Authorization

- Use JWT tokens
- Implement middleware for auth checks
- Store tokens securely
- Implement refresh token mechanism

#### Database (Knex.js)

- Use migrations for schema changes
- Use seeds for test data
- Use transactions for multi-step operations
- Use query builder, avoid raw queries when possible

### Testing

#### Frontend Testing

- Unit tests for utilities and hooks
- Component tests for UI components
- Integration tests for flows
- Use Jest and React Testing Library

#### Backend Testing

- **Unit tests**: Domain layer (entities, value objects)
- **Integration tests**: Repository layer (database operations)
- **Component tests**: Service layer (business logic)
- **APIs tests**: Full API flows follow E2E Flow

## Common Patterns

### Frontend Patterns

#### API Service Pattern

```typescript
// services/user.service.ts
import { apiClient } from './request'
import { User } from '@/types/user'

export const userService = {
  getUser: async (id: string): Promise<User> => {
    const { data } = await apiClient.get(`/users/${id}`)
    return data
  },

  updateUser: async (id: string, userData: Partial<User>): Promise<User> => {
    const { data } = await apiClient.put(`/users/${id}`, userData)
    return data
  },
}
```

#### Zustand Store Pattern

```typescript
// stores/auth.store.ts
import { create } from 'zustand'

interface AuthState {
  user: User | null
  token: string | null
  setAuth: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setAuth: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
}))
```

### Backend Patterns

#### Repository Pattern

```typescript
// Interface
export interface IAccountRepository {
  findById(id: string): Promise<Account | null>
  create(account: Account): Promise<Account>
  update(id: string, account: Partial<Account>): Promise<Account>
  delete(id: string): Promise<void>
}

// Implementation
export class AccountRepository implements IAccountRepository {
  constructor(private db: Knex) {}

  async findById(id: string): Promise<Account | null> {
    const row = await this.db('accounts').where({ id }).first()
    return row ? this.mapToEntity(row) : null
  }

  // ... other methods
}
```

#### Service Pattern

```typescript
export class AccountService {
  constructor(
    private accountRepository: IAccountRepository,
    private emailGateway: IEmailGateway,
  ) {}

  async createAccount(dto: CreateAccountDto): Promise<Account> {
    // Business logic
    const account = Account.create(dto)

    // Persist
    const savedAccount = await this.accountRepository.create(account)

    // Side effects
    await this.emailGateway.sendWelcomeEmail(savedAccount.email)

    return savedAccount
  }
}
```

#### Controller Pattern

```typescript
export class AccountController {
  constructor(private accountService: AccountService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto = req.body
      const account = await this.accountService.createAccount(dto)
      res.status(201).json({ success: true, data: account })
    } catch (error) {
      next(error)
    }
  }
}
```

## Security Guidelines

### Frontend

- Never store sensitive data in localStorage (use httpOnly cookies)
- Sanitize user input
- Implement CSRF protection
- Use Content Security Policy headers

### Backend

- Validate and sanitize all input
- Use parameterized queries (prevent SQL injection)
- Implement rate limiting
- Use helmet middleware for security headers
- Hash passwords with bcrypt
- Implement proper CORS configuration

## Performance Guidelines

### Frontend

- Use Next.js Image component for images
- Implement lazy loading
- Code splitting for large pages
- Minimize bundle size
- Use React.memo for expensive components

### Backend

- Use database indexes
- Implement caching (Redis)
- Use connection pooling
- Paginate large result sets
- Optimize database queries

## Git Commit Guidelines

- Use conventional commits format:
  - `feat:` New feature
  - `fix:` Bug fix
  - `docs:` Documentation changes
  - `refactor:` Code refactoring
  - `test:` Adding or updating tests
  - `chore:` Maintenance tasks

Example: `feat(auth): implement JWT refresh token mechanism`

## When Creating New Features

1. **Plan first**: Understand requirements and domain
2. **Design**: Create interfaces and DTOs
3. **Implement domain layer**: Entities and value objects
4. **Implement repository**: Data access
5. **Implement service**: Business logic
6. **Implement controller**: HTTP layer
7. **Add validation**: Input validation
8. **Add tests**: Unit, integration, and E2E tests
9. **Document**: Update API documentation

## Code Review Checklist

- [ ] Follows naming conventions
- [ ] Properly typed (no `any` unless necessary)
- [ ] Error handling implemented
- [ ] Input validation added
- [ ] Tests written and passing
- [ ] No console.logs in production code
- [ ] No hardcoded values (use environment variables)
- [ ] Follows DDD principles
- [ ] Documentation updated
- [ ] No security vulnerabilities

## Common Commands Reference

### Frontend

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run test` - Run tests

### Backend

- `pnpm run dev` - Start development server
- `pnpm run migrate` - Run database migrations
- `pnpm run test` - Run tests

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
- [Domain-Driven Design](https://martinfowler.com/tags/domain%20driven%20design.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
