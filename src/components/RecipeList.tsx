'use client'

import { useState, useEffect } from 'react'

type Recipe = {
    id: string
    name: string
    image: string
    rating: number
    tags: string[]
}

export default function RecipeList({ initialRecipes }: { initialRecipes: Recipe[] }) {
    const [query, setQuery] = useState('')
    const [selectedTags, setSelectedTags] = useState<string | null>(null)
    const [filteredRecipes, setFilteredRecipes] = useState(initialRecipes)

    const allTags = Array.from(new Set(initialRecipes.flatMap(r => r?.tags)))
    useEffect(() => {
        let result = initialRecipes
        if (query) { result = result.filter((r) => r?.name.toLowerCase().includes(query.toLowerCase())) }
        if (selectedTags) { result = result.filter((r) => r?.tags.includes(selectedTags)) }
        setFilteredRecipes(result)
    }, [query, selectedTags, initialRecipes])


    return (
        <div className="container py-5">
            <div className="row mb-4">
                <div className="col-md-8">
                    <h2 className="fw-bold">🍽️ Food Recipes</h2>
                    <p className="text-muted">Welcome to our recipe collection!</p>
                </div>
                <div className="col-md-4 text-end d-flex align-items-center justify-content-end">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Search the recipe..."
                        style={{ maxWidth: '250px' }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map((r) => (
                                <div className="col-md-6 col-lg-4 mb-4" key={r.id}>
                                    <div className="card h-100 shadow-sm">
                                        <a href={`/recipes/${r.id}`}>
                                            <img
                                                src={r.image}
                                                className="card-img-top"
                                                alt={r.name}
                                                style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                                            />
                                        </a>
                                        <div className="card-body text-center">
                                            <h5 className="card-title">
                                                <a
                                                    href={`/recipes/${r.id}`}
                                                    className="text-decoration-none text-dark"
                                                >
                                                    {r.name}
                                                </a>
                                            </h5>
                                            <p className="card-text text-muted">⭐ Rating: {r.rating}</p>
                                            <button className="btn btn-sm btn-outline-primary mt-2">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <div className="alert alert-info text-center">No recipes found.</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="mb-4 p-3 border rounded">
                        <h5>📌 Tags</h5>
                        <div className="d-flex flex-wrap gap-2">
                            {allTags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`badge me-2 mb-2 ${selectedTags === tag ? 'bg-primary' : 'bg-secondary'}`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setSelectedTags(selectedTags === tag ? null : tag)}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-3 border rounded">
                        <h5>🛒 Cart</h5>
                        <p className="text-muted">No items in cart yet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
