'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HookGrid from '@/components/HookGrid'
import { Hook } from '@/types/hook'
import hooksData from '@/data/hooks.json'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Parse hooks data
  const allHooks: Hook[] = hooksData.hooks as Hook[]

  // Filter hooks based on search query and category
  const filteredHooks = useMemo(() => {
    return allHooks.filter((hook) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === '' ||
        hook.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hook.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hook.author.toLowerCase().includes(searchQuery.toLowerCase())

      // Filter by category
      const matchesCategory =
        selectedCategory === 'All' ||
        hook.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [allHooks, searchQuery, selectedCategory])

  // Sort hooks: featured first, then by stars
  const sortedHooks = useMemo(() => {
    return [...filteredHooks].sort((a, b) => {
      // Featured hooks first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1

      // Then by stars
      const starsA = a.stars || 0
      const starsB = b.stars || 0
      return starsB - starsA
    })
  }, [filteredHooks])

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Hero />
      <HookGrid hooks={sortedHooks} />
    </div>
  )
}
