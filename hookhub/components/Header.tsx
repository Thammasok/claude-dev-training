'use client'

import { HookCategory } from '@/types/hook'

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function Header({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: HeaderProps) {
  const categories = ['All', ...Object.keys(HookCategory)]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-black/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              HookHub
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Discover Claude Code Hooks
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search hooks..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="h-10 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-50 md:w-64"
            />

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="h-10 rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-zinc-50"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Categories' : (category in HookCategory ? HookCategory[category as keyof typeof HookCategory] : category)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}
