import { Hook } from '@/types/hook'
import HookCard from './HookCard'

interface HookGridProps {
  hooks: Hook[]
}

export default function HookGrid({ hooks }: HookGridProps) {
  if (hooks.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            No hooks found matching your criteria.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            Try adjusting your search or filters.
          </p>
        </div>
      </div>
    )
  }

  return (
    <section id="hooks-grid" className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            All Hooks
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Showing {hooks.length} {hooks.length === 1 ? 'hook' : 'hooks'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hooks.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </div>
      </div>
    </section>
  )
}
