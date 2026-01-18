import { Hook, HookCategory } from '@/types/hook'

interface HookCardProps {
  hook: Hook
}

export default function HookCard({ hook }: HookCardProps) {
  const categoryColors: Record<string, string> = {
    MONITORING: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    SECURITY: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    WORKFLOW: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    TESTING: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    INTEGRATION: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    UTILITY: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
    LEARNING: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
    TEAM: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  }

  const languageColors: Record<string, string> = {
    Python: 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400',
    JavaScript: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400',
    TypeScript: 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400',
    PHP: 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400',
  }

  const getCategoryColor = (category: string) => {
    return categoryColors[category] || categoryColors.UTILITY
  }

  const getLanguageColor = (language: string) => {
    return languageColors[language] || 'bg-gray-50 text-gray-700 dark:bg-gray-950/50 dark:text-gray-400'
  }

  return (
    <div className="group relative flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      {/* Featured Badge */}
      {hook.featured && (
        <div className="absolute -right-2 -top-2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-zinc-900">
          Featured
        </div>
      )}

      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
          {hook.name}
        </h3>
        {hook.stars !== undefined && (
          <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">{hook.stars}</span>
          </div>
        )}
      </div>

      {/* Category Badge */}
      <div className="mb-3">
        <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(hook.category)}`}>
          {HookCategory[hook.category]}
        </span>
      </div>

      {/* Description */}
      <p className="mb-4 line-clamp-2 flex-grow text-sm text-zinc-600 dark:text-zinc-400">
        {hook.description}
      </p>

      {/* Author and Language */}
      <div className="mb-4 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <span>{hook.author}</span>
        </div>
        <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${getLanguageColor(hook.language)}`}>
          {hook.language}
        </span>
      </div>

      {/* Hook Types */}
      <div className="mb-4 flex flex-wrap gap-1">
        {hook.hookTypes.map((type) => (
          <span
            key={type}
            className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {type}
          </span>
        ))}
      </div>

      {/* View on GitHub Button */}
      <a
        href={hook.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-900 bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        View on GitHub
      </a>
    </div>
  )
}
