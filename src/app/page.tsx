import { getAllRecipes } from '@/src/lib/recipeService'
import RecipeList from '../components/RecipeList'

export default async function HomePage() {
  const recipes = await getAllRecipes()
  return <RecipeList initialRecipes={recipes} />
}
