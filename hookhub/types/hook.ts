export enum HookCategory {
  MONITORING = 'Monitoring & Observability',
  SECURITY = 'Security & Validation',
  WORKFLOW = 'Workflow Automation',
  TESTING = 'Testing & Quality',
  INTEGRATION = 'External Integration',
  UTILITY = 'Utilities & Helpers',
  LEARNING = 'Learning & Examples',
  TEAM = 'Team Collaboration',
}

export enum HookType {
  PRE_TOOL_USE = 'PreToolUse',
  POST_TOOL_USE = 'PostToolUse',
  USER_PROMPT_SUBMIT = 'UserPromptSubmit',
  NOTIFICATION = 'Notification',
  STOP = 'Stop',
  SUBAGENT_STOP = 'SubagentStop',
  SUBAGENT_START = 'SubagentStart',
  SUBAGENT_STREAM = 'SubagentStream',
}

export type HookCategoryKey = keyof typeof HookCategory
export type HookTypeKey = keyof typeof HookType

export interface Hook {
  id: string // Unique identifier
  name: string // Display name (e.g., "Multi-Agent Observer")
  category: HookCategoryKey // Category enum key
  description: string // Brief description (max 200 chars)
  githubUrl: string // Full GitHub repository URL
  author: string // GitHub username/organization
  stars?: number // GitHub stars (cached)
  language: string // Primary language (Python, JS, etc.)
  hookTypes: HookTypeKey[] // Types of hooks implemented
  lastUpdated?: Date // Last repository update
  featured?: boolean // Admin-curated featured status
}
