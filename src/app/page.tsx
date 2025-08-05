import { getAllRecipes } from '@/src/lib/recipeService'
import RecipeList from '../components/RecipeList'

export default async function HomePage() {
  const recipes = await getAllRecipes()

  return (
    <div className="container py-4">
      <h4 className="mb-3">All Recipes</h4>
      <RecipeList initialRecipes={recipes} />
    </div>
  )
}
