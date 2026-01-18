export default function Hero() {
  const scrollToHooks = () => {
    const hooksSection = document.getElementById('hooks-grid')
    if (hooksSection) {
      hooksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white py-16 dark:border-zinc-800 dark:from-zinc-950 dark:to-black md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
            Discover Claude Code Hooks
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
            Claude Code hooks enable you to customize and extend Claude Code&apos;s behavior.
            Browse our curated collection of open-source hooks to enhance your workflows,
            improve productivity, and implement best practices.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={scrollToHooks}
              className="flex h-12 w-full items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:w-auto"
            >
              Browse All Hooks
            </button>
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/hooks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 sm:w-auto"
            >
              Quick Start Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
