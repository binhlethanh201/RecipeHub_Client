'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import RecipeList from './RecipeList'

export default function SearchResultPage(){
    const searchParams = useSearchParams()
    const query = searchParams.get('q') || ''
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        const fetchRecipes =  async () => {
            const res = await fetch(`api/search?q=${encodeURIComponent(query)}`)
            const data = await res.json()
            setRecipes(data)
        }
        if(query) fetchRecipes()
    }, [query])

    return(
        <div className="container py-4">
        {query && <h2>Search results for: <em>{query}</em></h2>}
        <RecipeList initialRecipes={recipes} />
      </div>
    )
}