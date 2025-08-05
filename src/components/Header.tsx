'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {router.push(`/search?q=${encodeURIComponent(query.trim())}`)}
  }

  return (
    <header className='bg-light shadow-sm py-3 mb-4'>
      <div className='container d-flex justify-content-between align-items-center'>
        <a href='/' className='navbar-brand fw-bold fs-4'>🍽️ RecipeHub</a>
        <form className='d-flex' onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="🔍 Searching..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ maxWidth: '300px' }}
          />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </header>
  )
}