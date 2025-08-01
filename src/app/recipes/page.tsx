import { getAllRecipes } from '@/src/lib/recipeService'

export default async function RecipesPage() {
    try {
      const recipes = await getAllRecipes()
      return (
        <div>
          <h1>All Recipes</h1>
          <ul>
            {recipes.map((r: any) => (
              <li key={r.id}>
                <a href={`/recipes/${r.id}`}>{r.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )
    } catch (err) {
      console.error("Error loading recipes:", err)
      return <div>Error loading recipes</div>
    }
  }
  
